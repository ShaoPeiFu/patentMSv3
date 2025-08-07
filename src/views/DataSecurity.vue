<template>
  <div class="data-security-container">
    <el-card class="security-card">
      <template #header>
        <div class="card-header">
          <h2>🔒 数据安全管理</h2>
          <p class="subtitle">保护您的专利数据安全</p>
        </div>
      </template>

      <!-- 数据加密存储 -->
      <el-row :gutter="20" class="security-section">
        <el-col :span="12">
          <el-card class="feature-card">
            <template #header>
              <div class="feature-header">
                <el-icon><Lock /></el-icon>
                <span>数据加密存储</span>
              </div>
            </template>
            <div class="feature-content">
              <el-form :model="encryptionForm" label-width="120px">
                <el-form-item label="加密算法">
                  <el-select
                    v-model="encryptionForm.algorithm"
                    placeholder="选择加密算法"
                  >
                    <el-option label="AES-256" value="aes256" />
                    <el-option label="RSA-2048" value="rsa2048" />
                    <el-option label="ChaCha20" value="chacha20" />
                  </el-select>
                </el-form-item>
                <el-form-item label="密钥轮换周期">
                  <el-input-number
                    v-model="encryptionForm.keyRotationDays"
                    :min="30"
                    :max="365"
                  />
                  <span class="unit">天</span>
                </el-form-item>
                <el-form-item label="敏感数据加密">
                  <el-switch v-model="encryptionForm.sensitiveDataEncryption" />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="updateEncryptionSettings">
                    更新加密设置
                  </el-button>
                  <el-button
                    type="warning"
                    @click="rotateKeys"
                    :disabled="isBackupRunning"
                  >
                    轮换密钥
                  </el-button>
                </el-form-item>
                <el-form-item v-if="daysUntilKeyRotation > 0">
                  <span class="info-text">
                    距离下次密钥轮换还有 {{ daysUntilKeyRotation }} 天
                  </span>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card class="feature-card">
            <template #header>
              <div class="feature-header">
                <el-icon><Document /></el-icon>
                <span>访问日志记录</span>
              </div>
            </template>
            <div class="feature-content">
              <el-form :model="loggingForm" label-width="120px">
                <el-form-item label="日志级别">
                  <el-select
                    v-model="loggingForm.level"
                    placeholder="选择日志级别"
                  >
                    <el-option label="DEBUG" value="debug" />
                    <el-option label="INFO" value="info" />
                    <el-option label="WARN" value="warn" />
                    <el-option label="ERROR" value="error" />
                  </el-select>
                </el-form-item>
                <el-form-item label="日志保留时间">
                  <el-input-number
                    v-model="loggingForm.retentionDays"
                    :min="30"
                    :max="1095"
                  />
                  <span class="unit">天</span>
                </el-form-item>
                <el-form-item label="实时监控">
                  <el-switch v-model="loggingForm.realTimeMonitoring" />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="updateLoggingSettings">
                    更新日志设置
                  </el-button>
                  <el-button @click="refreshSecurityStatus">
                    刷新状态
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <!-- 数据备份策略 -->
      <el-row :gutter="20" class="security-section">
        <el-col :span="12">
          <el-card class="feature-card">
            <template #header>
              <div class="feature-header">
                <el-icon><Upload /></el-icon>
                <span>数据备份策略</span>
              </div>
            </template>
            <div class="feature-content">
              <el-form :model="backupForm" label-width="120px">
                <el-form-item label="备份频率">
                  <el-select
                    v-model="backupForm.frequency"
                    placeholder="选择备份频率"
                  >
                    <el-option label="每日" value="daily" />
                    <el-option label="每周" value="weekly" />
                    <el-option label="每月" value="monthly" />
                  </el-select>
                </el-form-item>
                <el-form-item label="备份位置">
                  <el-select
                    v-model="backupForm.location"
                    placeholder="选择备份位置"
                  >
                    <el-option label="本地存储" value="local" />
                    <el-option label="云端存储" value="cloud" />
                    <el-option label="混合存储" value="hybrid" />
                  </el-select>
                </el-form-item>
                <el-form-item label="增量备份">
                  <el-switch v-model="backupForm.incrementalBackup" />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="updateBackupSettings">
                    更新备份设置
                  </el-button>
                  <el-button
                    @click="triggerManualBackup"
                    :loading="isBackupRunning"
                    :disabled="isBackupRunning"
                  >
                    {{ isBackupRunning ? "备份中..." : "立即备份" }}
                  </el-button>
                </el-form-item>
                <el-form-item v-if="nextBackupTime">
                  <span class="info-text">
                    下次备份时间:
                    {{ new Date(nextBackupTime).toLocaleString() }}
                  </span>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card class="feature-card">
            <template #header>
              <div class="feature-header">
                <el-icon><Refresh /></el-icon>
                <span>灾难恢复计划</span>
              </div>
            </template>
            <div class="feature-content">
              <el-form :model="recoveryForm" label-width="120px">
                <el-form-item label="恢复时间目标">
                  <el-input-number
                    v-model="recoveryForm.rtoHours"
                    :min="1"
                    :max="72"
                  />
                  <span class="unit">小时</span>
                </el-form-item>
                <el-form-item label="恢复点目标">
                  <el-input-number
                    v-model="recoveryForm.rpoMinutes"
                    :min="15"
                    :max="1440"
                  />
                  <span class="unit">分钟</span>
                </el-form-item>
                <el-form-item label="自动恢复">
                  <el-switch v-model="recoveryForm.autoRecovery" />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="updateRecoverySettings">
                    更新恢复设置
                  </el-button>
                  <el-button
                    type="warning"
                    @click="testRecoveryPlan"
                    :loading="isRecoveryTesting"
                    :disabled="isRecoveryTesting"
                  >
                    {{ isRecoveryTesting ? "测试中..." : "测试恢复计划" }}
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <!-- 安全状态监控 -->
      <el-card class="monitoring-card">
        <template #header>
          <div class="feature-header">
            <el-icon><Monitor /></el-icon>
            <span>安全状态监控</span>
          </div>
        </template>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="status-item">
              <div
                class="status-icon"
                :class="securityStatus.encryption ? 'success' : 'error'"
              >
                <el-icon
                  ><component
                    :is="securityStatus.encryption ? 'Check' : 'CircleClose'"
                /></el-icon>
              </div>
              <div class="status-info">
                <h4>加密状态</h4>
                <p>{{ securityStatus.encryption ? "正常" : "异常" }}</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="status-item">
              <div
                class="status-icon"
                :class="securityStatus.logging ? 'success' : 'error'"
              >
                <el-icon
                  ><component
                    :is="securityStatus.logging ? 'Check' : 'CircleClose'"
                /></el-icon>
              </div>
              <div class="status-info">
                <h4>日志记录</h4>
                <p>{{ securityStatus.logging ? "正常" : "异常" }}</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="status-item">
              <div
                class="status-icon"
                :class="securityStatus.backup ? 'success' : 'error'"
              >
                <el-icon
                  ><component
                    :is="securityStatus.backup ? 'Check' : 'CircleClose'"
                /></el-icon>
              </div>
              <div class="status-info">
                <h4>备份状态</h4>
                <p>{{ securityStatus.backup ? "正常" : "异常" }}</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="status-item">
              <div
                class="status-icon"
                :class="securityStatus.recovery ? 'success' : 'error'"
              >
                <el-icon
                  ><component
                    :is="securityStatus.recovery ? 'Check' : 'CircleClose'"
                /></el-icon>
              </div>
              <div class="status-info">
                <h4>恢复准备</h4>
                <p>{{ securityStatus.recovery ? "就绪" : "未就绪" }}</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </el-card>

    <!-- 安全事件监控 -->
    <SecurityEventMonitor />

    <!-- 备份管理 -->
    <BackupManager />

    <!-- 日志查看器 -->
    <LogViewer />
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, computed } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useDataSecurityStore } from "@/stores/dataSecurity";
import SecurityEventMonitor from "@/components/SecurityEventMonitor.vue";
import BackupManager from "@/components/BackupManager.vue";
import LogViewer from "@/components/LogViewer.vue";
import {
  Lock,
  Document,
  Upload,
  Refresh,
  Monitor,
  Check,
  Warning,
  CircleClose,
} from "@element-plus/icons-vue";

