<template>
  <div class="apple-integration-management">
    <div class="page-header">
      <h1>外部系统集成</h1>
      <p>管理专利局API、邮件系统、第三方数据库和企业ERP集成</p>
    </div>

    <div class="integration-grid">
      <!-- 专利局API -->
      <div class="integration-card">
        <div class="card-header">
          <h3>专利局API</h3>
          <el-button type="primary" @click="showPatentOfficeDialog = true">
            添加配置
          </el-button>
        </div>
        <div class="config-list">
          <div
            v-for="config in integrationStore.patentOfficeConfigs"
            :key="config.id"
            class="config-item"
          >
            <div class="config-info">
              <h4>{{ config.name }}</h4>
              <p>{{ config.office }} - {{ config.baseUrl }}</p>
            </div>
            <div class="config-actions">
              <el-button
                size="small"
                @click="testConnection('patent_office', config.id)"
              >
                测试
              </el-button>
              <el-button
                size="small"
                type="danger"
                @click="deleteConfig('patent_office', config.id)"
              >
                删除
              </el-button>
            </div>
          </div>
        </div>
      </div>

      <!-- 邮件系统 -->
      <div class="integration-card">
        <div class="card-header">
          <h3>邮件系统</h3>
          <el-button type="primary" @click="showEmailDialog = true">
            添加配置
          </el-button>
        </div>
        <div class="config-list">
          <div
            v-for="config in integrationStore.emailConfigs"
            :key="config.id"
            class="config-item"
          >
            <div class="config-info">
              <h4>{{ config.name }}</h4>
              <p>{{ config.provider }} - {{ config.host }}:{{ config.port }}</p>
            </div>
            <div class="config-actions">
              <el-button
                size="small"
                @click="testConnection('email', config.id)"
              >
                测试
              </el-button>
              <el-button
                size="small"
                type="danger"
                @click="deleteConfig('email', config.id)"
              >
                删除
              </el-button>
            </div>
          </div>
        </div>
      </div>

      <!-- 第三方数据库 -->
      <div class="integration-card">
        <div class="card-header">
          <h3>第三方数据库</h3>
          <el-button type="primary" @click="showDatabaseDialog = true">
            添加配置
          </el-button>
        </div>
        <div class="config-list">
          <div
            v-for="config in integrationStore.databaseConfigs"
            :key="config.id"
            class="config-item"
          >
            <div class="config-info">
              <h4>{{ config.name }}</h4>
              <p>{{ config.type }} - {{ config.host }}:{{ config.port }}</p>
            </div>
            <div class="config-actions">
              <el-button
                size="small"
                @click="testConnection('database', config.id)"
              >
                测试
              </el-button>
              <el-button size="small" @click="syncDatabase(config.id)">
                同步
              </el-button>
              <el-button
                size="small"
                type="danger"
                @click="deleteConfig('database', config.id)"
              >
                删除
              </el-button>
            </div>
          </div>
        </div>
      </div>

      <!-- 企业ERP -->
      <div class="integration-card">
        <div class="card-header">
          <h3>企业ERP</h3>
          <el-button type="primary" @click="showErpDialog = true">
            添加配置
          </el-button>
        </div>
        <div class="config-list">
          <div
            v-for="config in integrationStore.erpConfigs"
            :key="config.id"
            class="config-item"
          >
            <div class="config-info">
              <h4>{{ config.name }}</h4>
              <p>{{ config.system }} - {{ config.baseUrl }}</p>
            </div>
            <div class="config-actions">
              <el-button size="small" @click="testConnection('erp', config.id)">
                测试
              </el-button>
              <el-button
                size="small"
                type="danger"
                @click="deleteConfig('erp', config.id)"
              >
                删除
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 统计信息 -->
    <div class="statistics-section">
      <h3>集成统计</h3>
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-value">
            {{ integrationStore.integrationStatistics.totalConfigs }}
          </div>
          <div class="stat-label">总配置数</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">
            {{ integrationStore.integrationStatistics.activeConfigs }}
          </div>
          <div class="stat-label">活跃配置</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">
            {{ integrationStore.integrationStatistics.failedConfigs }}
          </div>
          <div class="stat-label">失败配置</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">
            {{
              integrationStore.integrationStatistics.averageResponseTime.toFixed(
                0
              )
            }}ms
          </div>
          <div class="stat-label">平均响应时间</div>
        </div>
      </div>
    </div>

    <!-- 同步任务 -->
    <div class="sync-tasks-section">
      <h3>同步任务</h3>
      <div class="tasks-list">
        <div
          v-for="task in integrationStore.syncTasks"
          :key="task.id"
          class="task-item"
        >
          <div class="task-info">
            <h4>{{ getTaskTypeText(task.type) }}</h4>
            <p>
              状态: {{ getTaskStatusText(task.status) }} - 进度:
              {{ task.progress }}%
            </p>
          </div>
          <div class="task-progress">
            <el-progress
              :percentage="task.progress"
              :status="getProgressStatus(task.status)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 集成日志 -->
    <div class="logs-section">
      <h3>集成日志</h3>
      <div class="logs-list">
        <div
          v-for="log in integrationStore.integrationLogs.slice(0, 10)"
          :key="log.id"
          class="log-item"
          :class="log.level"
        >
          <div class="log-header">
            <span class="log-time">{{ formatDateTime(log.timestamp) }}</span>
            <span class="log-type">{{ getLogTypeText(log.type) }}</span>
            <span class="log-level">{{ log.level.toUpperCase() }}</span>
          </div>
          <div class="log-message">{{ log.message }}</div>
        </div>
      </div>
    </div>

    <!-- 对话框 -->
    <el-dialog
      v-model="showPatentOfficeDialog"
      title="添加专利局API配置"
      width="500px"
    >
      <el-form :model="newPatentOfficeConfig" label-width="120px">
        <el-form-item label="名称">
          <el-input v-model="newPatentOfficeConfig.name" />
        </el-form-item>
        <el-form-item label="专利局">
          <el-select v-model="newPatentOfficeConfig.office">
            <el-option label="中国专利局" value="CNIPA" />
            <el-option label="美国专利局" value="USPTO" />
            <el-option label="欧洲专利局" value="EPO" />
          </el-select>
        </el-form-item>
        <el-form-item label="基础URL">
          <el-input v-model="newPatentOfficeConfig.baseUrl" />
        </el-form-item>
        <el-form-item label="API密钥">
          <el-input v-model="newPatentOfficeConfig.apiKey" />
        </el-form-item>
        <el-form-item label="密钥">
          <el-input v-model="newPatentOfficeConfig.secretKey" />
        </el-form-item>
        <el-form-item label="同步间隔(分钟)">
          <el-input-number
            v-model="newPatentOfficeConfig.syncInterval"
            :min="1"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showPatentOfficeDialog = false">取消</el-button>
        <el-button type="primary" @click="addPatentOfficeConfig"
          >确定</el-button
        >
      </template>
    </el-dialog>

    <el-dialog v-model="showEmailDialog" title="添加邮件配置" width="500px">
      <el-form :model="newEmailConfig" label-width="120px">
        <el-form-item label="名称">
          <el-input v-model="newEmailConfig.name" />
        </el-form-item>
        <el-form-item label="提供商">
          <el-select v-model="newEmailConfig.provider">
            <el-option label="SMTP" value="smtp" />
            <el-option label="IMAP" value="imap" />
            <el-option label="Exchange" value="exchange" />
          </el-select>
        </el-form-item>
        <el-form-item label="主机">
          <el-input v-model="newEmailConfig.host" />
        </el-form-item>
        <el-form-item label="端口">
          <el-input-number v-model="newEmailConfig.port" />
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="newEmailConfig.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="newEmailConfig.password" type="password" />
        </el-form-item>
        <el-form-item label="加密">
          <el-select v-model="newEmailConfig.encryption">
            <el-option label="无" value="none" />
            <el-option label="SSL" value="ssl" />
            <el-option label="TLS" value="tls" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showEmailDialog = false">取消</el-button>
        <el-button type="primary" @click="addEmailConfig">确定</el-button>
      </template>
    </el-dialog>

    <el-dialog
      v-model="showDatabaseDialog"
      title="添加数据库配置"
      width="500px"
    >
      <el-form :model="newDatabaseConfig" label-width="120px">
        <el-form-item label="名称">
          <el-input v-model="newDatabaseConfig.name" />
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="newDatabaseConfig.type">
            <el-option label="MySQL" value="mysql" />
            <el-option label="PostgreSQL" value="postgresql" />
            <el-option label="Oracle" value="oracle" />
          </el-select>
        </el-form-item>
        <el-form-item label="主机">
          <el-input v-model="newDatabaseConfig.host" />
        </el-form-item>
        <el-form-item label="端口">
          <el-input-number v-model="newDatabaseConfig.port" />
        </el-form-item>
        <el-form-item label="数据库">
          <el-input v-model="newDatabaseConfig.database" />
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="newDatabaseConfig.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="newDatabaseConfig.password" type="password" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showDatabaseDialog = false">取消</el-button>
        <el-button type="primary" @click="addDatabaseConfig">确定</el-button>
      </template>
    </el-dialog>

    <el-dialog v-model="showErpDialog" title="添加ERP配置" width="500px">
      <el-form :model="newErpConfig" label-width="120px">
        <el-form-item label="名称">
          <el-input v-model="newErpConfig.name" />
        </el-form-item>
        <el-form-item label="系统">
          <el-select v-model="newErpConfig.system">
            <el-option label="SAP" value="sap" />
            <el-option label="Oracle" value="oracle" />
            <el-option label="SAP Business One" value="sap_business_one" />
          </el-select>
        </el-form-item>
        <el-form-item label="基础URL">
          <el-input v-model="newErpConfig.baseUrl" />
        </el-form-item>
        <el-form-item label="API端点">
          <el-input v-model="newErpConfig.apiEndpoint" />
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="newErpConfig.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="newErpConfig.password" type="password" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showErpDialog = false">取消</el-button>
        <el-button type="primary" @click="addErpConfig">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useIntegrationStore } from "@/stores/integration";
