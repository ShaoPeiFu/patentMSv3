<template>
  <div class="smart-summary">
    <!-- 页面标题 -->
    <div class="page-header">
      <div class="header-content">
        <div class="breadcrumb">
          <span class="breadcrumb-item" @click="$router.push('/dashboard/ai')"
            >AI辅助功能</span
          >
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-item active">智能摘要生成</span>
        </div>
        <h1 class="page-title">📄 智能摘要生成</h1>
        <p class="page-subtitle">自动生成技术、商业、法律等多维度摘要</p>
      </div>
      <div class="header-actions">
        <AppleButton variant="primary" @click="showSummaryDialog = true">
          <el-icon><Document /></el-icon>
          生成摘要
        </AppleButton>
      </div>
    </div>

    <!-- 统计信息 -->
    <div class="statistics-section">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">
            <el-icon><Document /></el-icon>
          </div>
          <div class="stat-content">
            <div class="stat-number">{{ smartSummaries.length }}</div>
            <div class="stat-label">总摘要数</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon technical">
            <el-icon><Tools /></el-icon>
          </div>
          <div class="stat-content">
            <div class="stat-number">{{ technicalCount }}</div>
            <div class="stat-label">技术摘要</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon business">
            <el-icon><TrendCharts /></el-icon>
          </div>
          <div class="stat-content">
            <div class="stat-number">{{ businessCount }}</div>
            <div class="stat-label">商业摘要</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon legal">
            <el-icon><Document /></el-icon>
          </div>
          <div class="stat-content">
            <div class="stat-number">{{ legalCount }}</div>
            <div class="stat-label">法律摘要</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 摘要列表 -->
    <div class="summaries-section">
      <AppleCard elevated>
        <template #header>
          <div class="card-header">
            <h3 class="section-title">智能摘要结果</h3>
            <div class="header-actions">
              <el-input
                v-model="searchQuery"
                placeholder="搜索摘要..."
                style="width: 200px"
                clearable
              >
                <template #prefix>
                  <el-icon><Search /></el-icon>
                </template>
              </el-input>
              <el-select
                v-model="filterType"
                placeholder="摘要类型"
                style="width: 150px"
                clearable
              >
                <el-option label="技术摘要" value="technical" />
                <el-option label="商业摘要" value="business" />
                <el-option label="法律摘要" value="legal" />
                <el-option label="综合摘要" value="comprehensive" />
              </el-select>
            </div>
          </div>
        </template>

        <div class="summaries-list">
          <div
            v-for="summary in filteredSummaries"
            :key="summary.id"
            class="summary-item"
            :class="summary.summaryType"
          >
            <div class="summary-header">
              <div class="summary-type">
                <div class="type-badge" :class="summary.summaryType">
                  {{ getSummaryTypeLabel(summary.summaryType) }}
                </div>
              </div>
              <div class="summary-info">
                <div class="patent-info">
                  <h4>专利 {{ summary.patentId }}</h4>
                  <p class="summary-time">
                    生成时间: {{ formatTime(summary.createdAt) }}
                  </p>
                </div>
                <div class="summary-content">
                  <p>{{ summary.content }}</p>
                </div>
                <div class="summary-details">
                  <div class="key-points">
                    <strong>关键点:</strong>
                    <ul>
                      <li v-for="point in summary.keyPoints" :key="point">
                        {{ point }}
                      </li>
                    </ul>
                  </div>
                  <div
                    class="technical-highlights"
                    v-if="summary.technicalHighlights.length > 0"
                  >
                    <strong>技术亮点:</strong>
                    <ul>
                      <li
                        v-for="highlight in summary.technicalHighlights"
                        :key="highlight"
                      >
                        {{ highlight }}
                      </li>
                    </ul>
                  </div>
                  <div class="business-value" v-if="summary.businessValue">
                    <strong>商业价值:</strong>
                    <p>{{ summary.businessValue }}</p>
                  </div>
                  <div
                    class="risk-factors"
                    v-if="summary.riskFactors.length > 0"
                  >
                    <strong>风险因素:</strong>
                    <ul>
                      <li v-for="risk in summary.riskFactors" :key="risk">
                        {{ risk }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="summary-actions">
              <AppleButton size="small" variant="secondary">
                <el-icon><View /></el-icon>
                查看详情
              </AppleButton>
              <AppleButton size="small" variant="primary">
                <el-icon><Download /></el-icon>
                导出摘要
              </AppleButton>
            </div>
          </div>

          <div v-if="filteredSummaries.length === 0" class="empty-state">
            <el-icon><Document /></el-icon>
            <p>暂无智能摘要</p>
            <AppleButton variant="primary" @click="showSummaryDialog = true">
              生成摘要
            </AppleButton>
          </div>
        </div>
      </AppleCard>
    </div>

    <!-- 摘要生成对话框 -->
    <el-dialog
      v-model="showSummaryDialog"
      title="生成智能摘要"
      width="600px"
      class="apple-dialog"
    >
      <div class="summary-form">
        <el-form :model="summaryForm" label-width="120px">
          <el-form-item label="选择专利">
            <el-select
              v-model="summaryForm.patentId"
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
          <el-form-item label="摘要类型">
            <el-radio-group v-model="summaryForm.summaryType">
              <el-radio label="technical">技术摘要</el-radio>
              <el-radio label="business">商业摘要</el-radio>
              <el-radio label="legal">法律摘要</el-radio>
              <el-radio label="comprehensive">综合摘要</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="生成选项">
            <el-checkbox-group v-model="summaryForm.options">
              <el-checkbox label="keyPoints">关键点提取</el-checkbox>
              <el-checkbox label="technicalHighlights">技术亮点</el-checkbox>
              <el-checkbox label="businessValue">商业价值分析</el-checkbox>
              <el-checkbox label="riskFactors">风险因素分析</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
      </div>

      <template #footer>
        <div class="dialog-footer">
          <AppleButton @click="showSummaryDialog = false">取消</AppleButton>
          <AppleButton
            variant="primary"
            :loading="generating"
            @click="generateSummary"
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
  Document,
  Tools,
  TrendCharts,
  Search,
  View,
  Download,
} from "@element-plus/icons-vue";

