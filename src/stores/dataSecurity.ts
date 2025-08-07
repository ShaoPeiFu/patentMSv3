import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
import {
  CryptoUtils,
  LoggingUtils,
  BackupUtils,
  SecurityMonitor,
  initializeSecurity as initSecurity,
} from "@/utils/security";

// 数据安全配置接口
export interface EncryptionSettings {
  algorithm: "aes256" | "rsa2048" | "chacha20";
  keyRotationDays: number;
  sensitiveDataEncryption: boolean;
  lastKeyRotation: string;
  encryptionStatus: "enabled" | "disabled" | "error";
}

export interface LoggingSettings {
  level: "debug" | "info" | "warn" | "error";
  retentionDays: number;
  realTimeMonitoring: boolean;
  logFileSize: number;
  logLocation: string;
}

export interface BackupSettings {
  frequency: "daily" | "weekly" | "monthly";
  location: "local" | "cloud" | "hybrid";
  incrementalBackup: boolean;
  lastBackup: string;
  nextBackup: string;
  backupSize: number;
  compressionEnabled: boolean;
}

export interface RecoverySettings {
  rtoHours: number;
  rpoMinutes: number;
  autoRecovery: boolean;
  recoveryPoint: string;
  testLastRun: string;
  testStatus: "success" | "failed" | "pending";
}

export interface SecurityStatus {
  encryption: boolean;
  logging: boolean;
  backup: boolean;
  recovery: boolean;
  lastCheck: string;
  overallStatus: "healthy" | "warning" | "critical";
}

export interface SecurityEvent {
  id: string;
  timestamp: string;
  type: "encryption" | "backup" | "recovery" | "access" | "error";
  severity: "low" | "medium" | "high" | "critical";
  description: string;
  user?: string;
  ip?: string;
  resolved: boolean;
}

