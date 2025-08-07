// 外部系统集成相关类型定义

// 专利局API类型
export type PatentOffice = "CNIPA" | "USPTO" | "EPO" | "JPO" | "KIPO";
export type ApiStatus = "connected" | "disconnected" | "error" | "maintenance";

export interface PatentOfficeConfig {
  id: number;
  office: PatentOffice;
  name: string;
  baseUrl: string;
  apiKey: string;
  secretKey: string;
  status: ApiStatus;
  lastSyncTime?: string;
  syncInterval: number; // 同步间隔（分钟）
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PatentOfficeResponse {
  success: boolean;
  data?: any;
  error?: string;
  timestamp: string;
  requestId: string;
}

// 邮件系统类型
export type EmailProvider = "smtp" | "imap" | "exchange" | "gmail" | "outlook";
export type EmailStatus = "sent" | "failed" | "pending" | "delivered";

export interface EmailConfig {
  id: number;
  name: string;
  provider: EmailProvider;
  host: string;
  port: number;
  username: string;
  password: string;
  encryption: "none" | "ssl" | "tls";
  enabled: boolean;
  status: ApiStatus;
  lastTestTime?: string;
  createdAt: string;
  updatedAt: string;
}

export interface EmailTemplate {
  id: number;
  name: string;
  subject: string;
  content: string;
  variables: string[];
  type: "notification" | "reminder" | "report" | "custom";
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface EmailMessage {
  id: number;
  to: string[];
  cc?: string[];
  bcc?: string[];
  subject: string;
  content: string;
  attachments?: string[];
  templateId?: number;
  status: EmailStatus;
  sentAt?: string;
  deliveredAt?: string;
  errorMessage?: string;
  createdAt: string;
}

// 第三方数据库类型
export type DatabaseType =
  | "mysql"
  | "postgresql"
  | "oracle"
  | "sqlserver"
  | "mongodb";
export type SyncDirection = "import" | "export" | "bidirectional";

export interface ThirdPartyDatabase {
  id: number;
  name: string;
  type: DatabaseType;
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  syncDirection: SyncDirection;
  syncTables: string[];
  syncInterval: number;
  enabled: boolean;
  status: ApiStatus;
  lastSyncTime?: string;
  createdAt: string;
  updatedAt: string;
}

export interface DatabaseSyncLog {
  id: number;
  databaseId: number;
  syncType: "import" | "export";
  tableName: string;
  recordCount: number;
  success: boolean;
  errorMessage?: string;
  startTime: string;
  endTime: string;
  duration: number; // 毫秒
}

// 企业ERP类型
export type ErpSystem =
  | "sap"
  | "oracle"
  | "sap_business_one"
  | "netsuite"
  | "dynamics";
export type ErpModule =
  | "finance"
  | "hr"
  | "inventory"
  | "procurement"
  | "project";

export interface ErpConfig {
  id: number;
  system: ErpSystem;
  name: string;
  baseUrl: string;
  apiEndpoint: string;
  username: string;
  password: string;
  modules: ErpModule[];
  enabled: boolean;
  status: ApiStatus;
  lastSyncTime?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ErpSyncMapping {
  id: number;
  erpConfigId: number;
  localTable: string;
  erpTable: string;
  fieldMappings: Record<string, string>;
  syncDirection: SyncDirection;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
}

// 集成状态类型
export interface IntegrationStatus {
  id: number;
  type: "patent_office" | "email" | "database" | "erp";
  configId: number;
  status: ApiStatus;
  lastCheckTime: string;
  errorCount: number;
  successRate: number;
  responseTime: number; // 毫秒
  message?: string;
}

// 同步任务类型
export interface SyncTask {
  id: number;
  type: "patent_office" | "email" | "database" | "erp";
  configId: number;
  status: "pending" | "running" | "completed" | "failed";
  progress: number; // 0-100
  startTime?: string;
  endTime?: string;
  errorMessage?: string;
  recordsProcessed: number;
  recordsTotal: number;
  createdAt: string;
}

// 集成日志类型
export interface IntegrationLog {
  id: number;
  type: "patent_office" | "email" | "database" | "erp";
  configId: number;
  level: "info" | "warning" | "error";
  message: string;
  details?: any;
  timestamp: string;
}

// 查询条件类型
export interface IntegrationQueryCondition {
  type?: "patent_office" | "email" | "database" | "erp";
  status?: ApiStatus;
  enabled?: boolean;
  startDate?: string;
  endDate?: string;
  keyword?: string;
}

// 统计数据类型
export interface IntegrationStatistics {
  totalConfigs: number;
  activeConfigs: number;
  failedConfigs: number;
  averageResponseTime: number;
  successRate: number;
  lastSyncTime: string;
  syncTasksToday: number;
  errorCountToday: number;
}

// 导出选项类型
export interface IntegrationExportOptions {
  format: "pdf" | "excel" | "csv";
  includeLogs: boolean;
  dateRange?: { start: string; end: string };
  filters?: IntegrationQueryCondition;
}
