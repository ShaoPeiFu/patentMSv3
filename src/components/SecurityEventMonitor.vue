<template>
  <div class="security-event-monitor">
    <el-card class="event-card">
      <template #header>
        <div class="card-header">
          <h3>🔍 安全事件监控</h3>
          <div class="header-actions">
            <el-button size="small" @click="refreshEvents">
              <el-icon><Refresh /></el-icon>
              刷新
            </el-button>
            <el-button size="small" @click="exportEvents">
              <el-icon><Download /></el-icon>
              导出
            </el-button>
            <el-button size="small" @click="clearEvents" type="danger">
              <el-icon><Delete /></el-icon>
              清空
            </el-button>
          </div>
        </div>
      </template>

      <!-- 事件过滤器 -->
      <div class="event-filters">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-select v-model="filters.type" placeholder="事件类型" clearable>
              <el-option label="加密事件" value="encryption" />
              <el-option label="备份事件" value="backup" />
              <el-option label="恢复事件" value="recovery" />
              <el-option label="访问事件" value="access" />
              <el-option label="错误事件" value="error" />
              <el-option label="系统事件" value="system" />
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-select
              v-model="filters.severity"
              placeholder="严重程度"
              clearable
            >
              <el-option label="低" value="low" />
              <el-option label="中" value="medium" />
              <el-option label="高" value="high" />
              <el-option label="严重" value="critical" />
            </el-select>
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

      <!-- 事件统计 -->
      <div class="event-stats">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="stat-item">
              <div class="stat-number">{{ totalEvents }}</div>
              <div class="stat-label">总事件数</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="stat-item">
              <div class="stat-number warning">{{ criticalEvents }}</div>
              <div class="stat-label">严重事件</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="stat-item">
              <div class="stat-number success">{{ resolvedEvents }}</div>
              <div class="stat-label">已解决</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="stat-item">
              <div class="stat-number info">{{ todayEvents }}</div>
              <div class="stat-label">今日事件</div>
            </div>
          </el-col>
        </el-row>
      </div>

      <!-- 事件列表 -->
      <div class="event-list">
        <el-table
          :data="paginatedEvents"
          style="width: 100%"
          :max-height="400"
          stripe
        >
          <el-table-column prop="timestamp" label="时间" width="180">
            <template #default="scope">
              {{ formatDateTime(scope.row.timestamp) }}
            </template>
          </el-table-column>

          <el-table-column prop="type" label="类型" width="120">
            <template #default="scope">
              <el-tag :type="getEventTypeColor(scope.row.type)">
                {{ getEventTypeText(scope.row.type) }}
              </el-tag>
            </template>
          </el-table-column>

          <el-table-column prop="severity" label="严重程度" width="100">
            <template #default="scope">
              <el-tag :type="getSeverityColor(scope.row.severity)" size="small">
                {{ getSeverityText(scope.row.severity) }}
              </el-tag>
            </template>
          </el-table-column>

          <el-table-column prop="description" label="描述" min-width="200">
            <template #default="scope">
              <span class="event-description">{{ scope.row.description }}</span>
            </template>
          </el-table-column>

          <el-table-column prop="user" label="用户" width="120">
            <template #default="scope">
              {{ scope.row.user || "-" }}
            </template>
          </el-table-column>

          <el-table-column prop="resolved" label="状态" width="80">
            <template #default="scope">
              <el-tag
                :type="scope.row.resolved ? 'success' : 'warning'"
                size="small"
              >
                {{ scope.row.resolved ? "已解决" : "未解决" }}
              </el-tag>
            </template>
          </el-table-column>

          <el-table-column label="操作" width="120">
            <template #default="scope">
              <el-button
                v-if="!scope.row.resolved"
                size="small"
                type="success"
                @click="resolveEvent(scope.row)"
              >
                标记解决
              </el-button>
              <el-button size="small" @click="viewEventDetails(scope.row)">
                详情
              </el-button>
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
          :total="filteredEvents.length"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>

    <!-- 事件详情对话框 -->
    <el-dialog v-model="showEventDetails" title="事件详情" width="600px">
      <div v-if="selectedEvent" class="event-details">
        <el-descriptions :column="2" border>
          <el-descriptions-item label="事件ID">
            {{ selectedEvent.id }}
          </el-descriptions-item>
          <el-descriptions-item label="时间">
            {{ formatDateTime(selectedEvent.timestamp) }}
          </el-descriptions-item>
          <el-descriptions-item label="类型">
            <el-tag :type="getEventTypeColor(selectedEvent.type)">
              {{ getEventTypeText(selectedEvent.type) }}
            </el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="严重程度">
            <el-tag :type="getSeverityColor(selectedEvent.severity)">
              {{ getSeverityText(selectedEvent.severity) }}
            </el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="用户" :span="2">
            {{ selectedEvent.user || "系统" }}
          </el-descriptions-item>
          <el-descriptions-item label="IP地址" :span="2">
            {{ selectedEvent.ip || "未知" }}
          </el-descriptions-item>
          <el-descriptions-item label="描述" :span="2">
            {{ selectedEvent.description }}
          </el-descriptions-item>
          <el-descriptions-item label="状态">
            <el-tag :type="selectedEvent.resolved ? 'success' : 'warning'">
              {{ selectedEvent.resolved ? "已解决" : "未解决" }}
            </el-tag>
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useDataSecurityStore } from "@/stores/dataSecurity";
import { SecurityMonitor, LoggingUtils } from "@/utils/security";
import { Refresh, Download, Delete } from "@element-plus/icons-vue";

