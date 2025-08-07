<template>
  <div class="test-integration">
    <h1>外部系统集成测试</h1>

    <div class="test-section">
      <h2>专利局API测试</h2>
      <div class="test-actions">
        <el-button @click="testPatentOfficeAPI">测试专利局API</el-button>
        <el-button @click="addSamplePatentOfficeConfig">添加示例配置</el-button>
        <el-button @click="listPatentOfficeConfigs">查看配置列表</el-button>
      </div>
      <div class="test-results">
        <h3>测试结果：</h3>
        <pre>{{ patentOfficeResults }}</pre>
      </div>
    </div>

    <div class="test-section">
      <h2>邮件系统测试</h2>
      <div class="test-actions">
        <el-button @click="testEmailSystem">测试邮件系统</el-button>
        <el-button @click="addSampleEmailConfig">添加示例配置</el-button>
        <el-button @click="sendTestEmail">发送测试邮件</el-button>
      </div>
      <div class="test-results">
        <h3>测试结果：</h3>
        <pre>{{ emailResults }}</pre>
      </div>
    </div>

    <div class="test-section">
      <h2>数据库集成测试</h2>
      <div class="test-actions">
        <el-button @click="testDatabaseConnection">测试数据库连接</el-button>
        <el-button @click="addSampleDatabaseConfig">添加示例配置</el-button>
        <el-button @click="syncDatabaseData">同步数据库数据</el-button>
      </div>
      <div class="test-results">
        <h3>测试结果：</h3>
        <pre>{{ databaseResults }}</pre>
      </div>
    </div>

    <div class="test-section">
      <h2>ERP系统测试</h2>
      <div class="test-actions">
        <el-button @click="testErpSystem">测试ERP系统</el-button>
        <el-button @click="addSampleErpConfig">添加示例配置</el-button>
        <el-button @click="syncErpData">同步ERP数据</el-button>
      </div>
      <div class="test-results">
        <h3>测试结果：</h3>
        <pre>{{ erpResults }}</pre>
      </div>
    </div>

    <div class="test-section">
      <h2>集成统计</h2>
      <div class="stats-display">
        <div class="stat-item">
          <span class="stat-label">总配置数：</span>
          <span class="stat-value">{{ integrationStats.totalConfigs }}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">活跃配置：</span>
          <span class="stat-value">{{ integrationStats.activeConfigs }}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">失败配置：</span>
          <span class="stat-value">{{ integrationStats.failedConfigs }}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">平均响应时间：</span>
          <span class="stat-value"
            >{{ integrationStats.averageResponseTime.toFixed(0) }}ms</span
          >
        </div>
      </div>
    </div>

    <div class="test-section">
      <h2>集成日志</h2>
      <div class="logs-display">
        <div
          v-for="log in recentLogs"
          :key="log.id"
          class="log-item"
          :class="log.level"
        >
          <span class="log-time">{{ formatDateTime(log.timestamp) }}</span>
          <span class="log-type">{{ getLogTypeText(log.type) }}</span>
          <span class="log-level">{{ log.level.toUpperCase() }}</span>
          <span class="log-message">{{ log.message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useIntegrationStore } from "@/stores/integration";
import { ElMessage } from "element-plus";

const integrationStore = useIntegrationStore();

// 测试结果
const patentOfficeResults = ref("");
const emailResults = ref("");
const databaseResults = ref("");
const erpResults = ref("");

// 计算属性
const integrationStats = computed(() => integrationStore.integrationStatistics);

const recentLogs = computed(() => {
  return integrationStore.integrationLogs
    .sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )
    .slice(0, 10);
});

// 方法
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

// 专利局API测试
const testPatentOfficeAPI = async () => {
  try {
    patentOfficeResults.value = "正在测试专利局API...";

    // 获取第一个配置进行测试
    const configs = integrationStore.patentOfficeConfigs;
    if (configs.length === 0) {
      patentOfficeResults.value = "没有找到专利局API配置，请先添加配置";
      return;
    }

    const config = configs[0];
    const success = await integrationStore.testConnection(
      "patent_office",
      config.id
    );

    patentOfficeResults.value = success
      ? `专利局API测试成功！配置：${config.name}`
      : `专利局API测试失败！配置：${config.name}`;
  } catch (error) {
    patentOfficeResults.value = `专利局API测试出错：${error}`;
  }
};

