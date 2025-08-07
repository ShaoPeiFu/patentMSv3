<template>
  <div class="risk-alert">
    <!-- 页面标题 -->
    <div class="page-header">
      <div class="header-content">
        <div class="breadcrumb">
          <span class="breadcrumb-item" @click="$router.push('/dashboard/ai')"
            >AI辅助功能</span
          >
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-item active">风险预警系统</span>
        </div>
        <h1 class="page-title">⚠️ 风险预警系统</h1>
        <p class="page-subtitle">实时监控专利风险，提供预警和建议</p>
      </div>
      <div class="header-actions">
        <AppleButton variant="primary" @click="showAlertDialog = true">
          <el-icon><Warning /></el-icon>
          生成预警
        </AppleButton>
      </div>
    </div>

    <!-- 统计信息 -->
    <div class="statistics-section">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">
            <el-icon><Warning /></el-icon>
          </div>
          <div class="stat-content">
            <div class="stat-number">{{ activeRiskAlerts.length }}</div>
            <div class="stat-label">活跃预警</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon critical">
            <el-icon><CircleClose /></el-icon>
          </div>
          <div class="stat-content">
            <div class="stat-number">{{ criticalRiskAlerts.length }}</div>
            <div class="stat-label">高风险预警</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon high">
            <el-icon><InfoFilled /></el-icon>
          </div>
          <div class="stat-content">
            <div class="stat-number">{{ highRiskAlerts.length }}</div>
            <div class="stat-label">中风险预警</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon low">
            <el-icon><CircleCheck /></el-icon>
          </div>
          <div class="stat-content">
            <div class="stat-number">{{ resolvedCount }}</div>
            <div class="stat-label">已解决预警</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 风险预警列表 -->
    <div class="alerts-section">
      <AppleCard elevated>
        <template #header>
          <div class="card-header">
            <h3 class="section-title">风险预警列表</h3>
            <div class="header-actions">
              <el-input
                v-model="searchQuery"
                placeholder="搜索预警..."
                style="width: 200px"
                clearable
              >
                <template #prefix>
                  <el-icon><Search /></el-icon>
                </template>
              </el-input>
              <el-select
                v-model="filterSeverity"
                placeholder="风险等级"
                style="width: 150px"
                clearable
              >
                <el-option label="严重风险" value="critical" />
                <el-option label="高风险" value="high" />
                <el-option label="中等风险" value="medium" />
                <el-option label="低风险" value="low" />
              </el-select>
              <el-select
                v-model="filterType"
                placeholder="预警类型"
                style="width: 150px"
                clearable
              >
                <el-option label="过期预警" value="expiration" />
                <el-option label="侵权风险" value="infringement" />
                <el-option label="竞争对手" value="competitor" />
                <el-option label="市场风险" value="market" />
                <el-option label="法律风险" value="legal" />
              </el-select>
            </div>
          </div>
        </template>

        <div class="alerts-list">
          <div
            v-for="alert in filteredAlerts"
            :key="alert.id"
            class="alert-item"
            :class="[alert.severity, alert.isActive ? 'active' : 'resolved']"
          >
            <div class="alert-header">
              <div class="severity-indicator">
                <div class="severity-badge" :class="alert.severity">
                  {{ getSeverityLabel(alert.severity) }}
                </div>
                <div class="risk-score">
                  {{ Math.round(alert.riskScore * 100) }}%
                </div>
              </div>
              <div class="alert-info">
                <div class="alert-title">
                  <h4>{{ alert.title }}</h4>
                  <span class="alert-type">{{
                    getAlertTypeLabel(alert.alertType)
                  }}</span>
                </div>
                <div class="alert-description">
                  <p>{{ alert.description }}</p>
                </div>
                <div class="alert-recommendations">
                  <strong>建议措施:</strong>
                  <ul>
                    <li
                      v-for="recommendation in alert.recommendations"
                      :key="recommendation"
                    >
                      {{ recommendation }}
                    </li>
                  </ul>
                </div>
                <div class="alert-time">
                  <span>创建时间: {{ formatTime(alert.createdAt) }}</span>
                  <span v-if="alert.resolvedAt"
                    >解决时间: {{ formatTime(alert.resolvedAt) }}</span
                  >
                </div>
              </div>
            </div>
            <div class="alert-actions">
              <AppleButton size="small" variant="secondary">
                <el-icon><View /></el-icon>
                查看详情
              </AppleButton>
              <AppleButton
                v-if="alert.isActive"
                size="small"
                variant="primary"
                @click="resolveAlert(alert.id)"
              >
                <el-icon><Check /></el-icon>
                标记解决
              </AppleButton>
              <AppleButton size="small" variant="warning">
                <el-icon><Document /></el-icon>
                生成报告
              </AppleButton>
            </div>
          </div>

          <div v-if="filteredAlerts.length === 0" class="empty-state">
            <el-icon><Warning /></el-icon>
            <p>暂无风险预警</p>
            <AppleButton variant="primary" @click="showAlertDialog = true">
              生成预警
            </AppleButton>
          </div>
        </div>
      </AppleCard>
    </div>

    <!-- 预警生成对话框 -->
    <el-dialog
      v-model="showAlertDialog"
      title="生成风险预警"
      width="600px"
      class="apple-dialog"
    >
      <div class="alert-form">
        <el-form :model="alertForm" label-width="120px">
          <el-form-item label="选择专利">
            <el-select
              v-model="alertForm.patentId"
              placeholder="请选择要分析的专利"
              style="width: 100%"
            >
              <el-option
                v-for="patent in availablePatents"
                :key="patent.id"
                :label="patent.title"
                :value="patent.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="预警类型">
            <el-checkbox-group v-model="alertForm.alertTypes">
              <el-checkbox label="expiration">过期预警</el-checkbox>
              <el-checkbox label="infringement">侵权风险</el-checkbox>
              <el-checkbox label="competitor">竞争对手</el-checkbox>
              <el-checkbox label="market">市场风险</el-checkbox>
              <el-checkbox label="legal">法律风险</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="风险阈值">
            <el-slider
              v-model="alertForm.riskThreshold"
              :min="0"
              :max="1"
              :step="0.1"
              show-input
            />
          </el-form-item>
        </el-form>
      </div>

      <template #footer>
        <div class="dialog-footer">
          <AppleButton @click="showAlertDialog = false">取消</AppleButton>
          <AppleButton
            variant="primary"
            :loading="generating"
            @click="generateAlerts"
          >
            {{ generating ? "生成中..." : "开始生成" }}
          </AppleButton>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useAIStore } from "@/stores/ai";
