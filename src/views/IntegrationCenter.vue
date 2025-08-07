<template>
  <div class="integration-center">
    <AppleLayout>
      <template #header>
        <div class="page-header">
          <div class="header-content">
            <h1 class="page-title">🔗 外部系统集成</h1>
            <p class="page-subtitle">
              专利局API对接、邮件系统集成、第三方数据库与企业ERP集成管理
            </p>
          </div>
          <div class="header-actions">
            <AppleButton @click="showAddIntegrationDialog = true">
              <el-icon><Plus /></el-icon>
              添加集成
            </AppleButton>
            <AppleButton @click="refreshAllIntegrations" :loading="refreshing">
              <el-icon><Refresh /></el-icon>
              刷新状态
            </AppleButton>
          </div>
        </div>
      </template>

      <!-- 概览统计 -->
      <div class="overview-section">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">
              <el-icon><Connection /></el-icon>
            </div>
            <div class="stat-content">
              <div class="stat-value">
                {{ integrationStats.totalIntegrations }}
              </div>
              <div class="stat-label">总集成数</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon active">
              <el-icon><Check /></el-icon>
            </div>
            <div class="stat-content">
              <div class="stat-value">
                {{ integrationStats.activeIntegrations }}
              </div>
              <div class="stat-label">活跃集成</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon error">
              <el-icon><Warning /></el-icon>
            </div>
            <div class="stat-content">
              <div class="stat-value">
                {{ integrationStats.failedIntegrations }}
              </div>
              <div class="stat-label">失败集成</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">
              <el-icon><TrendCharts /></el-icon>
            </div>
            <div class="stat-content">
              <div class="stat-value">
                {{ integrationStats.syncSuccessRate.toFixed(1) }}%
              </div>
              <div class="stat-label">同步成功率</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 集成类型标签页 -->
      <div class="integration-tabs">
        <el-tabs v-model="activeTab" type="card">
          <el-tab-pane label="专利局API" name="patent-office">
            <PatentOfficeIntegration />
          </el-tab-pane>
          <el-tab-pane label="邮件系统" name="email">
            <EmailSystemIntegration />
          </el-tab-pane>
          <el-tab-pane label="第三方数据库" name="database">
            <DatabaseIntegration />
          </el-tab-pane>
          <el-tab-pane label="企业ERP" name="erp">
            <ERPIntegration />
          </el-tab-pane>
          <el-tab-pane label="同步任务" name="sync-tasks">
            <SyncTasksManagement />
          </el-tab-pane>
          <el-tab-pane label="数据映射" name="data-mapping">
            <DataMappingManagement />
          </el-tab-pane>
          <el-tab-pane label="集成日志" name="logs">
            <IntegrationLogs />
          </el-tab-pane>
        </el-tabs>
      </div>

      <!-- 添加集成对话框 -->
      <el-dialog
        v-model="showAddIntegrationDialog"
        title="添加外部系统集成"
        width="600px"
      >
        <div class="integration-type-selector">
          <h3>选择集成类型</h3>
          <div class="integration-types">
            <div
              v-for="type in integrationTypes"
              :key="type.value"
              class="integration-type-card"
              :class="{ selected: selectedIntegrationType === type.value }"
              @click="selectedIntegrationType = type.value"
            >
              <div class="type-icon">
                <el-icon><component :is="type.icon" /></el-icon>
              </div>
              <div class="type-content">
                <h4>{{ type.label }}</h4>
                <p>{{ type.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <template #footer>
          <div class="dialog-footer">
            <AppleButton @click="showAddIntegrationDialog = false"
              >取消</AppleButton
            >
            <AppleButton
              type="primary"
              @click="handleAddIntegration"
              :disabled="!selectedIntegrationType"
            >
              下一步
            </AppleButton>
          </div>
        </template>
      </el-dialog>
    </AppleLayout>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { useIntegrationStore } from "@/stores/integration";
import AppleLayout from "@/components/AppleLayout.vue";
import AppleButton from "@/components/ui/AppleButton.vue";
import PatentOfficeIntegration from "@/components/integration/PatentOfficeIntegration.vue";
import EmailSystemIntegration from "@/components/integration/EmailSystemIntegration.vue";
import DatabaseIntegration from "@/components/integration/DatabaseIntegration.vue";
import ERPIntegration from "@/components/integration/ERPIntegration.vue";
import SyncTasksManagement from "@/components/integration/SyncTasksManagement.vue";
import DataMappingManagement from "@/components/integration/DataMappingManagement.vue";
import IntegrationLogs from "@/components/integration/IntegrationLogs.vue";
import {
  Plus,
  Refresh,
  Connection,
  Check,
  Warning,
  TrendCharts,
  Document,
  Message,
  DataBoard,
  Setting,
  List,
  Document as DocumentIcon,
} from "@element-plus/icons-vue";

const router = useRouter();
const integrationStore = useIntegrationStore();

// 响应式数据
const activeTab = ref("patent-office");
const showAddIntegrationDialog = ref(false);
const selectedIntegrationType = ref("");
const refreshing = ref(false);

// 计算属性
const integrationStats = computed(() => integrationStore.integrationStats);

// 集成类型配置
const integrationTypes = [
  {
    value: "patent-office",
    label: "专利局API",
    description: "连接各国专利局API，获取专利数据",
    icon: Document,
  },
  {
    value: "email",
    label: "邮件系统",
    description: "集成邮件系统，发送通知和报告",
    icon: Message,
  },
  {
    value: "database",
    label: "第三方数据库",
    description: "连接外部数据库，获取补充数据",
    icon: DataBoard,
  },
  {
    value: "erp",
    label: "企业ERP",
    description: "集成企业ERP系统，同步业务数据",
    icon: Setting,
  },
];

// 方法
const refreshAllIntegrations = async () => {
  refreshing.value = true;
  try {
    // 模拟刷新过程
    await new Promise((resolve) => setTimeout(resolve, 2000));
    ElMessage.success("所有集成状态已刷新");
  } catch (error) {
    ElMessage.error("刷新失败");
  } finally {
    refreshing.value = false;
  }
};

const handleAddIntegration = () => {
  if (!selectedIntegrationType.value) return;

  showAddIntegrationDialog.value = false;

  // 根据选择的类型跳转到相应的配置页面
  switch (selectedIntegrationType.value) {
    case "patent-office":
      activeTab.value = "patent-office";
      break;
    case "email":
      activeTab.value = "email";
      break;
    case "database":
      activeTab.value = "database";
      break;
    case "erp":
      activeTab.value = "erp";
      break;
  }

  selectedIntegrationType.value = "";
};

onMounted(() => {
  // 初始化数据
  integrationStore.loadFromStorage();
});
</script>

<style scoped>
.integration-center {
  min-height: 100vh;
  background: var(--apple-background);
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
}

.header-content {
  flex: 1;
}

.page-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--apple-text-primary);
  margin: 0 0 8px 0;
}