import { ElMessage, ElMessageBox } from "element-plus";
import type {
  PatentOfficeConfig,
  EmailConfig,
  ThirdPartyDatabase,
  ErpConfig,
} from "@/types/integration";

const integrationStore = useIntegrationStore();

// 对话框状态
const showPatentOfficeDialog = ref(false);
const showEmailDialog = ref(false);
const showDatabaseDialog = ref(false);
const showErpDialog = ref(false);

// 新配置数据
const newPatentOfficeConfig = reactive({
  name: "",
  office: "CNIPA" as const,
  baseUrl: "",
  apiKey: "",
  secretKey: "",
  syncInterval: 30,
  enabled: true,
});

const newEmailConfig = reactive({
  name: "",
  provider: "smtp" as const,
  host: "",
  port: 587,
  username: "",
  password: "",
  encryption: "tls" as const,
  enabled: true,
});

const newDatabaseConfig = reactive({
  name: "",
  type: "mysql" as const,
  host: "",
  port: 3306,
  database: "",
  username: "",
  password: "",
  syncDirection: "import" as const,
  syncTables: ["patents"],
  syncInterval: 15,
  enabled: true,
});

const newErpConfig = reactive({
  name: "",
  system: "sap" as const,
  baseUrl: "",
  apiEndpoint: "/api/v1",
  username: "",
  password: "",
  modules: ["finance", "hr"],
  enabled: true,
});

