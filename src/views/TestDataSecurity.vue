<template>
  <div class="test-data-security">
    <h1>数据安全管理功能测试</h1>

    <div class="test-section">
      <h2>1. 加密设置测试</h2>
      <el-button @click="testEncryptionSettings">测试加密设置</el-button>
      <el-button @click="testKeyRotation">测试密钥轮换</el-button>
      <p>加密状态: {{ encryptionStatus }}</p>
      <p>密钥轮换天数: {{ daysUntilKeyRotation }}</p>
    </div>

    <div class="test-section">
      <h2>2. 日志设置测试</h2>
      <el-button @click="testLoggingSettings">测试日志设置</el-button>
      <p>日志级别: {{ loggingLevel }}</p>
      <p>实时监控: {{ realTimeMonitoring ? "启用" : "禁用" }}</p>
    </div>

    <div class="test-section">
      <h2>3. 备份功能测试</h2>
      <el-button @click="testBackupSettings">测试备份设置</el-button>
      <el-button @click="testManualBackup">测试手动备份</el-button>
      <p>备份状态: {{ backupStatus }}</p>
      <p>下次备份时间: {{ nextBackupTime }}</p>
      <p>备份大小: {{ backupSize }} MB</p>
    </div>

    <div class="test-section">
      <h2>4. 恢复功能测试</h2>
      <el-button @click="testRecoverySettings">测试恢复设置</el-button>
      <el-button @click="testRecoveryPlan">测试恢复计划</el-button>
      <p>恢复状态: {{ recoveryStatus }}</p>
      <p>RTO: {{ rtoHours }} 小时</p>
      <p>RPO: {{ rpoMinutes }} 分钟</p>
    </div>

    <div class="test-section">
      <h2>5. 安全状态测试</h2>
      <el-button @click="testSecurityStatus">测试安全状态</el-button>
      <p>整体安全状态: {{ overallSecurityStatus }}</p>
      <p>最后检查时间: {{ lastCheckTime }}</p>
    </div>

    <div class="test-section">
      <h2>6. 安全事件测试</h2>
      <el-button @click="testSecurityEvents">测试安全事件</el-button>
      <p>事件总数: {{ totalEvents }}</p>
      <p>严重事件: {{ criticalEvents }}</p>
      <p>已解决事件: {{ resolvedEvents }}</p>
    </div>

    <div class="test-section">
      <h2>7. 功能演示</h2>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card>
            <template #header>
              <h3>加密配置</h3>
            </template>
            <div class="demo-content">
              <p><strong>算法:</strong> {{ encryptionAlgorithm }}</p>
              <p>
                <strong>敏感数据加密:</strong>
                {{ sensitiveDataEncryption ? "启用" : "禁用" }}
              </p>
              <p><strong>密钥轮换周期:</strong> {{ keyRotationDays }} 天</p>
            </div>
          </el-card>
        </el-col>

        <el-col :span="8">
          <el-card>
            <template #header>
              <h3>备份配置</h3>
            </template>
            <div class="demo-content">
              <p><strong>备份频率:</strong> {{ backupFrequency }}</p>
              <p><strong>备份位置:</strong> {{ backupLocation }}</p>
              <p>
                <strong>增量备份:</strong>
                {{ incrementalBackup ? "启用" : "禁用" }}
              </p>
            </div>
          </el-card>
        </el-col>

        <el-col :span="8">
          <el-card>
            <template #header>
              <h3>恢复配置</h3>
            </template>
            <div class="demo-content">
              <p><strong>RTO:</strong> {{ rtoHours }} 小时</p>
              <p><strong>RPO:</strong> {{ rpoMinutes }} 分钟</p>
              <p>
                <strong>自动恢复:</strong> {{ autoRecovery ? "启用" : "禁用" }}
              </p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="test-section">
      <h2>8. 导航到数据安全管理</h2>
      <el-button type="primary" @click="goToDataSecurity">
        前往数据安全管理页面
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useDataSecurityStore } from "@/stores/dataSecurity";
import { ElMessage } from "element-plus";

const router = useRouter();
const dataSecurityStore = useDataSecurityStore();