const addSamplePatentOfficeConfig = async () => {
  try {
    const config = {
      name: "测试专利局API",
      office: "CNIPA" as const,
      baseUrl: "https://api.test.cnipa.gov.cn",
      apiKey: "test_api_key",
      secretKey: "test_secret_key",
      syncInterval: 30,
      enabled: true,
    };

    await integrationStore.addPatentOfficeConfig(config);
    patentOfficeResults.value = "示例专利局API配置添加成功！";
    ElMessage.success("配置添加成功");
  } catch (error) {
    patentOfficeResults.value = `添加配置失败：${error}`;
    ElMessage.error("添加配置失败");
  }
};

const listPatentOfficeConfigs = () => {
  const configs = integrationStore.patentOfficeConfigs;
  patentOfficeResults.value = `专利局API配置列表：\n${JSON.stringify(
    configs,
    null,
    2
  )}`;
};

// 邮件系统测试
const testEmailSystem = async () => {
  try {
    emailResults.value = "正在测试邮件系统...";

    const configs = integrationStore.emailConfigs;
    if (configs.length === 0) {
      emailResults.value = "没有找到邮件系统配置，请先添加配置";
      return;
    }

    const config = configs[0];
    const success = await integrationStore.testConnection("email", config.id);

    emailResults.value = success
      ? `邮件系统测试成功！配置：${config.name}`
      : `邮件系统测试失败！配置：${config.name}`;
  } catch (error) {
    emailResults.value = `邮件系统测试出错：${error}`;
  }
};

const addSampleEmailConfig = async () => {
  try {
    const config = {
      name: "测试邮件系统",
      provider: "smtp" as const,
      host: "smtp.test.com",
      port: 587,
      username: "test@test.com",
      password: "test_password",
      encryption: "tls" as const,
      enabled: true,
    };

    await integrationStore.addEmailConfig(config);
    emailResults.value = "示例邮件系统配置添加成功！";
    ElMessage.success("配置添加成功");
  } catch (error) {
    emailResults.value = `添加配置失败：${error}`;
    ElMessage.error("添加配置失败");
  }
};

const sendTestEmail = async () => {
  try {
    emailResults.value = "正在发送测试邮件...";

    const message = {
      to: ["test@example.com"],
      subject: "测试邮件",
      content: "这是一封测试邮件，用于验证邮件系统集成功能。",
    };

    const result = await integrationStore.sendEmail(message);
    emailResults.value = `测试邮件发送成功！邮件ID：${result.id}`;
    ElMessage.success("测试邮件发送成功");
  } catch (error) {
    emailResults.value = `发送测试邮件失败：${error}`;
    ElMessage.error("发送测试邮件失败");
  }
};

// 数据库集成测试
const testDatabaseConnection = async () => {
  try {
    databaseResults.value = "正在测试数据库连接...";

    const configs = integrationStore.databaseConfigs;
    if (configs.length === 0) {
      databaseResults.value = "没有找到数据库配置，请先添加配置";
      return;
    }

    const config = configs[0];
    const success = await integrationStore.testConnection(
      "database",
      config.id
    );

    databaseResults.value = success
      ? `数据库连接测试成功！配置：${config.name}`
      : `数据库连接测试失败！配置：${config.name}`;
  } catch (error) {
    databaseResults.value = `数据库连接测试出错：${error}`;
  }
};

const addSampleDatabaseConfig = async () => {
  try {
    const config = {
      name: "测试数据库",
      type: "mysql" as const,
      host: "localhost",
      port: 3306,
      database: "test_db",
      username: "test_user",
      password: "test_password",
      syncDirection: "import" as const,
      syncTables: ["patents", "applications"],
      syncInterval: 15,
      enabled: true,
    };

    await integrationStore.addDatabaseConfig(config);
    databaseResults.value = "示例数据库配置添加成功！";
    ElMessage.success("配置添加成功");
  } catch (error) {
    databaseResults.value = `添加配置失败：${error}`;
    ElMessage.error("添加配置失败");
  }
};

