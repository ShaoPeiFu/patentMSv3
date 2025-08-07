<template>
  <div class="log-viewer">
    <el-card class="log-card">
      <template #header>
        <div class="card-header">
          <h3>📝 日志查看器</h3>
          <div class="header-actions">
            <el-button size="small" @click="refreshLogs">
              <el-icon><Refresh /></el-icon>
              刷新
            </el-button>
            <el-button size="small" @click="exportLogs">
              <el-icon><Download /></el-icon>
              导出
            </el-button>
            <el-button size="small" @click="clearLogs" type="danger">
              <el-icon><Delete /></el-icon>
              清空
            </el-button>
          </div>
        </div>
      </template>

      <!-- 日志过滤器 -->
      <div class="log-filters">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-select v-model="filters.level" placeholder="日志级别" clearable>
              <el-option label="DEBUG" value="debug" />
              <el-option label="INFO" value="info" />
              <el-option label="WARN" value="warn" />
              <el-option label="ERROR" value="error" />
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-input
              v-model="filters.search"
              placeholder="搜索日志内容"
              clearable
            />
          </el-col>
          <el-col :span="6">
            <el-date-picker
              v-model="filters.dateRange"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
            />
          </el-col>
          <el-col :span="6">
            <el-button type="primary" @click="applyFilters">应用过滤</el-button>
            <el-button @click="clearFilters">清除过滤</el-button>
          </el-col>
        </el-row>
      </div>

      <!-- 日志统计 -->
      <div class="log-stats">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="stat-item">
              <div class="stat-number">{{ totalLogs }}</div>
              <div class="stat-label">总日志数</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="stat-item">
              <div class="stat-number warning">{{ errorLogs }}</div>
              <div class="stat-label">错误日志</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="stat-item">
              <div class="stat-number info">{{ todayLogs }}</div>
              <div class="stat-label">今日日志</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="stat-item">
              <div class="stat-number success">{{ infoLogs }}</div>
              <div class="stat-label">信息日志</div>
            </div>
          </el-col>
        </el-row>
      </div>

      <!-- 日志列表 -->
      <div class="log-list">
        <el-table
          :data="paginatedLogs"
          style="width: 100%"
          :max-height="400"
          stripe
        >
          <el-table-column prop="timestamp" label="时间" width="180">
            <template #default="scope">
              {{ formatDateTime(scope.row.timestamp) }}
            </template>
          </el-table-column>

          <el-table-column prop="level" label="级别" width="100">
            <template #default="scope">
              <el-tag :type="getLogLevelColor(scope.row.level)" size="small">
                {{ scope.row.level.toUpperCase() }}
              </el-tag>
            </template>
          </el-table-column>

          <el-table-column prop="message" label="消息" min-width="300">
            <template #default="scope">
              <span class="log-message">{{ scope.row.message }}</span>
            </template>
          </el-table-column>

          <el-table-column prop="details" label="详情" width="120">
            <template #default="scope">
              <el-button
                v-if="scope.row.details"
                size="small"
                @click="viewLogDetails(scope.row)"
              >
                查看详情
              </el-button>
              <span v-else>-</span>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- 分页 -->
      <div class="pagination-container">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 50, 100]"
          :total="filteredLogs.length"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>

    <!-- 日志详情对话框 -->
    <el-dialog v-model="showLogDetails" title="日志详情" width="600px">
      <div v-if="selectedLog" class="log-details">
        <el-descriptions :column="2" border>
          <el-descriptions-item label="时间">
            {{ formatDateTime(selectedLog.timestamp) }}
          </el-descriptions-item>
          <el-descriptions-item label="级别">
            <el-tag :type="getLogLevelColor(selectedLog.level)">
              {{ selectedLog.level.toUpperCase() }}
            </el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="消息" :span="2">
            {{ selectedLog.message }}
          </el-descriptions-item>
          <el-descriptions-item label="详情" :span="2">
            <pre class="log-details-pre">{{
              JSON.stringify(selectedLog.details, null, 2)
            }}</pre>
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { LoggingUtils } from "@/utils/security";
import { Refresh, Download, Delete } from "@element-plus/icons-vue";

// 响应式数据
const filters = ref({
  level: "",
  search: "",
  dateRange: [] as string[],
});

const currentPage = ref(1);
const pageSize = ref(20);
const showLogDetails = ref(false);
const selectedLog = ref(null);