// 方法
const getTaskTypeText = (type: string) => {
  const typeMap: Record<string, string> = {
    patent_office: "专利局API",
    email: "邮件系统",
    database: "数据库",
    erp: "ERP系统",
  };
  return typeMap[type] || type;
};

const getTaskStatusText = (status: string) => {
  const statusMap: Record<string, string> = {
    pending: "等待中",
    running: "运行中",
    completed: "已完成",
    failed: "失败",
  };
  return statusMap[status] || status;
};

const getProgressStatus = (status: string) => {
  switch (status) {
    case "completed":
      return "success";
    case "failed":
      return "exception";
    default:
      return "";
  }
};

const getLogTypeText = (type: string) => {
  const typeMap: Record<string, string> = {
    patent_office: "专利局API",
    email: "邮件系统",
    database: "数据库",
    erp: "ERP系统",
  };
  return typeMap[type] || type;
};

const formatDateTime = (date: string) => {
  return new Date(date).toLocaleString("zh-CN");
};

const testConnection = async (
  type: "patent_office" | "email" | "database" | "erp",
  configId: number
) => {
  try {
    const success = await integrationStore.testConnection(type, configId);
    if (success) {
      ElMessage.success("连接测试成功");
    } else {
      ElMessage.error("连接测试失败");
    }
  } catch (error) {
    ElMessage.error("连接测试失败");
  }
};

const deleteConfig = async (type: string, configId: number) => {
  try {
    await ElMessageBox.confirm("确定要删除此配置吗？", "确认删除", {
      type: "warning",
    });

    switch (type) {
      case "patent_office":
        await integrationStore.deletePatentOfficeConfig(configId);
        break;
      // 其他类型的删除方法需要实现
    }

    ElMessage.success("配置删除成功");
  } catch (error) {
    if (error !== "cancel") {
      ElMessage.error("删除失败");
    }
  }
};

const syncDatabase = async (databaseId: number) => {
  try {
    await integrationStore.syncDatabase(databaseId, "import");
    ElMessage.success("数据库同步成功");
  } catch (error) {
    ElMessage.error("数据库同步失败");
  }
};

