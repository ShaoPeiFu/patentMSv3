<template>
  <div class="backup-manager">
    <el-card class="backup-card">
      <template #header>
        <div class="card-header">
          <h3>💾 备份管理</h3>
          <div class="header-actions">
            <el-button size="small" @click="refreshBackups">
              <el-icon><Refresh /></el-icon>
              刷新
            </el-button>
            <el-button size="small" @click="createBackup" type="primary">
              <el-icon><Upload /></el-icon>
              创建备份
            </el-button>
          </div>
        </div>
      </template>

      <!-- 备份统计 -->
      <div class="backup-stats">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="stat-item">
              <div class="stat-number">{{ totalBackups }}</div>
              <div class="stat-label">总备份数</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="stat-item">
              <div class="stat-number success">{{ totalSize }}</div>
              <div class="stat-label">总大小 (KB)</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="stat-item">
              <div class="stat-number info">{{ todayBackups }}</div>
              <div class="stat-label">今日备份</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="stat-item">
              <div class="stat-number warning">{{ oldestBackup }}</div>
              <div class="stat-label">最旧备份 (天)</div>
            </div>
          </el-col>
        </el-row>
      </div>

      <!-- 备份列表 -->
      <div class="backup-list">
        <el-table
          :data="backupList"
          style="width: 100%"
          :max-height="400"
          stripe
        >
          <el-table-column prop="name" label="备份名称" min-width="150">
            <template #default="scope">
              <span class="backup-name">{{ scope.row.name }}</span>
            </template>
          </el-table-column>

          <el-table-column prop="timestamp" label="创建时间" width="180">
            <template #default="scope">
              {{ formatDateTime(scope.row.timestamp) }}
            </template>
          </el-table-column>

          <el-table-column prop="size" label="大小" width="120">
            <template #default="scope">
              {{ formatFileSize(scope.row.size) }}
            </template>
          </el-table-column>

          <el-table-column prop="id" label="备份ID" width="200">
            <template #default="scope">
              <el-tooltip :content="scope.row.id" placement="top">
                <span class="backup-id"
                  >{{ scope.row.id.substring(0, 20) }}...</span
                >
              </el-tooltip>
            </template>
          </el-table-column>

          <el-table-column label="操作" width="200">
            <template #default="scope">
              <el-button
                size="small"
                type="primary"
                @click="restoreBackup(scope.row)"
              >
                恢复
              </el-button>
              <el-button
                size="small"
                type="warning"
                @click="downloadBackup(scope.row)"
              >
                下载
              </el-button>
              <el-button
                size="small"
                type="danger"
                @click="deleteBackup(scope.row)"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- 创建备份对话框 -->
      <el-dialog v-model="showCreateBackup" title="创建备份" width="500px">
        <el-form :model="backupForm" label-width="100px">
          <el-form-item label="备份名称">
            <el-input v-model="backupForm.name" placeholder="请输入备份名称" />
          </el-form-item>
          <el-form-item label="备份描述">
            <el-input
              v-model="backupForm.description"
              type="textarea"
              placeholder="请输入备份描述"
              :rows="3"
            />
          </el-form-item>
          <el-form-item label="包含内容">
            <el-checkbox-group v-model="backupForm.includeItems">
              <el-checkbox label="settings">系统设置</el-checkbox>
              <el-checkbox label="logs">日志数据</el-checkbox>
              <el-checkbox label="events">安全事件</el-checkbox>
              <el-checkbox label="userData">用户数据</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="showCreateBackup = false">取消</el-button>
            <el-button type="primary" @click="confirmCreateBackup">
              创建备份
            </el-button>
          </span>
        </template>
      </el-dialog>

      <!-- 恢复备份对话框 -->
      <el-dialog v-model="showRestoreBackup" title="恢复备份" width="500px">
        <div v-if="selectedBackup" class="restore-info">
          <el-alert
            title="警告"
            type="warning"
            description="恢复备份将覆盖当前数据，请确保已备份重要数据。"
            show-icon
            :closable="false"
          />
          <div class="backup-details">
            <p><strong>备份名称:</strong> {{ selectedBackup.name }}</p>
            <p>
              <strong>创建时间:</strong>
              {{ formatDateTime(selectedBackup.timestamp) }}
            </p>
            <p>
              <strong>备份大小:</strong>
              {{ formatFileSize(selectedBackup.size) }}
            </p>
          </div>
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="showRestoreBackup = false">取消</el-button>
            <el-button type="danger" @click="confirmRestoreBackup">
              确认恢复
            </el-button>
          </span>
        </template>
      </el-dialog>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { BackupUtils, LoggingUtils, SecurityMonitor } from "@/utils/security";
import { Refresh, Upload } from "@element-plus/icons-vue";

// 响应式数据
const backupList = ref<
  Array<{
    id: string;
    name: string;
    timestamp: string;
    size: number;
  }>
>([]);

const showCreateBackup = ref(false);
const showRestoreBackup = ref(false);
const selectedBackup = ref(null);

const backupForm = ref({
  name: "",
  description: "",
  includeItems: ["settings", "logs", "events"],
});

// 计算属性
const totalBackups = computed(() => backupList.value.length);

const totalSize = computed(() => {
  return backupList.value.reduce((total, backup) => total + backup.size, 0);
});

const todayBackups = computed(() => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return backupList.value.filter((backup) => {
    const backupDate = new Date(backup.timestamp);
    return backupDate >= today;
  }).length;
});