// 计算属性
const filteredLogs = computed(() => {
  let logs = LoggingUtils.getLogs();

  // 按级别过滤
  if (filters.value.level) {
    logs = logs.filter((log) => log.level === filters.value.level);
  }

  // 按搜索内容过滤
  if (filters.value.search) {
    const searchTerm = filters.value.search.toLowerCase();
    logs = logs.filter((log) => log.message.toLowerCase().includes(searchTerm));
  }

  // 按日期范围过滤
  if (filters.value.dateRange && filters.value.dateRange.length === 2) {
    const startDate = new Date(filters.value.dateRange[0]);
    const endDate = new Date(filters.value.dateRange[1]);
    logs = logs.filter((log) => {
      const logDate = new Date(log.timestamp);
      return logDate >= startDate && logDate <= endDate;
    });
  }

  return logs;
});

const paginatedLogs = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return filteredLogs.value.slice(start, end);
});

const totalLogs = computed(() => LoggingUtils.getLogs().length);
const errorLogs = computed(
  () => LoggingUtils.getLogs().filter((log) => log.level === "error").length
);
const infoLogs = computed(
  () => LoggingUtils.getLogs().filter((log) => log.level === "info").length
);
const todayLogs = computed(() => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return LoggingUtils.getLogs().filter((log) => {
    const logDate = new Date(log.timestamp);
    return logDate >= today;
  }).length;
});

// 方法
const refreshLogs = () => {
  ElMessage.success("日志列表已刷新");
};

const exportLogs = () => {
  try {
    const logs = filteredLogs.value;
    const csvContent = generateCSV(logs);
    downloadCSV(csvContent, "system-logs.csv");
    ElMessage.success("日志数据已导出");
  } catch (error) {
    ElMessage.error("导出失败");
  }
};

const clearLogs = async () => {
  try {
    await ElMessageBox.confirm(
      "确定要清空所有日志吗？此操作不可恢复。",
      "确认清空",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }
    );

    LoggingUtils.clearLogs();
    ElMessage.success("日志已清空");
  } catch (error) {
    if (error !== "cancel") {
      ElMessage.error("清空失败");
    }
  }
};

const applyFilters = () => {
  currentPage.value = 1;
  ElMessage.success("过滤器已应用");
};

const clearFilters = () => {
  filters.value = {
    level: "",
    search: "",
    dateRange: [],
  };
  currentPage.value = 1;
  ElMessage.success("过滤器已清除");
};

const viewLogDetails = (log: any) => {
  selectedLog.value = log;
  showLogDetails.value = true;
};

const handleSizeChange = (size: number) => {
  pageSize.value = size;
  currentPage.value = 1;
};

const handleCurrentChange = (page: number) => {
  currentPage.value = page;
};

const formatDateTime = (timestamp: string) => {
  return new Date(timestamp).toLocaleString("zh-CN");
};

const getLogLevelColor = (level: string) => {
  const colorMap = {
    debug: "info",
    info: "success",
    warn: "warning",
    error: "danger",
  };
  return colorMap[level] || "info";
};

const generateCSV = (logs: any[]) => {
  const headers = ["时间", "级别", "消息"];
  const rows = logs.map((log) => [
    formatDateTime(log.timestamp),
    log.level.toUpperCase(),
    log.message,
  ]);

  return [headers, ...rows]
    .map((row) => row.map((cell) => `"${cell}"`).join(","))
    .join("\n");
};

const downloadCSV = (content: string, filename: string) => {
  const blob = new Blob(["\ufeff" + content], {
    type: "text/csv;charset=utf-8;",
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
};

onMounted(() => {
  console.log("日志查看器组件已加载");
});
</script>

<style scoped>
.log-viewer {
  margin-top: 20px;
}

.log-card {
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

.log-filters {
  margin-bottom: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
}

.log-stats {
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

.stat-number.warning {
  color: #e6a23c;
}

.stat-number.success {
  color: #67c23a;
}

.stat-number.info {
  color: #909399;
}

.stat-label {
  font-size: 12px;
  color: #909399;
  margin-top: 5px;
}

.log-list {
  margin-bottom: 20px;
}

.log-message {
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
}

.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.log-details {
  padding: 10px 0;
}

.log-details-pre {
  background: #f8f9fa;
  padding: 10px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 12px;
  white-space: pre-wrap;
  word-break: break-all;
  max-height: 200px;
  overflow-y: auto;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .log-filters .el-row {
    margin: 0 !important;
  }

  .log-filters .el-col {
    padding: 0 !important;
    margin-bottom: 10px;
  }

  .stat-item {
    margin-bottom: 10px;
  }
}
</style>