.page-subtitle {
  font-size: 16px;
  color: var(--apple-text-secondary);
  margin: 0;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.overview-section {
  margin-bottom: 32px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--apple-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
}

.stat-icon.active {
  background: #67c23a;
}

.stat-icon.error {
  background: #f56c6c;
}

.stat-content {
  flex: 1;
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  color: var(--apple-text-primary);
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: var(--apple-text-secondary);
}

.integration-tabs {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.integration-type-selector {
  padding: 20px 0;
}

.integration-type-selector h3 {
  margin: 0 0 20px 0;
  color: var(--apple-text-primary);
  font-size: 18px;
  font-weight: 600;
}

.integration-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.integration-type-card {
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 16px;
}

.integration-type-card:hover {
  border-color: var(--apple-accent);
  background: #f8f9fa;
}

.integration-type-card.selected {
  border-color: var(--apple-accent);
  background: var(--apple-accent-light);
}

.type-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--apple-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
}

.type-content {
  flex: 1;
}

.type-content h4 {
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--apple-text-primary);
}

.type-content p {
  margin: 0;
  font-size: 14px;
  color: var(--apple-text-secondary);
  line-height: 1.4;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .header-actions {
    width: 100%;
    justify-content: flex-end;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .integration-types {
    grid-template-columns: 1fr;
  }
}
</style>