const dataSecurityStore = useDataSecurityStore();

// 表单数据 - 绑定到store
const encryptionForm = reactive({
  algorithm: computed({
    get: () => dataSecurityStore.encryptionSettings.algorithm,
    set: (value) => (dataSecurityStore.encryptionSettings.algorithm = value),
  }),
  keyRotationDays: computed({
    get: () => dataSecurityStore.encryptionSettings.keyRotationDays,
    set: (value) =>
      (dataSecurityStore.encryptionSettings.keyRotationDays = value),
  }),
  sensitiveDataEncryption: computed({
    get: () => dataSecurityStore.encryptionSettings.sensitiveDataEncryption,
    set: (value) =>
      (dataSecurityStore.encryptionSettings.sensitiveDataEncryption = value),
  }),
});

const loggingForm = reactive({
  level: computed({
    get: () => dataSecurityStore.loggingSettings.level,
    set: (value) => (dataSecurityStore.loggingSettings.level = value),
  }),
  retentionDays: computed({
    get: () => dataSecurityStore.loggingSettings.retentionDays,
    set: (value) => (dataSecurityStore.loggingSettings.retentionDays = value),
  }),
  realTimeMonitoring: computed({
    get: () => dataSecurityStore.loggingSettings.realTimeMonitoring,
    set: (value) =>
      (dataSecurityStore.loggingSettings.realTimeMonitoring = value),
  }),
});

