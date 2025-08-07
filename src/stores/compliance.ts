import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
import type {
  Regulation,
  Checklist,
  AuditTrail,
  PrivacyEvent,
  ComplianceOverview,
  ComplianceRate,
  RegulationForm,
  ChecklistForm,
} from "@/types/compliance";

export const useComplianceStore = defineStore("compliance", () => {
  // 状态
  const regulations = ref<Regulation[]>([]);
  const checklists = ref<Checklist[]>([]);
  const auditTrails = ref<AuditTrail[]>([]);
  const privacyEvents = ref<PrivacyEvent[]>([]);
  const overview = reactive<ComplianceOverview>({
    totalRegulations: 0,
    completedChecks: 0,
    auditTrails: 0,
    privacyIncidents: 0,
  });
  const complianceRate = reactive<ComplianceRate>({
    regulations: 0,
    checklists: 0,
    privacy: 0,
  });

  // 计算属性
  const activeRegulations = computed(() =>
    regulations.value.filter((r) => r.status === "已生效")
  );

  const completedChecklists = computed(() =>
    checklists.value.filter((c) => c.status === "已完成")
  );

  const overdueChecklists = computed(() =>
    checklists.value.filter((c) => {
      if (c.status === "已完成") return false;
      const dueDate = new Date(c.dueDate);
      const today = new Date();
      return dueDate < today;
    })
  );

  const highPriorityChecklists = computed(() =>
    checklists.value.filter((c) => c.priority === "高" && c.status !== "已完成")
  );

  const recentAuditTrails = computed(() => auditTrails.value.slice(0, 10));

  const unresolvedPrivacyEvents = computed(() =>
    privacyEvents.value.filter((e) => e.status !== "已处理")
  );

  // 方法
  const loadRegulations = async () => {
    // 模拟API调用
    const mockRegulations: Regulation[] = [
      {
        id: 1,
        name: "专利法实施细则",
        version: "2024版",
        updateDate: "2024-01-15",
        status: "已生效",
        publishDate: "2024-01-01",
        effectiveDate: "2024-02-01",
        scope: "全国",
        content:
          "本实施细则根据《中华人民共和国专利法》制定，对专利申请、审查、授权等程序进行详细规定...",
        requirements: ["专利申请程序", "审查标准", "授权条件", "无效宣告程序"],
      },
      {
        id: 2,
        name: "数据安全法",
        version: "2023版",
        updateDate: "2023-12-20",
        status: "已生效",
        publishDate: "2023-12-01",
        effectiveDate: "2023-12-01",
        scope: "全国",
        content:
          "本法旨在保障数据安全，促进数据开发利用，保护个人、组织的合法权益...",
        requirements: ["数据分类分级", "安全保护措施", "风险评估", "应急响应"],
      },
      {
        id: 3,
        name: "个人信息保护法",
        version: "2023版",
        updateDate: "2023-11-15",
        status: "已生效",
        publishDate: "2023-11-01",
        effectiveDate: "2023-11-01",
        scope: "全国",
        content:
          "本法旨在保护个人信息权益，规范个人信息处理活动，促进个人信息合理利用...",
        requirements: ["个人信息处理", "同意机制", "安全措施", "权利保护"],
      },
    ];

    regulations.value = mockRegulations;
    updateOverview();
  };

  const loadChecklists = async () => {
    // 模拟API调用
    const mockChecklists: Checklist[] = [
      {
        id: 1,
        name: "专利申请合规检查",
        category: "专利申请",
        dueDate: "2024-02-15",
        status: "进行中",
        assignee: "张三",
        priority: "高",
        description: "检查专利申请是否符合最新法规要求",
        items: [
          { id: 1, description: "检查申请文件完整性" },
          { id: 2, description: "验证技术方案新颖性" },
          { id: 3, description: "确认权利要求书格式" },
          { id: 4, description: "核实申请人信息" },
        ],
        completedItems: [1, 2],
      },
      {
        id: 2,
        name: "数据安全合规检查",
        category: "数据安全",
        dueDate: "2024-02-20",
        status: "待开始",
        assignee: "李四",
        priority: "中",
        description: "检查数据处理活动是否符合数据安全法要求",
        items: [
          { id: 1, description: "数据分类分级检查" },
          { id: 2, description: "安全保护措施评估" },
          { id: 3, description: "风险评估报告" },
          { id: 4, description: "应急响应预案" },
        ],
        completedItems: [],
      },
    ];

    checklists.value = mockChecklists;
    updateOverview();
  };

  const loadAuditTrails = async () => {
    // 模拟API调用
    const mockAuditTrails: AuditTrail[] = [
      {
        timestamp: "2024-01-15 14:30:25",
        user: "张三",
        action: "查看专利详情",
        resource: "专利P001",
        result: "成功",
      },
      {
        timestamp: "2024-01-15 14:25:10",
        user: "李四",
        action: "修改用户信息",
        resource: "用户管理",
        result: "成功",
      },
      {
        timestamp: "2024-01-15 14:20:15",
        user: "王五",
        action: "导出数据",
        resource: "专利列表",
        result: "失败",
      },
      {
        timestamp: "2024-01-15 14:15:30",
        user: "赵六",
        action: "登录系统",
        resource: "用户认证",
        result: "成功",
      },
    ];

    auditTrails.value = mockAuditTrails;
    updateOverview();
  };

  const loadPrivacyEvents = async () => {
    // 模拟API调用
    const mockPrivacyEvents: PrivacyEvent[] = [
      {
        timestamp: "2024-01-15 10:30:00",
        type: "数据访问",
        description: "用户访问敏感专利信息",
        severity: "低",
        status: "已处理",
      },
      {
        timestamp: "2024-01-14 16:45:00",
        type: "数据泄露",
        description: "检测到异常数据访问模式",
        severity: "中",
        status: "处理中",
      },
      {
        timestamp: "2024-01-13 09:15:00",
        type: "权限变更",
        description: "用户权限级别提升",
        severity: "低",
        status: "已处理",
      },
    ];

    privacyEvents.value = mockPrivacyEvents;
    updateOverview();
  };

  const addRegulation = async (regulationForm: RegulationForm) => {
    const newRegulation: Regulation = {
      id: Date.now(),
      name: regulationForm.name,
      version: regulationForm.version,
      updateDate: new Date().toISOString().split("T")[0],
      status: regulationForm.status as any,
      publishDate: regulationForm.publishDate,
      effectiveDate: regulationForm.effectiveDate,
      scope: regulationForm.scope,
      content: regulationForm.content,
      requirements: regulationForm.requirements.split(",").map((r) => r.trim()),
    };

    regulations.value.unshift(newRegulation);
    updateOverview();
    return newRegulation;
  };

  const updateRegulation = async (
    id: number,
    regulationForm: RegulationForm
  ) => {
    const index = regulations.value.findIndex((r) => r.id === id);
    if (index !== -1) {
      regulations.value[index] = {
        ...regulations.value[index],
        name: regulationForm.name,
        version: regulationForm.version,
        status: regulationForm.status as any,
        publishDate: regulationForm.publishDate,
        effectiveDate: regulationForm.effectiveDate,
        scope: regulationForm.scope,
        content: regulationForm.content,
        requirements: regulationForm.requirements
          .split(",")
          .map((r) => r.trim()),
        updateDate: new Date().toISOString().split("T")[0],
      };
      updateOverview();
      return regulations.value[index];
    }
    throw new Error("法规不存在");
  };

  const addChecklist = async (checklistForm: ChecklistForm) => {
    const items = checklistForm.items
      .split("\n")
      .filter((item) => item.trim())
      .map((item, index) => ({
        id: index + 1,
        description: item.trim(),
      }));

    const newChecklist: Checklist = {
      id: Date.now(),
      name: checklistForm.name,
      category: checklistForm.category,
      dueDate: checklistForm.dueDate,
      status: "待开始",
      assignee: checklistForm.assignee,
      priority: checklistForm.priority as any,
      description: checklistForm.description,
      items,
      completedItems: [],
    };

    checklists.value.unshift(newChecklist);
    updateOverview();
    return newChecklist;
  };

  const updateChecklist = async (id: number, checklistForm: ChecklistForm) => {
    const index = checklists.value.findIndex((c) => c.id === id);
    if (index !== -1) {
      const items = checklistForm.items
        .split("\n")
        .filter((item) => item.trim())
        .map((item, index) => ({
          id: index + 1,
          description: item.trim(),
        }));

      checklists.value[index] = {
        ...checklists.value[index],
        name: checklistForm.name,
        category: checklistForm.category,
        dueDate: checklistForm.dueDate,
        assignee: checklistForm.assignee,
        priority: checklistForm.priority as any,
        description: checklistForm.description,
        items,
      };
      updateOverview();
      return checklists.value[index];
    }
    throw new Error("检查清单不存在");
  };

  const updateChecklistStatus = async (id: number, status: string) => {
    const index = checklists.value.findIndex((c) => c.id === id);
    if (index !== -1) {
      checklists.value[index].status = status as any;
      updateOverview();
      return checklists.value[index];
    }
    throw new Error("检查清单不存在");
  };

  const addAuditTrail = async (auditTrail: Omit<AuditTrail, "timestamp">) => {
    const newAuditTrail: AuditTrail = {
      ...auditTrail,
      timestamp: new Date().toISOString().replace("T", " ").substring(0, 19),
    };

    auditTrails.value.unshift(newAuditTrail);
    updateOverview();
    return newAuditTrail;
  };

  const addPrivacyEvent = async (
    privacyEvent: Omit<PrivacyEvent, "timestamp">
  ) => {
    const newPrivacyEvent: PrivacyEvent = {
      ...privacyEvent,
      timestamp: new Date().toISOString().replace("T", " ").substring(0, 19),
    };

    privacyEvents.value.unshift(newPrivacyEvent);
    updateOverview();
    return newPrivacyEvent;
  };

  const updatePrivacyEventStatus = async (
    timestamp: string,
    status: string
  ) => {
    const index = privacyEvents.value.findIndex(
      (e) => e.timestamp === timestamp
    );
    if (index !== -1) {
      privacyEvents.value[index].status = status as any;
      updateOverview();
      return privacyEvents.value[index];
    }
    throw new Error("隐私事件不存在");
  };

  const clearAuditTrails = async () => {
    auditTrails.value = [];
    updateOverview();
  };

  const updateOverview = () => {
    overview.totalRegulations = regulations.value.length;
    overview.completedChecks = completedChecklists.value.length;
    overview.auditTrails = auditTrails.value.length;
    overview.privacyIncidents = privacyEvents.value.length;

    // 计算合规率
    complianceRate.regulations =
      activeRegulations.value.length > 0
        ? Math.round(
            (activeRegulations.value.length / regulations.value.length) * 100
          )
        : 0;

    complianceRate.checklists =
      checklists.value.length > 0
        ? Math.round(
            (completedChecklists.value.length / checklists.value.length) * 100
          )
        : 0;

    complianceRate.privacy =
      privacyEvents.value.length > 0
        ? Math.round(
            ((privacyEvents.value.length -
              unresolvedPrivacyEvents.value.length) /
              privacyEvents.value.length) *
              100
          )
        : 0;
  };

  const generateComplianceReport = async () => {
    const report = {
      generatedDate: new Date().toISOString(),
      overview,
      complianceRate,
      regulations: regulations.value,
      checklists: checklists.value,
      auditTrails: auditTrails.value.slice(0, 50), // 最近50条
      privacyEvents: privacyEvents.value,
      recommendations: [
        "定期更新法规跟踪",
        "及时完成检查清单",
        "加强数据隐私保护",
        "完善审计痕迹记录",
      ],
    };

    return report;
  };

  return {
    // 状态
    regulations,
    checklists,
    auditTrails,
    privacyEvents,
    overview,
    complianceRate,

    // 计算属性
    activeRegulations,
    completedChecklists,
    overdueChecklists,
    highPriorityChecklists,
    recentAuditTrails,
    unresolvedPrivacyEvents,

    // 方法
    loadRegulations,
    loadChecklists,
    loadAuditTrails,
    loadPrivacyEvents,
    addRegulation,
    updateRegulation,
    addChecklist,
    updateChecklist,
    updateChecklistStatus,
    addAuditTrail,
    addPrivacyEvent,
    updatePrivacyEventStatus,
    clearAuditTrails,
    updateOverview,
    generateComplianceReport,
  };
});
