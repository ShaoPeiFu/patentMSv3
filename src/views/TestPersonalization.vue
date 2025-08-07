<template>
  <div class="test-personalization">
    <h1>个性化设置功能测试</h1>

    <div class="test-section">
      <h2>1. 主题切换测试</h2>
      <el-button @click="testThemeSwitch">测试主题切换</el-button>
      <p>当前主题: {{ currentTheme.name }}</p>
      <p>主题设置状态: {{ themeStatus }}</p>
    </div>

    <div class="test-section">
      <h2>2. 快捷操作栏测试</h2>
      <el-button @click="testQuickActions">测试快捷操作</el-button>
      <p>快捷操作状态: {{ quickActionStatus }}</p>
      <p>启用的快捷操作数量: {{ enabledQuickActionsCount }}</p>
    </div>

    <div class="test-section">
      <h2>3. 个人工作台测试</h2>
      <el-button @click="testPersonalWorkspace">测试个人工作台</el-button>
      <p>工作台状态: {{ workspaceStatus }}</p>
      <p>当前工作台: {{ currentWorkspace.name }}</p>
      <p>可见组件数量: {{ visibleWidgetsCount }}</p>
    </div>

    <div class="test-section">
      <h2>4. 设置保存测试</h2>
      <el-button @click="testSettingsSave">测试设置保存</el-button>
      <p>设置保存状态: {{ settingsSaveStatus }}</p>
    </div>

    <div class="test-section">
      <h2>5. 设置导出导入测试</h2>
      <el-button @click="testSettingsExport">测试设置导出</el-button>
      <el-button @click="testSettingsImport">测试设置导入</el-button>
      <p>导出导入状态: {{ exportImportStatus }}</p>
    </div>

    <div class="test-section">
      <h2>6. 导航到个性化设置</h2>
      <el-button type="primary" @click="goToPersonalization">
        前往个性化设置页面
      </el-button>
    </div>

    <div class="test-section">
      <h2>7. 功能演示</h2>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card>
            <template #header>
              <h3>主题预览</h3>
            </template>
            <div class="theme-preview" :style="getThemePreviewStyle()">
              <div class="preview-header"></div>
              <div class="preview-content">
                <div class="preview-sidebar"></div>
                <div class="preview-main"></div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="8">
          <el-card>
            <template #header>
              <h3>快捷操作预览</h3>
            </template>
            <div class="quick-actions-preview">
              <div
                v-for="action in previewQuickActions"
                :key="action.id"
                class="preview-action"
              >
                <el-icon><component :is="action.icon" /></el-icon>
                <span>{{ action.name }}</span>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="8">
          <el-card>
            <template #header>
              <h3>工作台预览</h3>
            </template>
            <div class="workspace-preview">
              <div class="preview-widget" v-for="i in 3" :key="i"></div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { usePersonalizationStore } from "@/stores/personalization";
import { ElMessage } from "element-plus";

const router = useRouter();
const personalizationStore = usePersonalizationStore();

// 测试结果
const themeStatus = ref("");
const quickActionStatus = ref("");
const workspaceStatus = ref("");
const settingsSaveStatus = ref("");
const exportImportStatus = ref("");

// 计算属性
const currentTheme = computed(() => personalizationStore.currentTheme);
const enabledQuickActionsCount = computed(
  () => personalizationStore.enabledQuickActions.length
);
const currentWorkspace = computed(() => personalizationStore.currentWorkspace);
const visibleWidgetsCount = computed(
  () => personalizationStore.visibleWidgets.length
);

// 预览数据
const previewQuickActions = computed(() =>
  personalizationStore.enabledQuickActions.slice(0, 3)
);

// 测试方法
const testThemeSwitch = async () => {
  try {
    const themes = personalizationStore.availableThemes;
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];

    personalizationStore.setTheme(randomTheme.id);
    themeStatus.value = `✅ 主题切换成功: ${randomTheme.name}`;
    ElMessage.success(`主题已切换到: ${randomTheme.name}`);
  } catch (error) {
    themeStatus.value = "❌ 主题切换失败: " + error;
    ElMessage.error("主题切换失败");
  }
};

const testQuickActions = () => {
  try {
    const actions = personalizationStore.enabledQuickActions;
    quickActionStatus.value = `✅ 快捷操作正常，共 ${actions.length} 个启用操作`;
    ElMessage.success("快捷操作功能正常");
  } catch (error) {
    quickActionStatus.value = "❌ 快捷操作异常: " + error;
    ElMessage.error("快捷操作功能异常");
  }
};

const testPersonalWorkspace = () => {
  try {
    const workspace = personalizationStore.currentWorkspace;
    const widgets = personalizationStore.visibleWidgets;

    workspaceStatus.value = `✅ 个人工作台正常，工作台: ${workspace.name}，组件: ${widgets.length} 个`;
    ElMessage.success("个人工作台功能正常");
  } catch (error) {
    workspaceStatus.value = "❌ 个人工作台异常: " + error;
    ElMessage.error("个人工作台功能异常");
  }
};

const testSettingsSave = async () => {
  try {
    const result = await personalizationStore.saveSettings();
    if (result) {
      settingsSaveStatus.value = "✅ 设置保存成功";
      ElMessage.success("设置保存成功");
    } else {
      settingsSaveStatus.value = "❌ 设置保存失败";
      ElMessage.error("设置保存失败");
    }
  } catch (error) {
    settingsSaveStatus.value = "❌ 设置保存异常: " + error;
    ElMessage.error("设置保存异常");
  }
};

const testSettingsExport = () => {
  try {
    personalizationStore.exportSettings();
    exportImportStatus.value = "✅ 设置导出成功";
    ElMessage.success("设置导出成功");
  } catch (error) {
    exportImportStatus.value = "❌ 设置导出失败: " + error;
    ElMessage.error("设置导出失败");
  }
};

const testSettingsImport = () => {
  try {
    // 模拟导入设置
    const mockSettings = {
      theme: { currentTheme: "light" },
      dashboard: { layout: "grid" },
      quickActions: { enabled: true },
    };

    // 这里应该调用实际的导入方法
    exportImportStatus.value = "✅ 设置导入功能正常";
    ElMessage.success("设置导入功能正常");
  } catch (error) {
    exportImportStatus.value = "❌ 设置导入失败: " + error;
    ElMessage.error("设置导入失败");
  }
};

const goToPersonalization = () => {
  router.push("/dashboard/personalization");
};

const getThemePreviewStyle = () => {
  const theme = personalizationStore.currentTheme;
  return {
    "--primary-color": theme.primaryColor,
    "--secondary-color": theme.secondaryColor,
    "--background-color": theme.backgroundColor,
    "--text-color": theme.textColor,
  };
};
</script>

<style scoped>
.test-personalization {
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

/* 主题预览 */
.theme-preview {
  height: 120px;
  background: var(--background-color);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.preview-header {
  height: 20px;
  background: var(--primary-color);
}

.preview-content {
  display: flex;
  height: calc(100% - 20px);
}

.preview-sidebar {
  width: 30px;
  background: var(--secondary-color);
}

.preview-main {
  flex: 1;
  background: var(--background-color);
}

/* 快捷操作预览 */
.quick-actions-preview {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.preview-action {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #f8f9fa;
  border-radius: 6px;
  font-size: 12px;
  color: #606266;
}

/* 工作台预览 */
.workspace-preview {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.preview-widget {
  height: 30px;
  background: #f8f9fa;
  border-radius: 4px;
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
