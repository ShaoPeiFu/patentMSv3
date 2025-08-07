// 合规管理相关类型定义

export interface Regulation {
  id: number;
  name: string;
  version: string;
  updateDate: string;
  status: "已生效" | "即将生效" | "已废止";
  publishDate: string;
  effectiveDate: string;
  scope: string;
  content: string;
  requirements: string[];
}

export interface Checklist {
  id: number;
  name: string;
  category: string;
  dueDate: string;
  status: "已完成" | "进行中" | "待开始" | "已逾期";
  assignee: string;
  priority: "高" | "中" | "低";
  description: string;
  items: ChecklistItem[];
  completedItems: number[];
}

export interface ChecklistItem {
  id: number;
  description: string;
}

export interface AuditTrail {
  timestamp: string;
  user: string;
  action: string;
  resource: string;
  result: "成功" | "失败";
}

export interface PrivacyEvent {
  timestamp: string;
  type: string;
  description: string;
  severity: "高" | "中" | "低";
  status: "已处理" | "处理中" | "待处理";
}

export interface ComplianceOverview {
  totalRegulations: number;
  completedChecks: number;
  auditTrails: number;
  privacyIncidents: number;
}

export interface ComplianceRate {
  regulations: number;
  checklists: number;
  privacy: number;
}

export interface RegulationForm {
  name: string;
  version: string;
  publishDate: string;
  effectiveDate: string;
  status: string;
  scope: string;
  content: string;
  requirements: string;
}

export interface ChecklistForm {
  name: string;
  category: string;
  dueDate: string;
  assignee: string;
  priority: string;
  description: string;
  items: string;
}

// 合规检查类别
export const COMPLIANCE_CATEGORIES = [
  "专利申请",
  "数据安全",
  "隐私保护",
  "系统安全",
  "合同管理",
  "费用管理",
  "期限管理",
] as const;

// 法规状态
export const REGULATION_STATUSES = ["已生效", "即将生效", "已废止"] as const;

// 检查清单状态
export const CHECKLIST_STATUSES = [
  "已完成",
  "进行中",
  "待开始",
  "已逾期",
] as const;

// 优先级
export const PRIORITIES = ["高", "中", "低"] as const;

// 严重程度
export const SEVERITY_LEVELS = ["高", "中", "低"] as const;