const syncDatabaseData = async () => {
  try {
    databaseResults.value = "正在同步数据库数据...";

    const configs = integrationStore.databaseConfigs;
    if (configs.length === 0) {
      databaseResults.value = "没有找到数据库配置，请先添加配置";
      return;
    }

    const config = configs[0];
    const result = await integrationStore.syncDatabase(config.id, "import");

    databaseResults.value = `数据库同步成功！处理记录数：${result.recordCount}`;
    ElMessage.success("数据库同步成功");
  } catch (error) {
    databaseResults.value = `数据库同步失败：${error}`;
    ElMessage.error("数据库同步失败");
  }
};

// ERP系统测试
const testErpSystem = async () => {
  try {
    erpResults.value = "正在测试ERP系统...";

    const configs = integrationStore.erpConfigs;
    if (configs.length === 0) {
      erpResults.value = "没有找到ERP系统配置，请先添加配置";
      return;
    }

    const config = configs[0];
    const success = await integrationStore.testConnection("erp", config.id);

    erpResults.value = success
      ? `ERP系统测试成功！配置：${config.name}`
      : `ERP系统测试失败！配置：${config.name}`;
  } catch (error) {
    erpResults.value = `ERP系统测试出错：${error}`;
  }
};

const addSampleErpConfig = async () => {
  try {
    const config = {
      name: "测试ERP系统",
      system: "sap" as const,
      baseUrl: "https://erp.test.com",
      apiEndpoint: "/api/v1",
      username: "erp_user",
      password: "erp_password",
      modules: ["finance", "hr"],
      enabled: true,
    };

    await integrationStore.addErpConfig(config);
    erpResults.value = "示例ERP系统配置添加成功！";
    ElMessage.success("配置添加成功");
  } catch (error) {
    erpResults.value = `添加配置失败：${error}`;
    ElMessage.error("添加配置失败");
  }
};

const syncErpData = async () => {
  try {
    erpResults.value = "正在同步ERP数据...";

    // 模拟ERP数据同步
    await new Promise((resolve) => setTimeout(resolve, 2000));

    erpResults.value = "ERP数据同步成功！";
    ElMessage.success("ERP数据同步成功");
  } catch (error) {
    erpResults.value = `ERP数据同步失败：${error}`;
    ElMessage.error("ERP数据同步失败");
  }
};
</script>

<style scoped>
.test-integration {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.test-integration h1 {
  text-align: center;
  margin-bottom: 32px;
  color: #2c3e50;
}

.test-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.test-section h2 {
  margin: 0 0 16px 0;
  color: #2c3e50;
  font-size: 1.3em;
}

.test-actions {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.test-results {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #e9ecef;
}

.test-results h3 {
  margin: 0 0 12px 0;
  font-size: 1em;
  color: #2c3e50;
}

.test-results pre {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-all;
  font-size: 0.9em;
  color: #666;
}

.stats-display {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.stat-item {
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stat-label {
  font-weight: 600;
  color: #2c3e50;
}

.stat-value {
  font-weight: 700;
  color: #007aff;
  font-size: 1.2em;
}

.logs-display {
  max-height: 400px;
  overflow-y: auto;
}

.log-item {
  display: flex;
  gap: 12px;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 8px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  font-size: 0.9em;
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

.log-time {
  color: #666;
  font-size: 0.8em;
  min-width: 120px;
}

.log-type {
  color: #2c3e50;
  font-weight: 600;
  min-width: 80px;
}

.log-level {
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.7em;
  font-weight: 600;
  min-width: 50px;
  text-align: center;
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
  color: #2c3e50;
  flex: 1;
}

@media (max-width: 768px) {
  .test-actions {
    flex-direction: column;
  }

  .stats-display {
    grid-template-columns: 1fr;
  }

  .log-item {
    flex-direction: column;
    gap: 4px;
  }

  .log-time,
  .log-type,
  .log-level {
    min-width: auto;
  }
}
</style>