const oldestBackup = computed(() => {
  if (backupList.value.length === 0) return 0;

  const oldest = backupList.value.reduce((oldest, backup) => {
    const backupDate = new Date(backup.timestamp);
    const oldestDate = new Date(oldest.timestamp);
    return backupDate < oldestDate ? backup : oldest;
  });

  const now = new Date();
  const oldestDate = new Date(oldest.timestamp);
  const diffTime = now.getTime() - oldestDate.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
});

// 方法
const refreshBackups = () => {
  try {
    backupList.value = BackupUtils.getBackupList();
    ElMessage.success("备份列表已刷新");
  } catch (error) {
    ElMessage.error("刷新备份列表失败");
  }
};

const createBackup = () => {
  backupForm.value = {
    name: `手动备份_${new Date().toISOString().slice(0, 19)}`,
    description: "",
    includeItems: ["settings", "logs", "events"],
  };
  showCreateBackup.value = true;
};

const confirmCreateBackup = async () => {
  try {
    if (!backupForm.value.name.trim()) {
      ElMessage.error("请输入备份名称");
      return;
    }

    // 准备备份数据
    const backupData: any = {
      timestamp: new Date().toISOString(),
      description: backupForm.value.description,
    };

    if (backupForm.value.includeItems.includes("settings")) {
      backupData.settings = {
        // 这里可以包含系统设置
        systemSettings: {},
      };
    }

    if (backupForm.value.includeItems.includes("logs")) {
      backupData.logs = LoggingUtils.getLogs();
    }

    if (backupForm.value.includeItems.includes("events")) {
      backupData.events = SecurityMonitor.getEvents();
    }

    if (backupForm.value.includeItems.includes("userData")) {
      backupData.userData = {
        // 这里可以包含用户数据
        users: [],
        patents: [],
      };
    }

    // 创建备份
    await BackupUtils.createBackup(backupData, backupForm.value.name);

    showCreateBackup.value = false;
    refreshBackups();
    ElMessage.success("备份创建成功");
  } catch (error) {
    ElMessage.error("创建备份失败: " + error);
  }
};

const restoreBackup = (backup: any) => {
  selectedBackup.value = backup;
  showRestoreBackup.value = true;
};

const confirmRestoreBackup = async () => {
  try {
    await ElMessageBox.confirm(
      "确定要恢复此备份吗？当前数据将被覆盖。",
      "确认恢复",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }
    );

    if (!selectedBackup.value) return;

    ElMessage.info("正在恢复备份...");

    const restoredData = await BackupUtils.restoreBackup(
      selectedBackup.value.id
    );

    // 处理恢复的数据
    if (restoredData.logs) {
      LoggingUtils.log("info", "从备份恢复日志数据", {
        count: restoredData.logs.length,
      });
    }

    if (restoredData.events) {
      LoggingUtils.log("info", "从备份恢复安全事件", {
        count: restoredData.events.length,
      });
    }

    showRestoreBackup.value = false;
    ElMessage.success("备份恢复成功");
  } catch (error) {
    if (error !== "cancel") {
      ElMessage.error("恢复备份失败: " + error);
    }
  }
};

const downloadBackup = async (backup: any) => {
  try {
    ElMessage.info("正在准备下载...");

    const backupData = await BackupUtils.restoreBackup(backup.id);
    const jsonData = JSON.stringify(backupData, null, 2);

    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${backup.name}.json`;
    link.click();
    URL.revokeObjectURL(url);

    ElMessage.success("备份下载成功");
  } catch (error) {
    ElMessage.error("下载备份失败: " + error);
  }
};

const deleteBackup = async (backup: any) => {
  try {
    await ElMessageBox.confirm(
      `确定要删除备份 "${backup.name}" 吗？此操作不可恢复。`,
      "确认删除",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }
    );

    const success = BackupUtils.deleteBackup(backup.id);

    if (success) {
      refreshBackups();
      ElMessage.success("备份删除成功");
    } else {
      ElMessage.error("删除备份失败");
    }
  } catch (error) {
    if (error !== "cancel") {
      ElMessage.error("删除备份失败");
    }
  }
};

const formatDateTime = (timestamp: string) => {
  return new Date(timestamp).toLocaleString("zh-CN");
};

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

onMounted(() => {
  console.log("备份管理组件已加载");
  refreshBackups();
});
</script>

<style scoped>
.backup-manager {
  margin-top: 20px;
}

.backup-card {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h3 {
  margin: 0;
  color: #303133;
}

.header-actions {
  display: flex;
  gap: 10px;
}

.backup-stats {
  margin-bottom: 20px;
}

.stat-item {
  text-align: center;
  padding: 15px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e4e7ed;
}

.stat-number {
  font-size: 24px;
  font-weight: bold;
  color: #409eff;
}

.stat-number.success {
  color: #67c23a;
}

.stat-number.info {
  color: #909399;
}

.stat-number.warning {
  color: #e6a23c;
}

.stat-label {
  font-size: 12px;
  color: #909399;
  margin-top: 5px;
}

.backup-list {
  margin-bottom: 20px;
}

.backup-name {
  font-weight: 500;
  color: #303133;
}

.backup-id {
  font-family: monospace;
  font-size: 12px;
  color: #909399;
}

.restore-info {
  margin-bottom: 20px;
}

.backup-details {
  margin-top: 15px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
}

.backup-details p {
  margin: 5px 0;
  color: #606266;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .backup-stats .el-row {
    margin: 0 !important;
  }

  .backup-stats .el-col {
    padding: 0 !important;
    margin-bottom: 10px;
  }

  .stat-item {
    margin-bottom: 10px;
  }
}
</style>
