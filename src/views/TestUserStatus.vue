<template>
  <div class="test-user-status">
    <h1>用户状态测试</h1>

    <div class="status-section">
      <h2>登录状态</h2>
      <div class="status-grid">
        <div class="status-item">
          <span class="label">是否登录：</span>
          <span
            class="value"
            :class="{
              success: userStore.isLoggedIn,
              error: !userStore.isLoggedIn,
            }"
          >
            {{ userStore.isLoggedIn ? "是" : "否" }}
          </span>
        </div>
        <div class="status-item">
          <span class="label">Token：</span>
          <span class="value">{{ userStore.token || "无" }}</span>
        </div>
        <div class="status-item">
          <span class="label">当前用户：</span>
          <span class="value">{{
            userStore.currentUser?.username || "无"
          }}</span>
        </div>
        <div class="status-item">
          <span class="label">用户角色：</span>
          <span class="value">{{ userStore.currentUser?.role || "无" }}</span>
        </div>
      </div>
    </div>

    <div class="permission-section">
      <h2>权限检查</h2>
      <div class="permission-grid">
        <div class="permission-item">
          <span class="label">集成管理权限：</span>
          <span
            class="value"
            :class="{
              success: userStore.hasPermission('integrationManage'),
              error: !userStore.hasPermission('integrationManage'),
            }"
          >
            {{
              userStore.hasPermission("integrationManage") ? "有权限" : "无权限"
            }}
          </span>
        </div>
        <div class="permission-item">
          <span class="label">用户管理权限：</span>
          <span
            class="value"
            :class="{
              success: userStore.hasPermission('user:view'),
              error: !userStore.hasPermission('user:view'),
            }"
          >
            {{ userStore.hasPermission("user:view") ? "有权限" : "无权限" }}
          </span>
        </div>
        <div class="permission-item">
          <span class="label">专利管理权限：</span>
          <span
            class="value"
            :class="{
              success: userStore.hasPermission('patent:view'),
              error: !userStore.hasPermission('patent:view'),
            }"
          >
            {{ userStore.hasPermission("patent:view") ? "有权限" : "无权限" }}
          </span>
        </div>
        <div class="permission-item">
          <span class="label">系统管理权限：</span>
          <span
            class="value"
            :class="{
              success: userStore.hasPermission('system:manage'),
              error: !userStore.hasPermission('system:manage'),
            }"
          >
            {{ userStore.hasPermission("system:manage") ? "有权限" : "无权限" }}
          </span>
        </div>
      </div>
    </div>

    <div class="action-section">
      <h2>操作测试</h2>
      <div class="action-buttons">
        <el-button @click="testLogin">测试登录</el-button>
        <el-button @click="testLogout">测试登出</el-button>
        <el-button @click="testPermission">测试权限</el-button>
        <el-button @click="clearStorage">清除存储</el-button>
      </div>

      <div class="test-results">
        <h3>测试结果：</h3>
        <pre>{{ testResults }}</pre>
      </div>
    </div>

    <div class="debug-section">
      <h2>调试信息</h2>
      <div class="debug-content">
        <h3>localStorage 内容：</h3>
        <pre>{{ localStorageContent }}</pre>

        <h3>用户Store状态：</h3>
        <pre>{{ storeState }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useUserStore } from "@/stores/user";
import { ElMessage } from "element-plus";

const userStore = useUserStore();
const testResults = ref("");

const localStorageContent = computed(() => {
  const content: Record<string, any> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key) {
      try {
        content[key] = JSON.parse(localStorage.getItem(key) || "");
      } catch {
        content[key] = localStorage.getItem(key);
      }
    }
  }
  return JSON.stringify(content, null, 2);
});

const storeState = computed(() => {
  return {
    isLoggedIn: userStore.isLoggedIn,
    currentUser: userStore.currentUser,
    token: userStore.token,
    loading: userStore.loading,
  };
});

const testLogin = async () => {
  try {
    testResults.value = "正在测试登录...";
    const result = await userStore.login("admin", "123456");
    testResults.value = `登录测试成功！\n用户信息：${JSON.stringify(
      result.user,
      null,
      2
    )}`;
    ElMessage.success("登录测试成功");
  } catch (error) {
    testResults.value = `登录测试失败：${error}`;
    ElMessage.error("登录测试失败");
  }
};

const testLogout = () => {
  userStore.logout();
  testResults.value = "登出测试完成";
  ElMessage.success("登出测试完成");
};

const testPermission = () => {
  const permissions = [
    "integrationManage",
    "user:view",
    "patent:view",
    "system:manage",
    "user:add",
    "user:edit",
    "user:delete",
  ];

  const results = permissions.map((permission) => ({
    permission,
    hasPermission: userStore.hasPermission(permission),
  }));

  testResults.value = `权限测试结果：\n${JSON.stringify(results, null, 2)}`;
};

const clearStorage = () => {
  localStorage.clear();
  testResults.value = "存储已清除，请刷新页面";
  ElMessage.warning("存储已清除，请刷新页面");
};
</script>

<style scoped>
.test-user-status {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.test-user-status h1 {
  text-align: center;
  margin-bottom: 32px;
  color: #2c3e50;
}

.status-section,
.permission-section,
.action-section,
.debug-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.status-section h2,
.permission-section h2,
.action-section h2,
.debug-section h2 {
  margin: 0 0 20px 0;
  color: #2c3e50;
  font-size: 1.3em;
}

.status-grid,
.permission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.status-item,
.permission-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.status-item .label,
.permission-item .label {
  font-weight: 600;
  color: #2c3e50;
}

.status-item .value,
.permission-item .value {
  font-weight: 600;
}

.status-item .value.success,
.permission-item .value.success {
  color: #34c759;
}

.status-item .value.error,
.permission-item .value.error {
  color: #ff2d55;
}

.action-buttons {
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

.debug-content h3 {
  margin: 20px 0 12px 0;
  font-size: 1em;
  color: #2c3e50;
}

.debug-content pre {
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
  .action-buttons {
    flex-direction: column;
  }

  .status-grid,
  .permission-grid {
    grid-template-columns: 1fr;
  }
}
</style>
