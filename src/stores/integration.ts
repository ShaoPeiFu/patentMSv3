import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useActivityStore } from "./activity";
import type {
  PatentOfficeConfig,
  EmailConfig,
  ThirdPartyDatabase,
  ErpConfig,
  IntegrationStatus,
  SyncTask,
  IntegrationLog,
  IntegrationStatistics,
  PatentOfficeResponse,
  EmailMessage,
  DatabaseSyncLog,
  ErpSyncMapping,
} from "@/types/integration";

export const useIntegrationStore = defineStore("integration", () => {
  // 状态
  const patentOfficeConfigs = ref<PatentOfficeConfig[]>([]);
  const emailConfigs = ref<EmailConfig[]>([]);
  const databaseConfigs = ref<ThirdPartyDatabase[]>([]);
  const erpConfigs = ref<ErpConfig[]>([]);
  const integrationStatuses = ref<IntegrationStatus[]>([]);
  const syncTasks = ref<SyncTask[]>([]);
  const integrationLogs = ref<IntegrationLog[]>([]);
  const emailMessages = ref<EmailMessage[]>([]);
  const databaseSyncLogs = ref<DatabaseSyncLog[]>([]);
  const erpSyncMappings = ref<ErpSyncMapping[]>([]);

  const activityStore = useActivityStore();

  // 计算属性
  const activePatentOfficeConfigs = computed(() =>
    patentOfficeConfigs.value.filter((config) => config.enabled)
  );

  const activeEmailConfigs = computed(() =>
    emailConfigs.value.filter((config) => config.enabled)
  );

  const activeDatabaseConfigs = computed(() =>
    databaseConfigs.value.filter((config) => config.enabled)
  );

  const activeErpConfigs = computed(() =>
    erpConfigs.value.filter((config) => config.enabled)
  );

  const integrationStatistics = computed((): IntegrationStatistics => {
    const totalConfigs =
      patentOfficeConfigs.value.length +
      emailConfigs.value.length +
      databaseConfigs.value.length +
      erpConfigs.value.length;

    const activeConfigs =
      activePatentOfficeConfigs.value.length +
      activeEmailConfigs.value.length +
      activeDatabaseConfigs.value.length +
      activeErpConfigs.value.length;

    const failedConfigs = integrationStatuses.value.filter(
      (status) => status.status === "error"
    ).length;

    const averageResponseTime =
      integrationStatuses.value.length > 0
        ? integrationStatuses.value.reduce(
            (sum, status) => sum + status.responseTime,
            0
          ) / integrationStatuses.value.length
        : 0;

    const successRate =
      integrationStatuses.value.length > 0
        ? integrationStatuses.value.reduce(
            (sum, status) => sum + status.successRate,
            0
          ) / integrationStatuses.value.length
        : 0;

    const today = new Date().toISOString().split("T")[0];
    const syncTasksToday = syncTasks.value.filter((task) =>
      task.createdAt.startsWith(today)
    ).length;

    const errorCountToday = integrationLogs.value.filter(
      (log) => log.level === "error" && log.timestamp.startsWith(today)
    ).length;

    return {
      totalConfigs,
      activeConfigs,
      failedConfigs,
      averageResponseTime,
      successRate,
      lastSyncTime: new Date().toISOString(),
      syncTasksToday,
      errorCountToday,
    };
  });

  // 从localStorage加载数据
  const loadFromStorage = () => {
    const storedPatentOffice = localStorage.getItem(
      "integration_patent_office"
    );
    const storedEmail = localStorage.getItem("integration_email");
    const storedDatabase = localStorage.getItem("integration_database");
    const storedErp = localStorage.getItem("integration_erp");
    const storedStatuses = localStorage.getItem("integration_statuses");
    const storedTasks = localStorage.getItem("integration_tasks");
    const storedLogs = localStorage.getItem("integration_logs");
    const storedMessages = localStorage.getItem("integration_messages");
    const storedSyncLogs = localStorage.getItem("integration_sync_logs");
    const storedMappings = localStorage.getItem("integration_mappings");

    if (storedPatentOffice) {
      patentOfficeConfigs.value = JSON.parse(storedPatentOffice);
    }
    if (storedEmail) {
      emailConfigs.value = JSON.parse(storedEmail);
    }
    if (storedDatabase) {
      databaseConfigs.value = JSON.parse(storedDatabase);
    }
    if (storedErp) {
      erpConfigs.value = JSON.parse(storedErp);
    }
    if (storedStatuses) {
      integrationStatuses.value = JSON.parse(storedStatuses);
    }
    if (storedTasks) {
      syncTasks.value = JSON.parse(storedTasks);
    }
    if (storedLogs) {
      integrationLogs.value = JSON.parse(storedLogs);
    }
    if (storedMessages) {
      emailMessages.value = JSON.parse(storedMessages);
    }
    if (storedSyncLogs) {
      databaseSyncLogs.value = JSON.parse(storedSyncLogs);
    }
    if (storedMappings) {
      erpSyncMappings.value = JSON.parse(storedMappings);
    }
  };

  // 保存数据到localStorage
  const saveToStorage = () => {
    localStorage.setItem(
      "integration_patent_office",
      JSON.stringify(patentOfficeConfigs.value)
    );
    localStorage.setItem(
      "integration_email",
      JSON.stringify(emailConfigs.value)
    );
    localStorage.setItem(
      "integration_database",
      JSON.stringify(databaseConfigs.value)
    );
    localStorage.setItem("integration_erp", JSON.stringify(erpConfigs.value));
    localStorage.setItem(
      "integration_statuses",
      JSON.stringify(integrationStatuses.value)
    );
    localStorage.setItem("integration_tasks", JSON.stringify(syncTasks.value));
    localStorage.setItem(
      "integration_logs",
      JSON.stringify(integrationLogs.value)
    );
    localStorage.setItem(
      "integration_messages",
      JSON.stringify(emailMessages.value)
    );
    localStorage.setItem(
      "integration_sync_logs",
      JSON.stringify(databaseSyncLogs.value)
    );
    localStorage.setItem(
      "integration_mappings",
      JSON.stringify(erpSyncMappings.value)
    );
  };

  // 专利局API相关方法
  const addPatentOfficeConfig = async (
    config: Omit<PatentOfficeConfig, "id" | "createdAt" | "updatedAt">
  ) => {
    const newConfig: PatentOfficeConfig = {
      ...config,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    patentOfficeConfigs.value.push(newConfig);
    saveToStorage();

    // 记录活动
    activityStore.addActivity({
      type: "patent_add",
      title: "专利局API配置",
      description: `添加了${config.name}配置`,
      userId: 1,
      userName: "系统管理员",
      targetId: newConfig.id,
      targetName: config.name,
      status: "success",
      statusText: "已添加",
    });

    return newConfig;
  };

  const updatePatentOfficeConfig = async (
    id: number,
    updates: Partial<PatentOfficeConfig>
  ) => {
    const index = patentOfficeConfigs.value.findIndex(
      (config) => config.id === id
    );
    if (index !== -1) {
      patentOfficeConfigs.value[index] = {
        ...patentOfficeConfigs.value[index],
        ...updates,
        updatedAt: new Date().toISOString(),
      };
      saveToStorage();
      return patentOfficeConfigs.value[index];
    }
    throw new Error("配置不存在");
  };

  const deletePatentOfficeConfig = async (id: number) => {
    const index = patentOfficeConfigs.value.findIndex(
      (config) => config.id === id
    );
    if (index !== -1) {
      const config = patentOfficeConfigs.value[index];
      patentOfficeConfigs.value.splice(index, 1);
      saveToStorage();

      // 记录活动
      activityStore.addActivity({
        type: "patent_expire",
        title: "专利局API配置",
        description: `删除了${config.name}配置`,
        userId: 1,
        userName: "系统管理员",
        targetId: config.id,
        targetName: config.name,
        status: "warning",
        statusText: "已删除",
      });

      return true;
    }
    return false;
  };

  // 邮件系统相关方法
  const addEmailConfig = async (
    config: Omit<EmailConfig, "id" | "createdAt" | "updatedAt">
  ) => {
    const newConfig: EmailConfig = {
      ...config,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    emailConfigs.value.push(newConfig);
    saveToStorage();

    // 记录活动
    activityStore.addActivity({
      type: "document_upload",
      title: "邮件系统配置",
      description: `添加了${config.name}邮件配置`,
      userId: 1,
      userName: "系统管理员",
      targetId: newConfig.id,
      targetName: config.name,
      status: "success",
      statusText: "已添加",
    });

    return newConfig;
  };

  const sendEmail = async (message: Omit<EmailMessage, "id" | "createdAt">) => {
    const newMessage: EmailMessage = {
      ...message,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    emailMessages.value.push(newMessage);
    saveToStorage();

    // 模拟发送邮件
    await new Promise((resolve) => setTimeout(resolve, 1000));
    newMessage.status = "sent";
    newMessage.sentAt = new Date().toISOString();
    saveToStorage();

    return newMessage;
  };

  // 第三方数据库相关方法
  const addDatabaseConfig = async (
    config: Omit<ThirdPartyDatabase, "id" | "createdAt" | "updatedAt">
  ) => {
    const newConfig: ThirdPartyDatabase = {
      ...config,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    databaseConfigs.value.push(newConfig);
    saveToStorage();

    // 记录活动
    activityStore.addActivity({
      type: "document_upload",
      title: "数据库配置",
      description: `添加了${config.name}数据库配置`,
      userId: 1,
      userName: "系统管理员",
      targetId: newConfig.id,
      targetName: config.name,
      status: "success",
      statusText: "已添加",
    });

    return newConfig;
  };

  const syncDatabase = async (
    databaseId: number,
    syncType: "import" | "export"
  ) => {
    const database = databaseConfigs.value.find((db) => db.id === databaseId);
    if (!database) throw new Error("数据库配置不存在");

    const syncLog: DatabaseSyncLog = {
      id: Date.now(),
      databaseId,
      syncType,
      tableName: "patents",
      recordCount: Math.floor(Math.random() * 1000) + 100,
      success: true,
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      duration: Math.floor(Math.random() * 5000) + 1000,
    };

    databaseSyncLogs.value.push(syncLog);
    saveToStorage();

    return syncLog;
  };

  // 企业ERP相关方法
  const addErpConfig = async (
    config: Omit<ErpConfig, "id" | "createdAt" | "updatedAt">
  ) => {
    const newConfig: ErpConfig = {
      ...config,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    erpConfigs.value.push(newConfig);
    saveToStorage();

    // 记录活动
    activityStore.addActivity({
      type: "workflow_start",
      title: "ERP系统配置",
      description: `添加了${config.name}ERP配置`,
      userId: 1,
      userName: "系统管理员",
      targetId: newConfig.id,
      targetName: config.name,
      status: "success",
      statusText: "已添加",
    });

    return newConfig;
  };

  const addErpSyncMapping = async (
    mapping: Omit<ErpSyncMapping, "id" | "createdAt" | "updatedAt">
  ) => {
    const newMapping: ErpSyncMapping = {
      ...mapping,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    erpSyncMappings.value.push(newMapping);
    saveToStorage();

    return newMapping;
  };

  // 同步任务相关方法
  const createSyncTask = async (type: SyncTask["type"], configId: number) => {
    const task: SyncTask = {
      id: Date.now(),
      type,
      configId,
      status: "pending",
      progress: 0,
      recordsProcessed: 0,
      recordsTotal: 0,
      createdAt: new Date().toISOString(),
    };

    syncTasks.value.push(task);
    saveToStorage();

    return task;
  };

  const updateSyncTask = async (taskId: number, updates: Partial<SyncTask>) => {
    const index = syncTasks.value.findIndex((task) => task.id === taskId);
    if (index !== -1) {
      syncTasks.value[index] = { ...syncTasks.value[index], ...updates };
      saveToStorage();
      return syncTasks.value[index];
    }
    throw new Error("同步任务不存在");
  };

  // 集成日志相关方法
  const addIntegrationLog = async (
    type: IntegrationLog["type"],
    configId: number,
    level: IntegrationLog["level"],
    message: string,
    details?: any
  ) => {
    const log: IntegrationLog = {
      id: Date.now(),
      type,
      configId,
      level,
      message,
      details,
      timestamp: new Date().toISOString(),
    };

    integrationLogs.value.push(log);
    saveToStorage();

    return log;
  };

  // 集成状态相关方法
  const updateIntegrationStatus = async (
    type: IntegrationStatus["type"],
    configId: number,
    status: IntegrationStatus["status"],
    responseTime: number,
    successRate: number,
    message?: string
  ) => {
    const existingIndex = integrationStatuses.value.findIndex(
      (s) => s.type === type && s.configId === configId
    );

    const statusUpdate: IntegrationStatus = {
      id:
        existingIndex !== -1
          ? integrationStatuses.value[existingIndex].id
          : Date.now(),
      type,
      configId,
      status,
      lastCheckTime: new Date().toISOString(),
      errorCount:
        existingIndex !== -1
          ? integrationStatuses.value[existingIndex].errorCount
          : 0,
      successRate,
      responseTime,
      message,
    };

    if (existingIndex !== -1) {
      integrationStatuses.value[existingIndex] = statusUpdate;
    } else {
      integrationStatuses.value.push(statusUpdate);
    }

    saveToStorage();
    return statusUpdate;
  };

  // 测试连接
  const testConnection = async (
    type: "patent_office" | "email" | "database" | "erp",
    configId: number
  ) => {
    // 模拟测试连接
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const success = Math.random() > 0.2; // 80%成功率
    const responseTime = Math.floor(Math.random() * 1000) + 100;

    await updateIntegrationStatus(
      type,
      configId,
      success ? "connected" : "error",
      responseTime,
      success ? 100 : 0,
      success ? "连接成功" : "连接失败"
    );

    await addIntegrationLog(
      type,
      configId,
      success ? "info" : "error",
      success ? "连接测试成功" : "连接测试失败",
      { responseTime, success }
    );

    return success;
  };

  // 初始化示例数据
  const initializeSampleData = () => {
    if (patentOfficeConfigs.value.length === 0) {
      const samplePatentOfficeConfigs: Omit<
        PatentOfficeConfig,
        "id" | "createdAt" | "updatedAt"
      >[] = [
        {
          office: "CNIPA",
          name: "中国专利局API",
          baseUrl: "https://api.cnipa.gov.cn",
          apiKey: "sample_api_key_1",
          secretKey: "sample_secret_key_1",
          status: "connected",
          syncInterval: 30,
          enabled: true,
        },
        {
          office: "USPTO",
          name: "美国专利局API",
          baseUrl: "https://api.uspto.gov",
          apiKey: "sample_api_key_2",
          secretKey: "sample_secret_key_2",
          status: "connected",
          syncInterval: 60,
          enabled: true,
        },
      ];

      samplePatentOfficeConfigs.forEach((config) => {
        addPatentOfficeConfig(config);
      });
    }

    if (emailConfigs.value.length === 0) {
      const sampleEmailConfigs: Omit<
        EmailConfig,
        "id" | "createdAt" | "updatedAt"
      >[] = [
        {
          provider: "smtp",
          host: "smtp.sina.com",
          port: 587,
          username: "patent@sina.com",
          password: "sample_password",
          encryption: "tls",
          enabled: true,
          status: "connected",
        },
      ];

      sampleEmailConfigs.forEach((config) => {
        addEmailConfig(config);
      });
    }

    if (databaseConfigs.value.length === 0) {
      const sampleDatabaseConfigs: Omit<
        ThirdPartyDatabase,
        "id" | "createdAt" | "updatedAt"
      >[] = [
        {
          name: "专利数据库",
          type: "mysql",
          host: "localhost",
          port: 3306,
          database: "patent_db",
          username: "patent_user",
          password: "sample_password",
          syncDirection: "import",
          syncTables: ["patents", "applications", "status"],
          syncInterval: 15,
          enabled: true,
          status: "connected",
        },
      ];

      sampleDatabaseConfigs.forEach((config) => {
        addDatabaseConfig(config);
      });
    }

    if (erpConfigs.value.length === 0) {
      const sampleErpConfigs: Omit<
        ErpConfig,
        "id" | "createdAt" | "updatedAt"
      >[] = [
        {
          system: "sap",
          name: "SAP ERP系统",
          baseUrl: "https://erp.company.com",
          apiEndpoint: "/api/v1",
          username: "erp_user",
          password: "sample_password",
          modules: ["finance", "hr", "procurement"],
          enabled: true,
          status: "connected",
        },
      ];

      sampleErpConfigs.forEach((config) => {
        addErpConfig(config);
      });
    }
  };

  // 初始化
  loadFromStorage();
  initializeSampleData();

  return {
    // 状态
    patentOfficeConfigs,
    emailConfigs,
    databaseConfigs,
    erpConfigs,
    integrationStatuses,
    syncTasks,
    integrationLogs,
    emailMessages,
    databaseSyncLogs,
    erpSyncMappings,

    // 计算属性
    activePatentOfficeConfigs,
    activeEmailConfigs,
    activeDatabaseConfigs,
    activeErpConfigs,
    integrationStatistics,

    // 方法
    addPatentOfficeConfig,
    updatePatentOfficeConfig,
    deletePatentOfficeConfig,
    addEmailConfig,
    sendEmail,
    addDatabaseConfig,
    syncDatabase,
    addErpConfig,
    addErpSyncMapping,
    createSyncTask,
    updateSyncTask,
    addIntegrationLog,
    updateIntegrationStatus,
    testConnection,
    loadFromStorage,
    saveToStorage,
    initializeSampleData,
  };
});