const addPatentOfficeConfig = async () => {
  try {
    await integrationStore.addPatentOfficeConfig(newPatentOfficeConfig);
    showPatentOfficeDialog.value = false;
    ElMessage.success("专利局API配置添加成功");
    // 重置表单
    Object.assign(newPatentOfficeConfig, {
      name: "",
      office: "CNIPA",
      baseUrl: "",
      apiKey: "",
      secretKey: "",
      syncInterval: 30,
      enabled: true,
    });
  } catch (error) {
    ElMessage.error("添加失败");
  }
};

const addEmailConfig = async () => {
  try {
    await integrationStore.addEmailConfig(newEmailConfig);
    showEmailDialog.value = false;
    ElMessage.success("邮件配置添加成功");
    // 重置表单
    Object.assign(newEmailConfig, {
      name: "",
      provider: "smtp",
      host: "",
      port: 587,
      username: "",
      password: "",
      encryption: "tls",
      enabled: true,
    });
  } catch (error) {
    ElMessage.error("添加失败");
  }
};

const addDatabaseConfig = async () => {
  try {
    await integrationStore.addDatabaseConfig(newDatabaseConfig);
    showDatabaseDialog.value = false;
    ElMessage.success("数据库配置添加成功");
    // 重置表单
    Object.assign(newDatabaseConfig, {
      name: "",
      type: "mysql",
      host: "",
      port: 3306,
      database: "",
      username: "",
      password: "",
      syncDirection: "import",
      syncTables: ["patents"],
      syncInterval: 15,
      enabled: true,
    });
  } catch (error) {
    ElMessage.error("添加失败");
  }
};

const addErpConfig = async () => {
  try {
    await integrationStore.addErpConfig(newErpConfig);
    showErpDialog.value = false;
    ElMessage.success("ERP配置添加成功");
    // 重置表单
    Object.assign(newErpConfig, {
      name: "",
      system: "sap",
      baseUrl: "",
      apiEndpoint: "/api/v1",
      username: "",
      password: "",
      modules: ["finance", "hr"],
      enabled: true,
    });
  } catch (error) {
    ElMessage.error("添加失败");
  }
};
</script>

<style scoped>
.apple-integration-management {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 32px;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5em;
  font-weight: 700;
  margin: 0 0 8px 0;
  background: linear-gradient(135deg, #007aff, #5856d6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-header p {
  font-size: 1.1em;
  color: #666;
  margin: 0;
}

.integration-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.integration-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.card-header h3 {
  margin: 0;
  font-size: 1.3em;
  font-weight: 600;
  color: #2c3e50;
}

.config-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.config-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.config-info h4 {
  margin: 0 0 4px 0;
  font-size: 1em;
  font-weight: 600;
  color: #2c3e50;
}

.config-info p {
  margin: 0;
  font-size: 0.9em;
  color: #666;
}

.config-actions {
  display: flex;
  gap: 8px;
}

.statistics-section,
.sync-tasks-section,
.logs-section {
  background: white;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
}

.statistics-section h3,
.sync-tasks-section h3,
.logs-section h3 {
  margin: 0 0 20px 0;
  font-size: 1.3em;
  font-weight: 600;
  color: #2c3e50;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.stat-item {
  text-align: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;
}

.stat-value {
  font-size: 2em;
  font-weight: 700;
  color: #007aff;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.9em;
  color: #666;
  font-weight: 500;
}

.tasks-list,
.logs-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.task-item,
.log-item {
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.task-info h4 {
  margin: 0 0 8px 0;
  font-size: 1em;
  font-weight: 600;
  color: #2c3e50;
}

.task-info p {
  margin: 0 0 12px 0;
  font-size: 0.9em;
  color: #666;
}

.task-progress {
  margin-top: 12px;
}

.log-item.info {
  border-left: 4px solid #007aff;
}

.log-item.warning {
  border-left: 4px solid #ff9500;
}

.log-item.error {
  border-left: 4px solid #ff2d55;
}

.log-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.log-time,
.log-type {
  font-size: 0.8em;
  color: #666;
}

.log-level {
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.7em;
  font-weight: 600;
}

.log-item.info .log-level {
  background: rgba(0, 122, 255, 0.1);
  color: #007aff;
}

.log-item.warning .log-level {
  background: rgba(255, 149, 0, 0.1);
  color: #ff9500;
}

.log-item.error .log-level {
  background: rgba(255, 45, 85, 0.1);
  color: #ff2d55;
}

.log-message {
  font-size: 0.9em;
  color: #2c3e50;
}

@media (max-width: 768px) {
  .integration-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .card-header {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }
}
</style>