const dataSecurityStore = useDataSecurityStore();

// 响应式数据
const filters = ref({
  type: "",
  severity: "",
  dateRange: [] as string[],
});

const currentPage = ref(1);
const pageSize = ref(20);
const showEventDetails = ref(false);
const selectedEvent = ref(null);

// 计算属性
const filteredEvents = computed(() => {
  let events = dataSecurityStore.securityEvents;

  // 按类型过滤
  if (filters.value.type) {
    events = events.filter((event) => event.type === filters.value.type);
  }

  // 按严重程度过滤
  if (filters.value.severity) {
    events = events.filter(
      (event) => event.severity === filters.value.severity
    );
  }

  // 按日期范围过滤
  if (filters.value.dateRange && filters.value.dateRange.length === 2) {
    const startDate = new Date(filters.value.dateRange[0]);
    const endDate = new Date(filters.value.dateRange[1]);
    events = events.filter((event) => {
      const eventDate = new Date(event.timestamp);
      return eventDate >= startDate && eventDate <= endDate;
    });
  }

  return events;
});

const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return filteredEvents.value.slice(start, end);
});

const totalEvents = computed(() => dataSecurityStore.securityEvents.length);
const criticalEvents = computed(
  () =>
    dataSecurityStore.securityEvents.filter(
      (event) => event.severity === "critical"
    ).length
);
const resolvedEvents = computed(
  () =>
    dataSecurityStore.securityEvents.filter((event) => event.resolved).length
);
const todayEvents = computed(() => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return dataSecurityStore.securityEvents.filter((event) => {
    const eventDate = new Date(event.timestamp);
    return eventDate >= today;
  }).length;
});

// 方法
const refreshEvents = async () => {
  try {
    // 同步安全事件
    const securityEvents = SecurityMonitor.getEvents();
    dataSecurityStore.securityEvents = securityEvents.map((event) => ({
      id: event.id,
      timestamp: event.timestamp,
      type: event.type as any,
      severity: event.severity,
      description: event.description,
      user: event.user,
      ip: event.ip,
      resolved: event.resolved,
    }));

    ElMessage.success("事件列表已刷新");
  } catch (error) {
    ElMessage.error("刷新事件列表失败");
  }
};

const exportEvents = () => {
  try {
    const events = filteredEvents.value;
    const csvContent = generateCSV(events);
    downloadCSV(csvContent, "security-events.csv");
    ElMessage.success("事件数据已导出");
  } catch (error) {
    ElMessage.error("导出失败");
  }
};

const clearEvents = async () => {
  try {
    await ElMessageBox.confirm(
      "确定要清空所有安全事件吗？此操作不可恢复。",
      "确认清空",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }
    );

    dataSecurityStore.securityEvents = [];
    ElMessage.success("安全事件已清空");
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
    type: "",
    severity: "",
    dateRange: [],
  };
  currentPage.value = 1;
  ElMessage.success("过滤器已清除");
};

const resolveEvent = async (event: any) => {
  try {
    await ElMessageBox.confirm("确定要标记此事件为已解决吗？", "确认操作", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    });

    event.resolved = true;

    // 同步到安全监控器
    SecurityMonitor.resolveEvent(event.id);

    ElMessage.success("事件已标记为已解决");
  } catch (error) {
    if (error !== "cancel") {
      ElMessage.error("操作失败");
    }
  }
};

const viewEventDetails = (event: any) => {
  selectedEvent.value = event;
  showEventDetails.value = true;
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

const getEventTypeColor = (type: string) => {
  const colorMap = {
    encryption: "primary",
    backup: "success",
    recovery: "warning",
    access: "info",
    error: "danger",
    system: "info",
  };
  return colorMap[type] || "info";
};

const getEventTypeText = (type: string) => {
  const textMap = {
    encryption: "加密",
    backup: "备份",
    recovery: "恢复",
    access: "访问",
    error: "错误",
    system: "系统",
  };
  return textMap[type] || type;
};

const getSeverityColor = (severity: string) => {
  const colorMap = {
    low: "success",
    medium: "warning",
    high: "danger",
    critical: "danger",
  };
  return colorMap[severity] || "info";
};

const getSeverityText = (severity: string) => {
  const textMap = {
    low: "低",
    medium: "中",
    high: "高",
    critical: "严重",
  };
  return textMap[severity] || severity;
};

const generateCSV = (events: any[]) => {
  const headers = ["时间", "类型", "严重程度", "描述", "用户", "IP", "状态"];
  const rows = events.map((event) => [
    formatDateTime(event.timestamp),
    getEventTypeText(event.type),
    getSeverityText(event.severity),
    event.description,
    event.user || "",
    event.ip || "",
    event.resolved ? "已解决" : "未解决",
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
  console.log("安全事件监控组件已加载");
  refreshEvents();
});
</script>

<style scoped>
.security-event-monitor {
  margin-top: 20px;
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

.event-filters {
  margin-bottom: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
}

.event-stats {
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

.event-list {
  margin-bottom: 20px;
}

.event-description {
  max-width: 200px;
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

.event-details {
  padding: 10px 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .event-filters .el-row {
    margin: 0 !important;
  }

  .event-filters .el-col {
    padding: 0 !important;
    margin-bottom: 10px;
  }

  .stat-item {
    margin-bottom: 10px;
  }
}
</style>