const aiStore = useAIStore();
const patentStore = usePatentStore();

// 对话框状态
const showSummaryDialog = ref(false);
const generating = ref(false);

// 搜索和过滤
const searchQuery = ref("");
const filterType = ref("");

// 摘要表单
const summaryForm = ref({
  patentId: null as number | null,
  summaryType: "comprehensive" as
    | "technical"
    | "business"
    | "legal"
    | "comprehensive",
  options: ["keyPoints", "technicalHighlights", "businessValue", "riskFactors"],
});

// 计算属性
const smartSummaries = computed(() => aiStore.smartSummaries);
const availablePatents = computed(() => patentStore.patents);

const technicalCount = computed(
  () => smartSummaries.value.filter((s) => s.summaryType === "technical").length
);

const businessCount = computed(
  () => smartSummaries.value.filter((s) => s.summaryType === "business").length
);

const legalCount = computed(
  () => smartSummaries.value.filter((s) => s.summaryType === "legal").length
);

const filteredSummaries = computed(() => {
  let summaries = smartSummaries.value;

  // 按搜索查询过滤
  if (searchQuery.value) {
    summaries = summaries.filter(
      (summary) =>
        summary.content
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase()) ||
        summary.keyPoints.some((point) =>
          point.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    );
  }

  // 按摘要类型过滤
  if (filterType.value) {
    summaries = summaries.filter(
      (summary) => summary.summaryType === filterType.value
    );
  }

  return summaries;
});