export const useDataSecurityStore = defineStore("dataSecurity", () => {
  // 状态
  const encryptionSettings = reactive<EncryptionSettings>({
    algorithm: "aes256",
    keyRotationDays: 90,
    sensitiveDataEncryption: true,
    lastKeyRotation: new Date().toISOString(),
    encryptionStatus: "enabled",
  });

  const loggingSettings = reactive<LoggingSettings>({
    level: "info",
    retentionDays: 365,
    realTimeMonitoring: true,
    logFileSize: 100,
    logLocation: "/logs/security/",
  });

  const backupSettings = reactive<BackupSettings>({
    frequency: "daily",
    location: "hybrid",
    incrementalBackup: true,
    lastBackup: new Date().toISOString(),
    nextBackup: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    backupSize: 0,
    compressionEnabled: true,
  });

  const recoverySettings = reactive<RecoverySettings>({
    rtoHours: 4,
    rpoMinutes: 60,
    autoRecovery: true,
    recoveryPoint: new Date().toISOString(),
    testLastRun: "",
    testStatus: "pending",
  });

  const securityStatus = reactive<SecurityStatus>({
    encryption: true,
    logging: true,
    backup: true,
    recovery: true,
    lastCheck: new Date().toISOString(),
    overallStatus: "healthy",
  });

  const securityEvents = ref<SecurityEvent[]>([]);
  const isBackupRunning = ref(false);
  const isRecoveryTesting = ref(false);

  // 计算属性
  const overallSecurityHealth = computed(() => {
    const checks = [
      securityStatus.encryption,
      securityStatus.logging,
      securityStatus.backup,
      securityStatus.recovery,
    ];
    const healthyCount = checks.filter(Boolean).length;

    if (healthyCount === checks.length) return "healthy";
    if (healthyCount >= 2) return "warning";
    return "critical";
  });

  const nextBackupTime = computed(() => {
    return new Date(backupSettings.nextBackup);
  });

  const daysUntilKeyRotation = computed(() => {
    const lastRotation = new Date(encryptionSettings.lastKeyRotation);
    const nextRotation = new Date(
      lastRotation.getTime() +
        encryptionSettings.keyRotationDays * 24 * 60 * 60 * 1000
    );
    const now = new Date();
    const diffTime = nextRotation.getTime() - now.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  });

  // 方法
  const updateEncryptionSettings = async (
    settings: Partial<EncryptionSettings>
  ) => {
    try {
      // 记录操作
      LoggingUtils.log("info", "更新加密设置", settings);

      Object.assign(encryptionSettings, settings);

      // 记录安全事件
      SecurityMonitor.addEvent("encryption", "medium", "加密设置已更新");

      // 如果启用了敏感数据加密，测试加密功能
      if (settings.sensitiveDataEncryption) {
        try {
          const testKey = await CryptoUtils.generateKey();
          const testData = "测试敏感数据";
          const encrypted = await CryptoUtils.encrypt(testData, testKey);
          const decrypted = await CryptoUtils.decrypt(encrypted, testKey);

          if (decrypted === testData) {
            LoggingUtils.log("info", "加密功能测试成功");
          } else {
            throw new Error("加密功能测试失败");
          }
        } catch (error) {
          LoggingUtils.log("error", "加密功能测试失败", error);
          encryptionSettings.encryptionStatus = "error";
        }
      }

      return true;
    } catch (error) {
      LoggingUtils.log("error", "更新加密设置失败", error);
      SecurityMonitor.addEvent("error", "high", "加密设置更新失败");
      return false;
    }
  };

  const updateLoggingSettings = async (settings: Partial<LoggingSettings>) => {
    try {
      LoggingUtils.log("info", "更新日志设置", settings);

      Object.assign(loggingSettings, settings);

      SecurityMonitor.addEvent("access", "low", "日志设置已更新");

      return true;
    } catch (error) {
      LoggingUtils.log("error", "更新日志设置失败", error);
      return false;
    }
  };

  const updateBackupSettings = async (settings: Partial<BackupSettings>) => {
    try {
      LoggingUtils.log("info", "更新备份设置", settings);

      Object.assign(backupSettings, settings);

      // 重新计算下次备份时间
      calculateNextBackupTime();

      SecurityMonitor.addEvent("backup", "medium", "备份设置已更新");

      return true;
    } catch (error) {
      LoggingUtils.log("error", "更新备份设置失败", error);
      return false;
    }
  };

  const updateRecoverySettings = async (
    settings: Partial<RecoverySettings>
  ) => {
    try {
      LoggingUtils.log("info", "更新恢复设置", settings);

      Object.assign(recoverySettings, settings);

      SecurityMonitor.addEvent("recovery", "medium", "恢复设置已更新");

      return true;
    } catch (error) {
      LoggingUtils.log("error", "更新恢复设置失败", error);
      return false;
    }
  };

  const triggerManualBackup = async () => {
    if (isBackupRunning.value) {
      throw new Error("备份正在进行中");
    }

    try {
      isBackupRunning.value = true;

      SecurityMonitor.addEvent("backup", "medium", "手动备份已启动");

      // 准备备份数据
      const backupData = {
        settings: {
          encryption: encryptionSettings,
          logging: loggingSettings,
          backup: backupSettings,
          recovery: recoverySettings,
        },
        logs: LoggingUtils.getLogs(),
        events: SecurityMonitor.getEvents(),
        timestamp: new Date().toISOString(),
      };

      // 创建备份
      const backupId = await BackupUtils.createBackup(backupData, "手动备份");

      // 更新备份信息
      backupSettings.lastBackup = new Date().toISOString();
      backupSettings.backupSize = JSON.stringify(backupData).length;
      calculateNextBackupTime();

      SecurityMonitor.addEvent("backup", "low", "手动备份已完成");

      return true;
    } catch (error) {
      SecurityMonitor.addEvent("error", "high", "备份失败: " + error);
      throw error;
    } finally {
      isBackupRunning.value = false;
    }
  };

  const testRecoveryPlan = async () => {
    if (isRecoveryTesting.value) {
      throw new Error("恢复测试正在进行中");
    }

    try {
      isRecoveryTesting.value = true;
      recoverySettings.testStatus = "pending";

      SecurityMonitor.addEvent("recovery", "medium", "灾难恢复计划测试已启动");

      // 获取备份列表
      const backupList = BackupUtils.getBackupList();

      if (backupList.length === 0) {
        throw new Error("没有可用的备份进行恢复测试");
      }

      // 选择最新的备份进行测试
      const latestBackup = backupList[0];

      // 模拟恢复测试过程
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // 尝试恢复备份
      try {
        await BackupUtils.restoreBackup(latestBackup.id);

        // 模拟测试结果
        const success = Math.random() > 0.1; // 90%成功率
        recoverySettings.testStatus = success ? "success" : "failed";
        recoverySettings.testLastRun = new Date().toISOString();

        SecurityMonitor.addEvent(
          "recovery",
          success ? "low" : "high",
          success ? "恢复计划测试成功" : "恢复计划测试失败"
        );

        return success;
      } catch (error) {
        recoverySettings.testStatus = "failed";
        SecurityMonitor.addEvent("error", "critical", "恢复测试失败: " + error);
        throw error;
      }
    } catch (error) {
      recoverySettings.testStatus = "failed";
      SecurityMonitor.addEvent("error", "critical", "恢复测试异常: " + error);
      throw error;
    } finally {
      isRecoveryTesting.value = false;
    }
  };

  const addSecurityEvent = (
    event: Omit<SecurityEvent, "id" | "timestamp" | "resolved">
  ) => {
    const newEvent: SecurityEvent = {
      id: `event-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      resolved: false,
      ...event,
    };

    securityEvents.value.unshift(newEvent);

    // 保持最近1000条记录
    if (securityEvents.value.length > 1000) {
      securityEvents.value = securityEvents.value.slice(0, 1000);
    }
  };

  const calculateNextBackupTime = () => {
    const now = new Date();
    let nextBackup: Date;

    switch (backupSettings.frequency) {
      case "daily":
        nextBackup = new Date(now.getTime() + 24 * 60 * 60 * 1000);
        break;
      case "weekly":
        nextBackup = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
        break;
      case "monthly":
        nextBackup = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
        break;
      default:
        nextBackup = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    }

    backupSettings.nextBackup = nextBackup.toISOString();
  };

  const checkSecurityStatus = async () => {
    try {
      LoggingUtils.log("info", "开始安全检查");

      // 检查加密状态
      securityStatus.encryption =
        encryptionSettings.encryptionStatus === "enabled";

      // 检查日志状态
      securityStatus.logging = loggingSettings.realTimeMonitoring;

      // 检查备份状态
      const backupList = BackupUtils.getBackupList();
      securityStatus.backup = backupList.length > 0 && !isBackupRunning.value;

      // 检查恢复状态
      securityStatus.recovery = recoverySettings.testStatus === "success";

      securityStatus.lastCheck = new Date().toISOString();
      securityStatus.overallStatus = overallSecurityHealth.value;

      LoggingUtils.log("info", "安全检查完成", securityStatus);

      return securityStatus;
    } catch (error) {
      LoggingUtils.log("error", "安全检查失败", error);
      return null;
    }
  };

  const rotateEncryptionKeys = async () => {
    try {
      SecurityMonitor.addEvent("encryption", "high", "加密密钥轮换已启动");

      LoggingUtils.log("info", "开始轮换加密密钥");

      // 生成新密钥
      const newKey = await CryptoUtils.generateKey();

      // 模拟密钥轮换过程
      await new Promise((resolve) => setTimeout(resolve, 2000));

      encryptionSettings.lastKeyRotation = new Date().toISOString();

      SecurityMonitor.addEvent("encryption", "medium", "加密密钥轮换已完成");
      LoggingUtils.log("info", "加密密钥轮换完成");

      return true;
    } catch (error) {
      SecurityMonitor.addEvent(
        "error",
        "critical",
        "加密密钥轮换失败: " + error
      );
      LoggingUtils.log("error", "加密密钥轮换失败", error);
      throw error;
    }
  };

  const getSecurityReport = () => {
    const securityStats = SecurityMonitor.getSecurityStats();

    return {
      encryption: {
        algorithm: encryptionSettings.algorithm,
        status: encryptionSettings.encryptionStatus,
        lastRotation: encryptionSettings.lastKeyRotation,
        daysUntilRotation: daysUntilKeyRotation.value,
      },
      logging: {
        level: loggingSettings.level,
        retentionDays: loggingSettings.retentionDays,
        realTimeMonitoring: loggingSettings.realTimeMonitoring,
        totalLogs: LoggingUtils.getLogs().length,
      },
      backup: {
        frequency: backupSettings.frequency,
        location: backupSettings.location,
        lastBackup: backupSettings.lastBackup,
        nextBackup: backupSettings.nextBackup,
        size: backupSettings.backupSize,
        totalBackups: BackupUtils.getBackupList().length,
      },
      recovery: {
        rto: recoverySettings.rtoHours,
        rpo: recoverySettings.rpoMinutes,
        lastTest: recoverySettings.testLastRun,
        testStatus: recoverySettings.testStatus,
      },
      overall: {
        status: securityStatus.overallStatus,
        lastCheck: securityStatus.lastCheck,
        eventsCount: securityStats.totalEvents,
        criticalEvents: securityStats.criticalEvents,
        resolvedEvents: securityStats.resolvedEvents,
      },
    };
  };

  // 初始化
  const initializeSecurity = async () => {
    try {
      // 初始化安全模块
      initSecurity();

      await checkSecurityStatus();
      calculateNextBackupTime();

      // 添加初始事件
      SecurityMonitor.addEvent("access", "low", "数据安全管理模块已初始化");
      LoggingUtils.log("info", "数据安全管理模块初始化完成");

      // 同步安全事件
      const securityEvents = SecurityMonitor.getEvents();
      securityEvents.forEach((event) => {
        addSecurityEvent({
          type: event.type as any,
          severity: event.severity,
          description: event.description,
        });
      });
    } catch (error) {
      LoggingUtils.log("error", "初始化数据安全管理失败", error);
    }
  };

  return {
    // 状态
    encryptionSettings,
    loggingSettings,
    backupSettings,
    recoverySettings,
    securityStatus,
    securityEvents,
    isBackupRunning,
    isRecoveryTesting,

    // 计算属性
    overallSecurityHealth,
    nextBackupTime,
    daysUntilKeyRotation,

    // 方法
    updateEncryptionSettings,
    updateLoggingSettings,
    updateBackupSettings,
    updateRecoverySettings,
    triggerManualBackup,
    testRecoveryPlan,
    addSecurityEvent,
    checkSecurityStatus,
    rotateEncryptionKeys,
    getSecurityReport,
    initializeSecurity,
  };
});