const backupForm = reactive({
  frequency: computed({
    get: () => dataSecurityStore.backupSettings.frequency,
    set: (value) => (dataSecurityStore.backupSettings.frequency = value),
  }),
  location: computed({
    get: () => dataSecurityStore.backupSettings.location,
    set: (value) => (dataSecurityStore.backupSettings.location = value),
  }),
  incrementalBackup: computed({
    get: () => dataSecurityStore.backupSettings.incrementalBackup,
    set: (value) =>
      (dataSecurityStore.backupSettings.incrementalBackup = value),
  }),
});

const recoveryForm = reactive({
  rtoHours: computed({
    get: () => dataSecurityStore.recoverySettings.rtoHours,
    set: (value) => (dataSecurityStore.recoverySettings.rtoHours = value),
  }),
  rpoMinutes: computed({
    get: () => dataSecurityStore.recoverySettings.rpoMinutes,
    set: (value) => (dataSecurityStore.recoverySettings.rpoMinutes = value),
  }),
  autoRecovery: computed({
    get: () => dataSecurityStore.recoverySettings.autoRecovery,
    set: (value) => (dataSecurityStore.recoverySettings.autoRecovery = value),
  }),
});

// 计算属性
const securityStatus = computed(() => dataSecurityStore.securityStatus);
const isBackupRunning = computed(() => dataSecurityStore.isBackupRunning);
const isRecoveryTesting = computed(() => dataSecurityStore.isRecoveryTesting);
const daysUntilKeyRotation = computed(
  () => dataSecurityStore.daysUntilKeyRotation
);
const nextBackupTime = computed(() => dataSecurityStore.nextBackupTime);

// 更新加密设置
const updateEncryptionSettings = async () => {
  try {
    const success = await dataSecurityStore.updateEncryptionSettings({
      algorithm: encryptionForm.algorithm.value,
      keyRotationDays: encryptionForm.keyRotationDays.value,
      sensitiveDataEncryption: encryptionForm.sensitiveDataEncryption.value,
    });

    if (success) {
      ElMessage.success("加密设置更新成功");
    } else {
      ElMessage.error("加密设置更新失败");
    }
  } catch (error) {
    ElMessage.error("加密设置更新失败: " + error);
  }
};

// 更新日志设置
const updateLoggingSettings = async () => {
  try {
    const success = await dataSecurityStore.updateLoggingSettings({
      level: loggingForm.level.value,
      retentionDays: loggingForm.retentionDays.value,
      realTimeMonitoring: loggingForm.realTimeMonitoring.value,
    });

    if (success) {
      ElMessage.success("日志设置更新成功");
    } else {
      ElMessage.error("日志设置更新失败");
    }
  } catch (error) {
    ElMessage.error("日志设置更新失败: " + error);
  }
};

// 更新备份设置
const updateBackupSettings = async () => {
  try {
    const success = await dataSecurityStore.updateBackupSettings({
      frequency: backupForm.frequency.value,
      location: backupForm.location.value,
      incrementalBackup: backupForm.incrementalBackup.value,
    });

    if (success) {
      ElMessage.success("备份设置更新成功");
    } else {
      ElMessage.error("备份设置更新失败");
    }
  } catch (error) {
    ElMessage.error("备份设置更新失败: " + error);
  }
};

