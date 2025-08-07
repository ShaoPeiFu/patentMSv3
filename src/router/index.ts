import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { useUserStore } from "@/stores/user";
import { hasPermission, PERMISSION_MESSAGES } from "@/utils/permissions";
import { ElMessage } from "element-plus";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: { title: "首页" },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
    meta: { title: "登录" },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue"),
    meta: { title: "注册" },
  },
  {
    path: "/test-auth",
    name: "TestAuth",
    component: () => import("@/views/TestAuth.vue"),
    meta: { title: "认证测试" },
  },
  {
    path: "/test-activity",
    name: "TestActivity",
    component: () => import("@/views/TestActivity.vue"),
    meta: { title: "活动测试" },
  },
  {
    path: "/test-patent-edit",
    name: "TestPatentEdit",
    component: () => import("@/views/TestPatentEdit.vue"),
    meta: { title: "专利编辑测试" },
  },

  {
    path: "/test-performance",
    name: "TestPerformance",
    component: () => import("@/views/TestPerformance.vue"),
    meta: { title: "性能测试" },
  },
  {
    path: "/test-electronic-signature",
    name: "TestElectronicSignature",
    component: () => import("@/views/TestElectronicSignature.vue"),
    meta: { title: "电子签名测试" },
  },
  {
    path: "/test-permission",
    name: "TestPermission",
    component: () => import("@/views/TestPermission.vue"),
    meta: { title: "权限测试" },
  },
  {
    path: "/test-download",
    name: "TestDownload",
    component: () => import("@/views/TestDownload.vue"),
    meta: { title: "下载测试" },
  },
  {
    path: "/test-real-file-download",
    name: "TestRealFileDownload",
    component: () => import("@/views/TestRealFileDownload.vue"),
    meta: { title: "真实文件下载测试" },
  },
  {
    path: "/test-simple-download",
    name: "TestSimpleDownload",
    component: () => import("@/views/TestSimpleDownload.vue"),
    meta: { title: "简单下载测试" },
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/components/AppleLayout.vue"),
    meta: { title: "控制台", requiresAuth: true },
    children: [
      {
        path: "",
        name: "DashboardHome",
        component: () => import("@/views/AppleDashboard.vue"),
        meta: { title: "控制台" },
      },
      {
        path: "patents",
        name: "PatentList",
        component: () => import("@/views/patents/PatentList.vue"),
        meta: { title: "专利列表" },
      },
      {
        path: "patents/add",
        name: "PatentAdd",
        component: () => import("@/views/patents/PatentAdd.vue"),
        meta: { title: "添加专利" },
      },
      {
        path: "patents/:id",
        name: "PatentDetail",
        component: () => import("@/views/patents/PatentDetail.vue"),
        meta: { title: "专利详情" },
      },
      {
        path: "patents/:id/edit",
        name: "PatentEdit",
        component: () => import("@/views/patents/PatentEdit.vue"),
        meta: { title: "编辑专利" },
      },

      {
        path: "users",
        name: "UserList",
        component: () => import("@/views/users/AppleUserList.vue"),
        meta: { title: "用户管理" },
      },
      {
        path: "users/add",
        name: "UserAdd",
        component: () => import("@/views/users/UserAdd.vue"),
        meta: { title: "添加用户" },
      },
      {
        path: "users/:id",
        name: "UserDetail",
        component: () => import("@/views/users/UserDetail.vue"),
        meta: { title: "用户详情" },
      },
      {
        path: "users/:id/edit",
        name: "UserEdit",
        component: () => import("@/views/users/UserEdit.vue"),
        meta: { title: "编辑用户" },
      },
      {
        path: "password/change",
        name: "PasswordChange",
        component: () => import("@/views/users/PasswordChange.vue"),
        meta: { title: "修改密码" },
      },
      {
        path: "reports",
        name: "Reports",
        component: () => import("@/views/reports/Reports.vue"),
        meta: { title: "统计报表" },
      },
      {
        path: "review",
        name: "ReviewCenter",
        component: () => import("@/views/review/ReviewCenter.vue"),
        meta: { title: "审核中心" },
      },
      {
        path: "data-security",
        name: "DataSecurity",
        component: () => import("@/views/DataSecurity.vue"),
        meta: { title: "数据安全管理" },
      },
      {
        path: "test-security",
        name: "TestSecurity",
        component: () => import("@/views/TestSecurity.vue"),
        meta: { title: "安全功能测试" },
      },
      {
        path: "compliance",
        name: "ComplianceManagement",
        component: () => import("@/views/ComplianceManagement.vue"),
        meta: { title: "合规管理" },
      },
      {
        path: "personalization",
        name: "PersonalizationSettings",
        component: () => import("@/views/PersonalizationSettings.vue"),
        meta: { title: "个性化设置" },
      },
      {
        path: "profile",
        name: "Profile",
        component: () => import("@/views/Profile.vue"),
        meta: { title: "个人资料" },
      },
      {
        path: "settings",
        name: "SystemSettings",
        component: () => import("@/views/SystemSettings.vue"),
        meta: { title: "系统设置" },
      },
      {
        path: "notifications",
        name: "NotificationPage",
        component: () => import("@/views/NotificationPage.vue"),
        meta: { title: "通知中心" },
      },
      {
        path: "search-demo",
        name: "SearchDemo",
        component: () => import("@/views/SearchDemo.vue"),
        meta: { title: "搜索功能演示" },
      },
      {
        path: "document-demo",
        name: "DocumentManagementDemo",
        component: () => import("@/views/DocumentManagementDemo.vue"),
        meta: { title: "文档版本管理演示" },
      },
      {
        path: "workflows",
        name: "WorkflowManagement",
        component: () => import("@/views/WorkflowManagement.vue"),
        meta: { title: "工作流管理" },
      },
      {
        path: "workflow-demo",
        name: "WorkflowDemo",
        component: () => import("@/views/WorkflowDemo.vue"),
        meta: { title: "工作流演示" },
      },

      {
        path: "visualization",
        name: "VisualizationCenter",
        component: () => import("@/views/VisualizationCenter.vue"),
        meta: { title: "可视化中心" },
      },
      {
        path: "fees",
        name: "FeeManagement",
        component: () => import("@/views/FeeManagement.vue"),
        meta: { title: "费用管理" },
      },
      {
        path: "deadlines",
        name: "DeadlineManagement",
        component: () => import("@/views/DeadlineManagement.vue"),
        meta: { title: "期限管理" },
      },
      {
        path: "contracts",
        name: "ContractManagement",
        component: () => import("@/views/AppleContractManagement.vue"),
        meta: { title: "合同管理" },
      },
      {
        path: "ai",
        name: "AIAssistant",
        component: () => import("@/views/AIAssistant.vue"),
        meta: { title: "AI辅助功能" },
      },
      {
        path: "ai/similarity",
        name: "SimilarityDetection",
        component: () => import("@/views/ai/SimilarityDetection.vue"),
        meta: { title: "专利相似性检测" },
      },
      {
        path: "ai/classification",
        name: "ClassificationSuggestion",
        component: () => import("@/views/ai/ClassificationSuggestion.vue"),
        meta: { title: "自动分类建议" },
      },
      {
        path: "ai/summary",
        name: "SmartSummary",
        component: () => import("@/views/ai/SmartSummary.vue"),
        meta: { title: "智能摘要生成" },
      },
      {
        path: "ai/risk-alert",
        name: "RiskAlert",
        component: () => import("@/views/ai/RiskAlert.vue"),
        meta: { title: "风险预警系统" },
      },
      {
        path: "ai/knowledge-graph",
        name: "KnowledgeGraph",
        component: () => import("@/views/ai/KnowledgeGraph.vue"),
        meta: { title: "知识图谱分析" },
      },
      {
        path: "integration",
        name: "IntegrationManagement",
        component: () => import("@/views/AppleIntegrationManagement.vue"),
        meta: { title: "外部系统集成" },
      },

      {
        path: "test-integration",
        name: "TestIntegration",
        component: () => import("@/views/TestIntegration.vue"),
        meta: { title: "集成功能测试" },
      },
      {
        path: "test-integration-permission",
        name: "TestIntegrationPermission",
        component: () => import("@/views/TestIntegrationPermission.vue"),
        meta: { title: "集成权限测试" },
      },
      {
        path: "test-user-status",
        name: "TestUserStatus",
        component: () => import("@/views/TestUserStatus.vue"),
        meta: { title: "用户状态测试" },
      },

      {
        path: "test-fee",
        name: "TestFee",
        component: () => import("@/views/TestFee.vue"),
        meta: { title: "费用管理测试" },
      },
      {
        path: "test-fee-fix",
        name: "TestFeeFix",
        component: () => import("@/views/TestFeeFix.vue"),
        meta: { title: "费用管理修复测试" },
      },
      {
        path: "test-fee-permission",
        name: "TestFeePermission",
        component: () => import("@/views/TestFeePermission.vue"),
        meta: { title: "费用管理权限测试" },
      },
      {
        path: "test-fee-fix",
        name: "TestFeeFix",
        component: () => import("@/views/TestFeeFix.vue"),
        meta: { title: "费用管理修复测试" },
      },
      {
        path: "test-deadline-fix",
        name: "TestDeadlineFix",
        component: () => import("@/views/TestDeadlineFix.vue"),
        meta: { title: "期限管理修复测试" },
      },
      {
        path: "visualization-demo",
        name: "VisualizationDemo",
        component: () => import("@/views/VisualizationDemo.vue"),
        meta: { title: "可视化演示" },
      },
      {
        path: "test-personalization",
        name: "TestPersonalization",
        component: () => import("@/views/TestPersonalization.vue"),
        meta: { title: "个性化设置功能测试" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由权限检查函数
const checkRoutePermission = (path: string, userRole: string): boolean => {
  // 路径与权限的映射
  const routePermissions: Record<string, string> = {
    "/dashboard/patents": "canViewPatents",
    "/dashboard/patents/add": "canAddPatents",
    "/dashboard/patents/edit": "canEditPatents",
    "/dashboard/review": "canAccessReviewCenter",

    "/dashboard/users": "canViewUsers",
    "/dashboard/users/add": "canAddUsers",
    "/dashboard/users/edit": "canEditUsers",
    "/dashboard/settings": "canManageSystem",

    "/dashboard/integration": "integrationManage",
    "/dashboard/compliance": "canManageCompliance",
    "/dashboard/personalization": "canManagePersonalization",
  };

  // 检查路径是否需要特殊权限
  for (const [routePath, permission] of Object.entries(routePermissions)) {
    if (path.startsWith(routePath) || path.includes(routePath)) {
      return hasPermission(userRole as any, permission as any);
    }
  }

  // 默认路径（如控制台）允许所有已登录用户访问
  return true;
};

// 路由守卫
router.beforeEach((to, _from, next) => {
  // 设置页面标题
  document.title = `专利管理系统 - ${to.meta.title || "首页"}`;

  // 检查是否需要登录
  if (to.meta.requiresAuth) {
    const userStore = useUserStore();
    if (!userStore.isLoggedIn) {
      next("/login");
      return;
    }

    // 检查用户权限
    const userRole = userStore.currentUser?.role || "user";
    const hasRoutePermission = checkRoutePermission(to.path, userRole);

    if (!hasRoutePermission) {
      ElMessage.error("您没有访问此页面的权限");

      // 根据用户角色重定向到合适的页面
      if (userRole === "reviewer") {
        next("/dashboard/review");
      } else {
        next("/dashboard");
      }
      return;
    }

    // 特殊路由权限检查
    if (to.path.includes("/users/") && to.path.includes("/edit")) {
      // 用户编辑页面权限检查
      const userId = parseInt(to.params.id as string);
      const currentUserId = userStore.currentUser?.id || 0;

      // 检查是否可以编辑该用户
      if (userRole !== "admin" && userId !== currentUserId) {
        ElMessage.error(PERMISSION_MESSAGES.NO_EDIT_USER);
        next("/dashboard/users");
        return;
      }
    }

    if (to.path.includes("/patents/") && to.path.includes("/edit")) {
      // 专利编辑页面权限检查
      if (!hasPermission(userRole as any, "canEditPatents")) {
        ElMessage.error(PERMISSION_MESSAGES.NO_EDIT_PATENT);
        next("/dashboard/patents");
        return;
      }
    }
  }

  next();
});

export default router;