import { usePatentStore } from "@/stores/patent";
import { ElMessage } from "element-plus";
import AppleButton from "@/components/ui/AppleButton.vue";
import AppleCard from "@/components/ui/AppleCard.vue";
import {
  Warning,
  CircleClose,
  InfoFilled,
  CircleCheck,
  Search,
  View,
  Check,
  Document,
} from "@element-plus/icons-vue";

const aiStore = useAIStore();
const patentStore = usePatentStore();

// 对话框状态
const showAlertDialog = ref(false);
const generating = ref(false);

// 搜索和过滤
const searchQuery = ref("");
const filterSeverity = ref("");
const filterType = ref("");

// 预警表单
const alertForm = ref({
  patentId: null as number | null,
  alertTypes: ["expiration", "infringement", "competitor"],
  riskThreshold: 0.6,
});

// 计算属性
const activeRiskAlerts = computed(() => aiStore.activeRiskAlerts);
const criticalRiskAlerts = computed(() => aiStore.criticalRiskAlerts);
const highRiskAlerts = computed(() => aiStore.highRiskAlerts);
const availablePatents = computed(() => patentStore.patents);

const resolvedCount = computed(
  () => aiStore.riskAlerts.filter((alert) => !alert.isActive).length
);

const filteredAlerts = computed(() => {
  let alerts = aiStore.riskAlerts;

  // 按搜索查询过滤
  if (searchQuery.value) {
    alerts = alerts.filter(
      (alert) =>
        alert.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        alert.description
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase())
    );
  }

  // 按风险等级过滤
  if (filterSeverity.value) {
    alerts = alerts.filter((alert) => alert.severity === filterSeverity.value);
  }

  // 按预警类型过滤
  if (filterType.value) {
    alerts = alerts.filter((alert) => alert.alertType === filterType.value);
  }

  return alerts;
});

// 获取风险等级标签
const getSeverityLabel = (severity: string) => {
  const severityMap: Record<string, string> = {
    critical: "严重风险",
    high: "高风险",
    medium: "中等风险",
    low: "低风险",
  };
  return severityMap[severity] || severity;
};

// 获取预警类型标签
const getAlertTypeLabel = (type: string) => {
  const typeMap: Record<string, string> = {
    expiration: "过期预警",
    infringement: "侵权风险",
    competitor: "竞争对手",
    market: "市场风险",
    legal: "法律风险",
  };
  return typeMap[type] || type;
};

// 格式化时间
const formatTime = (time: string) => {
  return new Date(time).toLocaleString("zh-CN");
};

// 生成预警
const generateAlerts = async () => {
  if (!alertForm.value.patentId) {
    ElMessage.warning("请选择要分析的专利");
    return;
  }

  generating.value = true;
  try {
    const patent = patentStore.patents.find(
      (p) => p.id === alertForm.value.patentId
    );
    if (!patent) {
      throw new Error("专利不存在");
    }

    const results = await aiStore.generateRiskAlerts(
      alertForm.value.patentId,
      patent
    );
    ElMessage.success(`风险预警生成完成！发现 ${results.length} 个预警`);
    showAlertDialog.value = false;
  } catch (error) {
    ElMessage.error("生成失败: " + (error as Error).message);
  } finally {
    generating.value = false;
  }
};

