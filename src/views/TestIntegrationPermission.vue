<template>
  <div class="test-integration-permission">
    <h1>集成权限测试</h1>

    <div class="user-info">
      <h2>当前用户信息</h2>
      <div class="info-grid">
        <div class="info-item">
          <span class="label">用户名：</span>
          <span class="value">{{ userStore.currentUser?.username }}</span>
        </div>
        <div class="info-item">
          <span class="label">角色：</span>
          <span class="value">{{ userStore.currentUser?.role }}</span>
        </div>
        <div class="info-item">
          <span class="label">是否登录：</span>
          <span class="value">{{ userStore.isLoggedIn ? "是" : "否" }}</span>
        </div>
        <div class="info-item">
          <span class="label">是否管理员：</span>
          <span class="value">{{ userStore.isAdmin ? "是" : "否" }}</span>
        </div>
      </div>
    </div>

    <div class="permission-test">
      <h2>权限测试</h2>
      <div class="test-buttons">
        <el-button @click="testIntegrationPermission">测试集成权限</el-button>
        <el-button @click="testUserPermission">测试用户管理权限</el-button>
        <el-button @click="testPatentPermission">测试专利管理权限</el-button>
        <el-button @click="testSystemPermission">测试系统管理权限</el-button>
      </div>

      <div class="test-results">
        <h3>测试结果：</h3>
        <pre>{{ testResults }}</pre>
      </div>
    </div>

    <div class="route-test">
      <h2>路由访问测试</h2>
      <div class="test-buttons">
        <el-button @click="testRouteAccess('/dashboard/integration')"
          >测试集成页面路由</el-button
        >
        <el-button @click="testRouteAccess('/dashboard/users')"
          >测试用户管理路由</el-button
        >
        <el-button @click="testRouteAccess('/dashboard/patents')"
          >测试专利管理路由</el-button
        >
        <el-button @click="testRouteAccess('/dashboard/settings')"
          >测试系统设置路由</el-button
        >
      </div>

      <div class="test-results">
        <h3>路由测试结果：</h3>
        <pre>{{ routeTestResults }}</pre>
      </div>
    </div>

    <div class="debug-info">
      <h2>调试信息</h2>
      <div class="debug-section">
        <h3>当前用户完整信息：</h3>
        <pre>{{ JSON.stringify(userStore.currentUser, null, 2) }}</pre>
      </div>

      <div class="debug-section">
        <h3>权限检查函数：</h3>
        <el-button @click="debugPermissions">调试权限检查</el-button>
        <pre>{{ debugResults }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { hasPermission } from "@/utils/permissions";
import { ElMessage } from "element-plus";

const userStore = useUserStore();

const testResults = ref("");
const routeTestResults = ref("");
const debugResults = ref("");

const testIntegrationPermission = () => {
  const hasIntegrationPermission = userStore.hasPermission("integrationManage");
  testResults.value = `集成管理权限测试：
- 权限名称: integrationManage
- 当前用户角色: ${userStore.currentUser?.role}
- 是否有权限: ${hasIntegrationPermission ? "是" : "否"}
- 权限检查方法: userStore.hasPermission("integrationManage")`;
};

const testUserPermission = () => {
  const hasUserPermission = userStore.hasPermission("user:view");
  testResults.value = `用户管理权限测试：
- 权限名称: user:view
- 当前用户角色: ${userStore.currentUser?.role}
- 是否有权限: ${hasUserPermission ? "是" : "否"}
- 权限检查方法: userStore.hasPermission("user:view")`;
};

const testPatentPermission = () => {
  const hasPatentPermission = userStore.hasPermission("patent:view");
  testResults.value = `专利管理权限测试：
- 权限名称: patent:view
- 当前用户角色: ${userStore.currentUser?.role}
- 是否有权限: ${hasPatentPermission ? "是" : "否"}
- 权限检查方法: userStore.hasPermission("patent:view")`;
};

const testSystemPermission = () => {
  const hasSystemPermission = userStore.hasPermission("system:manage");
  testResults.value = `系统管理权限测试：
- 权限名称: system:manage
- 当前用户角色: ${userStore.currentUser?.role}
- 是否有权限: ${hasSystemPermission ? "是" : "否"}
- 权限检查方法: userStore.hasPermission("system:manage")`;
};

const testRouteAccess = (route: string) => {
  const userRole = userStore.currentUser?.role || "user";

  // 模拟路由权限检查
  let hasAccess = false;
  let permissionName = "";

  if (route.includes("/integration")) {
    hasAccess = hasPermission(userRole as any, "integrationManage");
    permissionName = "integrationManage";
  } else if (route.includes("/users")) {
    hasAccess = hasPermission(userRole as any, "canViewUsers");
    permissionName = "canViewUsers";
  } else if (route.includes("/patents")) {
    hasAccess = hasPermission(userRole as any, "canViewPatents");
    permissionName = "canViewPatents";
  } else if (route.includes("/settings")) {
    hasAccess = hasPermission(userRole as any, "canManageSystem");
    permissionName = "canManageSystem";
  }

  routeTestResults.value = `路由访问测试：${route}
- 当前用户角色: ${userRole}
- 检查权限: ${permissionName}
- 是否有访问权限: ${hasAccess ? "是" : "否"}
- 权限检查方法: hasPermission("${userRole}", "${permissionName}")`;
};

const debugPermissions = () => {
  const userRole = userStore.currentUser?.role || "user";

  debugResults.value = `权限调试信息：
当前用户角色: ${userRole}

权限检查结果:
- integrationManage: ${hasPermission(userRole as any, "integrationManage")}
- canViewUsers: ${hasPermission(userRole as any, "canViewUsers")}
- canEditUsers: ${hasPermission(userRole as any, "canEditUsers")}
- canViewPatents: ${hasPermission(userRole as any, "canViewPatents")}
- canEditPatents: ${hasPermission(userRole as any, "canEditPatents")}
- canManageSystem: ${hasPermission(userRole as any, "canManageSystem")}

用户Store权限检查:
- integrationManage: ${userStore.hasPermission("integrationManage")}
- user:view: ${userStore.hasPermission("user:view")}
- patent:view: ${userStore.hasPermission("patent:view")}
- system:manage: ${userStore.hasPermission("system:manage")}`;
};
</script>

<style scoped>
.test-integration-permission {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.test-integration-permission h1 {
  text-align: center;
  margin-bottom: 32px;
  color: #2c3e50;
}

.user-info,
.permission-test,
.route-test,
.debug-info {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.user-info h2,
.permission-test h2,
.route-test h2,
.debug-info h2 {
  margin: 0 0 20px 0;
  color: #2c3e50;
  font-size: 1.3em;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.info-item .label {
  font-weight: 600;
  color: #2c3e50;
}

.info-item .value {
  color: #007aff;
  font-weight: 600;
}

.test-buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
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

.debug-section {
  margin-bottom: 20px;
}

.debug-section h3 {
  margin: 0 0 12px 0;
  font-size: 1em;
  color: #2c3e50;
}

.debug-section pre {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #e9ecef;
  margin: 12px 0 0 0;
  white-space: pre-wrap;
  word-break: break-all;
  font-size: 0.9em;
  color: #666;
  max-height: 300px;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .test-buttons {
    flex-direction: column;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