// 测试结果
const encryptionStatus = ref("");
const daysUntilKeyRotation = ref(0);
const loggingLevel = ref("");
const realTimeMonitoring = ref(false);
const backupStatus = ref("");
const nextBackupTime = ref("");
const backupSize = ref(0);
const recoveryStatus = ref("");
const rtoHours = ref(0);
const rpoMinutes = ref(0);
const overallSecurityStatus = ref("");
const lastCheckTime = ref("");
const totalEvents = ref(0);
const criticalEvents = ref(0);
const resolvedEvents = ref(0);

// 演示数据
const encryptionAlgorithm = computed(
  () => dataSecurityStore.encryptionSettings.algorithm
);
const sensitiveDataEncryption = computed(
  () => dataSecurityStore.encryptionSettings.sensitiveDataEncryption
);
const keyRotationDays = computed(
  () => dataSecurityStore.encryptionSettings.keyRotationDays
);
const backupFrequency = computed(
  () => dataSecurityStore.backupSettings.frequency
);
const backupLocation = computed(
  () => dataSecurityStore.backupSettings.location
);
const incrementalBackup = computed(
  () => dataSecurityStore.backupSettings.incrementalBackup
);
const autoRecovery = computed(
  () => dataSecurityStore.recoverySettings.autoRecovery
);

// 测试方法
const testEncryptionSettings = async () => {
  try {
    const success = await dataSecurityStore.updateEncryptionSettings({
      algorithm: "aes256",
      keyRotationDays: 90,
      sensitiveDataEncryption: true,
    });

    if (success) {
      encryptionStatus.value = "✅ 加密设置测试成功";
      daysUntilKeyRotation.value = dataSecurityStore.daysUntilKeyRotation;
      ElMessage.success("加密设置测试成功");
    } else {
      encryptionStatus.value = "❌ 加密设置测试失败";
      ElMessage.error("加密设置测试失败");
    }
  } catch (error) {
    encryptionStatus.value = "❌ 加密设置测试异常: " + error;
    ElMessage.error("加密设置测试异常");
  }
};

const testKeyRotation = async () => {
  try {
    ElMessage.info("正在测试密钥轮换...");
    await dataSecurityStore.rotateEncryptionKeys();
    encryptionStatus.value = "✅ 密钥轮换测试成功";
    ElMessage.success("密钥轮换测试成功");
  } catch (error) {
    encryptionStatus.value = "❌ 密钥轮换测试失败: " + error;
    ElMessage.error("密钥轮换测试失败");
  }
};

const testLoggingSettings = async () => {
  try {
    const success = await dataSecurityStore.updateLoggingSettings({
      level: "info",
      retentionDays: 365,
      realTimeMonitoring: true,
    });

    if (success) {
      loggingLevel.value = dataSecurityStore.loggingSettings.level;
      realTimeMonitoring.value =
        dataSecurityStore.loggingSettings.realTimeMonitoring;
      ElMessage.success("日志设置测试成功");
    } else {
      ElMessage.error("日志设置测试失败");
    }
  } catch (error) {
    ElMessage.error("日志设置测试异常: " + error);
  }
};

const testBackupSettings = async () => {
  try {
    const success = await dataSecurityStore.updateBackupSettings({
      frequency: "daily",
      location: "hybrid",
      incrementalBackup: true,
    });

    if (success) {
      backupStatus.value = "✅ 备份设置测试成功";
      nextBackupTime.value = new Date(
        dataSecurityStore.nextBackupTime
      ).toLocaleString();
      backupSize.value = dataSecurityStore.backupSettings.backupSize;
      ElMessage.success("备份设置测试成功");
    } else {
      backupStatus.value = "❌ 备份设置测试失败";
      ElMessage.error("备份设置测试失败");
    }
  } catch (error) {
    backupStatus.value = "❌ 备份设置测试异常: " + error;
    ElMessage.error("备份设置测试异常");
  }
};

const testManualBackup = async () => {
  try {
    ElMessage.info("正在测试手动备份...");
    await dataSecurityStore.triggerManualBackup();
    backupStatus.value = "✅ 手动备份测试成功";
    backupSize.value = dataSecurityStore.backupSettings.backupSize;
    ElMessage.success("手动备份测试成功");
  } catch (error) {
    backupStatus.value = "❌ 手动备份测试失败: " + error;
    ElMessage.error("手动备份测试失败");
  }
};