// 解决预警
const resolveAlert = (alertId: number) => {
  aiStore.resolveRiskAlert(alertId);
  ElMessage.success("预警已标记为解决");
};
</script>

<style scoped>
.risk-alert {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

/* 页面标题 */
.page-header {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.7) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 32px;
  margin-bottom: 32px;
  color: var(--apple-text-primary);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: var(--apple-shadow-soft);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-content {
  flex: 1;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 14px;
}

.breadcrumb-item {
  color: var(--apple-text-secondary);
  cursor: pointer;
  transition: color 0.3s ease;
}

.breadcrumb-item:hover {
  color: var(--apple-accent);
}

.breadcrumb-item.active {
  color: var(--apple-text-primary);
  font-weight: 600;
  cursor: default;
}

.breadcrumb-separator {
  color: var(--apple-text-secondary);
}

.page-title {
  font-size: 2.5em;
  font-weight: 700;
  margin: 0 0 8px 0;
  background: linear-gradient(135deg, var(--apple-accent), #5856d6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
}

.page-subtitle {
  font-size: 1.1em;
  color: var(--apple-text-secondary);
  margin: 0;
}

.header-actions {
  flex-shrink: 0;
}

/* 统计信息 */
.statistics-section {
  margin-bottom: 32px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  box-shadow: var(--apple-shadow-soft);
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--apple-shadow-medium);
}

.stat-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  flex-shrink: 0;
}

.stat-icon.critical {
  background: linear-gradient(135deg, #ff2d55, #ff3b30);
}

.stat-icon.high {
  background: linear-gradient(135deg, #ff9500, #ffcc00);
}

.stat-icon.low {
  background: linear-gradient(135deg, #34c759, #30d158);
}

.stat-content {
  flex: 1;
}

.stat-number {
  font-size: 1.8em;
  font-weight: 700;
  color: var(--apple-text-primary);
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.9em;
  color: var(--apple-text-secondary);
}

/* 预警列表 */
.alerts-section {
  margin-bottom: 32px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-title {
  font-size: 1.5em;
  font-weight: 600;
  color: var(--apple-text-primary);
  margin: 0;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.alerts-list {
  padding: 20px 0;
}

.alert-item {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.alert-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--apple-shadow-medium);
  background: rgba(255, 255, 255, 0.9);
}

.alert-item.critical {
  border-left: 4px solid #ff2d55;
}

.alert-item.high {
  border-left: 4px solid #ff9500;
}

.alert-item.medium {
  border-left: 4px solid #ffcc00;
}

.alert-item.low {
  border-left: 4px solid #34c759;
}

.alert-item.resolved {
  opacity: 0.6;
  background: rgba(255, 255, 255, 0.6);
}

.alert-header {
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
}

.severity-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.severity-badge {
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 600;
  color: white;
  text-align: center;
}

.severity-badge.critical {
  background: linear-gradient(135deg, #ff2d55, #ff3b30);
}

.severity-badge.high {
  background: linear-gradient(135deg, #ff9500, #ffcc00);
}

.severity-badge.medium {
  background: linear-gradient(135deg, #ffcc00, #ff9500);
}

.severity-badge.low {
  background: linear-gradient(135deg, #34c759, #30d158);
}

.risk-score {
  font-size: 1.2em;
  font-weight: 700;
  color: var(--apple-text-primary);
}

.alert-info {
  flex: 1;
}

.alert-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.alert-title h4 {
  font-size: 1.2em;
  font-weight: 600;
  color: var(--apple-text-primary);
  margin: 0;
}

.alert-type {
  font-size: 0.8em;
  color: var(--apple-accent);
  background: rgba(0, 122, 255, 0.1);
  padding: 4px 8px;
  border-radius: 6px;
}

.alert-description {
  font-size: 0.9em;
  color: var(--apple-text-secondary);
  margin-bottom: 12px;
  line-height: 1.5;
}

.alert-recommendations {
  font-size: 0.9em;
  color: var(--apple-text-secondary);
  margin-bottom: 8px;
}

.alert-recommendations strong {
  color: var(--apple-text-primary);
  display: block;
  margin-bottom: 8px;
}

.alert-recommendations ul {
  margin: 0;
  padding-left: 20px;
}

.alert-recommendations li {
  margin-bottom: 4px;
}

.alert-time {
  display: flex;
  gap: 16px;
  font-size: 0.8em;
  color: var(--apple-text-secondary);
}

.alert-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--apple-text-secondary);
}

.empty-state .el-icon {
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.5;
}

.empty-state p {
  margin: 0 0 20px 0;
  font-size: 1.1em;
}

/* 对话框 */
.alert-form {
  padding: 20px 0;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .risk-alert {
    padding: 16px;
  }

  .page-header {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .card-header {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .header-actions {
    width: 100%;
  }

  .alert-header {
    flex-direction: column;
    gap: 16px;
  }

  .alert-actions {
    justify-content: center;
  }

  .alert-time {
    flex-direction: column;
    gap: 4px;
  }
}
</style>