// 获取摘要类型标签
const getSummaryTypeLabel = (type: string) => {
  const typeMap: Record<string, string> = {
    technical: "技术摘要",
    business: "商业摘要",
    legal: "法律摘要",
    comprehensive: "综合摘要",
  };
  return typeMap[type] || type;
};

// 格式化时间
const formatTime = (time: string) => {
  return new Date(time).toLocaleString("zh-CN");
};

// 生成摘要
const generateSummary = async () => {
  if (!summaryForm.value.patentId) {
    ElMessage.warning("请选择要分析的专利");
    return;
  }

  generating.value = true;
  try {
    const patent = patentStore.patents.find(
      (p) => p.id === summaryForm.value.patentId
    );
    if (!patent) {
      throw new Error("专利不存在");
    }

    const result = await aiStore.generateSmartSummary(
      summaryForm.value.patentId,
      patent,
      summaryForm.value.summaryType
    );
    ElMessage.success("智能摘要生成完成！");
    showSummaryDialog.value = false;
  } catch (error) {
    ElMessage.error("生成失败: " + (error as Error).message);
  } finally {
    generating.value = false;
  }
};
</script>

<style scoped>
.smart-summary {
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

.stat-icon.technical {
  background: linear-gradient(135deg, #007aff, #5856d6);
}

.stat-icon.business {
  background: linear-gradient(135deg, #34c759, #30d158);
}

.stat-icon.legal {
  background: linear-gradient(135deg, #ff9500, #ffcc00);
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

/* 摘要列表 */
.summaries-section {
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

.summaries-list {
  padding: 20px 0;
}

.summary-item {
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

.summary-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--apple-shadow-medium);
  background: rgba(255, 255, 255, 0.9);
}

.summary-item.technical {
  border-left: 4px solid #007aff;
}

.summary-item.business {
  border-left: 4px solid #34c759;
}

.summary-item.legal {
  border-left: 4px solid #ff9500;
}

.summary-item.comprehensive {
  border-left: 4px solid #5856d6;
}

.summary-header {
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
}

.summary-type {
  flex-shrink: 0;
}

.type-badge {
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 600;
  color: white;
  text-align: center;
}

.type-badge.technical {
  background: linear-gradient(135deg, #007aff, #5856d6);
}

.type-badge.business {
  background: linear-gradient(135deg, #34c759, #30d158);
}

.type-badge.legal {
  background: linear-gradient(135deg, #ff9500, #ffcc00);
}

.type-badge.comprehensive {
  background: linear-gradient(135deg, #5856d6, #007aff);
}

.summary-info {
  flex: 1;
}

.patent-info h4 {
  font-size: 1.2em;
  font-weight: 600;
  color: var(--apple-text-primary);
  margin: 0 0 4px 0;
}

.summary-time {
  font-size: 0.8em;
  color: var(--apple-text-secondary);
  margin: 0 0 12px 0;
}

.summary-content {
  font-size: 0.95em;
  color: var(--apple-text-primary);
  margin-bottom: 16px;
  line-height: 1.6;
}

.summary-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.key-points,
.technical-highlights,
.business-value,
.risk-factors {
  font-size: 0.9em;
  color: var(--apple-text-secondary);
}

.key-points strong,
.technical-highlights strong,
.business-value strong,
.risk-factors strong {
  color: var(--apple-text-primary);
  display: block;
  margin-bottom: 8px;
}

.key-points ul,
.technical-highlights ul,
.risk-factors ul {
  margin: 0;
  padding-left: 20px;
}

.key-points li,
.technical-highlights li,
.risk-factors li {
  margin-bottom: 4px;
}

.business-value p {
  margin: 0;
  line-height: 1.5;
}

.summary-actions {
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
.summary-form {
  padding: 20px 0;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .smart-summary {
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

  .summary-header {
    flex-direction: column;
    gap: 16px;
  }

  .summary-actions {
    justify-content: center;
  }

  .summary-details {
    grid-template-columns: 1fr;
  }
}
</style>