const testRecoverySettings = async () => {
  try {
    const success = await dataSecurityStore.updateRecoverySettings({
      rtoHours: 4,
      rpoMinutes: 60,
      autoRecovery: true,
    });

    if (success) {
      recoveryStatus.value = "✅ 恢复设置测试成功";
      rtoHours.value = dataSecurityStore.recoverySettings.rtoHours;
      rpoMinutes.value = dataSecurityStore.recoverySettings.rpoMinutes;
      ElMessage.success("恢复设置测试成功");
    } else {
      recoveryStatus.value = "❌ 恢复设置测试失败";
      ElMessage.error("恢复设置测试失败");
    }
  } catch (error) {
    recoveryStatus.value = "❌ 恢复设置测试异常: " + error;
    ElMessage.error("恢复设置测试异常");
  }
};

const testRecoveryPlan = async () => {
  try {
    ElMessage.info("正在测试恢复计划...");
    const success = await dataSecurityStore.testRecoveryPlan();

    if (success) {
      recoveryStatus.value = "✅ 恢复计划测试成功";
      ElMessage.success("恢复计划测试成功");
    } else {
      recoveryStatus.value = "❌ 恢复计划测试失败";
      ElMessage.warning("恢复计划测试失败");
    }
  } catch (error) {
    recoveryStatus.value = "❌ 恢复计划测试异常: " + error;
    ElMessage.error("恢复计划测试异常");
  }
};

const testSecurityStatus = async () => {
  try {
    ElMessage.info("正在检查安全状态...");
    const status = await dataSecurityStore.checkSecurityStatus();

    if (status) {
      overallSecurityStatus.value = status.overallStatus;
      lastCheckTime.value = new Date(status.lastCheck).toLocaleString();
      ElMessage.success("安全状态检查成功");
    } else {
      ElMessage.error("安全状态检查失败");
    }
  } catch (error) {
    ElMessage.error("安全状态检查异常: " + error);
  }
};

const testSecurityEvents = () => {
  try {
    totalEvents.value = dataSecurityStore.securityEvents.length;
    criticalEvents.value = dataSecurityStore.securityEvents.filter(
      (event) => event.severity === "critical"
    ).length;
    resolvedEvents.value = dataSecurityStore.securityEvents.filter(
      (event) => event.resolved
    ).length;

    ElMessage.success("安全事件统计完成");
  } catch (error) {
    ElMessage.error("安全事件统计失败: " + error);
  }
};

const goToDataSecurity = () => {
  router.push("/dashboard/data-security");
};

onMounted(async () => {
  console.log("数据安全管理测试页面已加载");
  await dataSecurityStore.initializeSecurity();

  // 初始化显示数据
  daysUntilKeyRotation.value = dataSecurityStore.daysUntilKeyRotation;
  loggingLevel.value = dataSecurityStore.loggingSettings.level;
  realTimeMonitoring.value =
    dataSecurityStore.loggingSettings.realTimeMonitoring;
  nextBackupTime.value = new Date(
    dataSecurityStore.nextBackupTime
  ).toLocaleString();
  backupSize.value = dataSecurityStore.backupSettings.backupSize;
  rtoHours.value = dataSecurityStore.recoverySettings.rtoHours;
  rpoMinutes.value = dataSecurityStore.recoverySettings.rpoMinutes;
  overallSecurityStatus.value = dataSecurityStore.securityStatus.overallStatus;
  lastCheckTime.value = new Date(
    dataSecurityStore.securityStatus.lastCheck
  ).toLocaleString();
  totalEvents.value = dataSecurityStore.securityEvents.length;
  criticalEvents.value = dataSecurityStore.securityEvents.filter(
    (event) => event.severity === "critical"
  ).length;
  resolvedEvents.value = dataSecurityStore.securityEvents.filter(
    (event) => event.resolved
  ).length;
});
</script>

<style scoped>
.test-data-security {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.test-section {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  background-color: #fafafa;
}

.test-section h2 {
  margin: 0 0 15px 0;
  color: #2c3e50;
  font-size: 1.2em;
}

.test-section p {
  margin: 10px 0;
  color: #666;
}

.test-section .el-button {
  margin-right: 10px;
  margin-bottom: 10px;
}

.demo-content {
  padding: 10px 0;
}

.demo-content p {
  margin: 8px 0;
  color: #606266;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .test-section {
    padding: 15px;
  }

  .el-row {
    margin: 0 !important;
  }

  .el-col {
    padding: 0 !important;
    margin-bottom: 15px;
  }
}
</style>