// 立即备份
const triggerManualBackup = async () => {
  try {
    await ElMessageBox.confirm("确定要立即执行数据备份吗？", "确认备份", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    });

    ElMessage.info("正在执行备份...");
    await dataSecurityStore.triggerManualBackup();
    ElMessage.success("备份完成");
  } catch (error) {
    if (error !== "cancel") {
      ElMessage.error("备份失败: " + error);
    }
  }
};

// 更新恢复设置
const updateRecoverySettings = async () => {
  try {
    const success = await dataSecurityStore.updateRecoverySettings({
      rtoHours: recoveryForm.rtoHours.value,
      rpoMinutes: recoveryForm.rpoMinutes.value,
      autoRecovery: recoveryForm.autoRecovery.value,
    });

    if (success) {
      ElMessage.success("恢复设置更新成功");
    } else {
      ElMessage.error("恢复设置更新失败");
    }
  } catch (error) {
    ElMessage.error("恢复设置更新失败: " + error);
  }
};

// 测试恢复计划
const testRecoveryPlan = async () => {
  try {
    await ElMessageBox.confirm(
      "确定要测试灾难恢复计划吗？这可能需要较长时间。",
      "确认测试",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }
    );

    ElMessage.info("正在测试恢复计划...");
    const success = await dataSecurityStore.testRecoveryPlan();

    if (success) {
      ElMessage.success("恢复计划测试成功");
    } else {
      ElMessage.warning("恢复计划测试失败，请检查配置");
    }
  } catch (error) {
    if (error !== "cancel") {
      ElMessage.error("恢复计划测试失败: " + error);
    }
  }
};

// 轮换加密密钥
const rotateKeys = async () => {
  try {
    await ElMessageBox.confirm(
      "确定要轮换加密密钥吗？此操作可能需要几分钟时间。",
      "确认密钥轮换",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }
    );

    ElMessage.info("正在轮换加密密钥...");
    await dataSecurityStore.rotateEncryptionKeys();
    ElMessage.success("加密密钥轮换完成");
  } catch (error) {
    if (error !== "cancel") {
      ElMessage.error("密钥轮换失败: " + error);
    }
  }
};

// 刷新安全状态
const refreshSecurityStatus = async () => {
  try {
    ElMessage.info("正在检查安全状态...");
    await dataSecurityStore.checkSecurityStatus();
    ElMessage.success("安全状态检查完成");
  } catch (error) {
    ElMessage.error("安全状态检查失败: " + error);
  }
};

onMounted(async () => {
  console.log("数据安全页面已加载");
  await dataSecurityStore.initializeSecurity();
});
</script>

<style scoped>
.data-security-container {
  padding: 20px;
  background-color: #f5f7fa;
  min-height: 100vh;
}

.security-card {
  margin-bottom: 20px;
}

.card-header {
  text-align: center;
}

.card-header h2 {
  margin: 0;
  color: #303133;
  font-size: 24px;
}

.subtitle {
  margin: 10px 0 0 0;
  color: #909399;
  font-size: 14px;
}

.security-section {
  margin-bottom: 20px;
}

.feature-card {
  height: 100%;
}

.feature-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #303133;
}

.feature-content {
  padding: 10px 0;
}

.unit {
  margin-left: 8px;
  color: #909399;
}

.monitoring-card {
  margin-bottom: 20px;
}

.status-item {
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 10px;
}

.status-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}

.status-icon.success {
  background-color: #67c23a;
  color: white;
}

.status-icon.error {
  background-color: #f56c6c;
  color: white;
}

.status-icon.warning {
  background-color: #e6a23c;
  color: white;
}

.status-info h4 {
  margin: 0 0 5px 0;
  font-size: 14px;
  color: #303133;
}

.status-info p {
  margin: 0;
  font-size: 12px;
  color: #909399;
}

:deep(.el-card__header) {
  background-color: #f8f9fa;
  border-bottom: 1px solid #ebeef5;
}

:deep(.el-form-item) {
  margin-bottom: 15px;
}

:deep(.el-button) {
  margin-right: 10px;
}

.info-text {
  color: #909399;
  font-size: 12px;
  font-style: italic;
}
</style>
