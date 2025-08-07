<template>
  <div class="reports-container">
    <el-card class="reports-card">
      <template #header>
        <div class="card-header">
          <h2>📊 统计报表</h2>
          <p class="subtitle">专利数据统计与分析</p>
        </div>
      </template>

      <!-- 统计概览 -->
      <el-row :gutter="20" class="stats-section">
        <el-col :span="6">
          <el-card class="stat-card">
            <div class="stat-content">
              <div class="stat-icon">
                <el-icon><Document /></el-icon>
              </div>
              <div class="stat-info">
                <h3>{{ stats.totalPatents }}</h3>
                <p>总专利数</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="stat-card">
            <div class="stat-content">
              <div class="stat-icon">
                <el-icon><Check /></el-icon>
              </div>
              <div class="stat-info">
                <h3>{{ stats.approvedPatents }}</h3>
                <p>已授权</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="stat-card">
            <div class="stat-content">
              <div class="stat-icon">
                <el-icon><Clock /></el-icon>
              </div>
              <div class="stat-info">
                <h3>{{ stats.pendingPatents }}</h3>
                <p>待审核</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="stat-card">
            <div class="stat-content">
              <div class="stat-icon">
                <el-icon><Warning /></el-icon>
              </div>
              <div class="stat-info">
                <h3>{{ stats.expiringPatents }}</h3>
                <p>即将过期</p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <!-- 图表区域 -->
      <el-row :gutter="20" class="charts-section">
        <el-col :span="12">
          <el-card class="chart-card">
            <template #header>
              <div class="chart-header">
                <h3>专利状态分布</h3>
              </div>
            </template>
            <div class="chart-container">
              <div class="chart-placeholder">
                <el-icon><PieChart /></el-icon>
                <p>专利状态分布图表</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="chart-card">
            <template #header>
              <div class="chart-header">
                <h3>专利申请趋势</h3>
              </div>
            </template>
            <div class="chart-container">
              <div class="chart-placeholder">
                <el-icon><TrendCharts /></el-icon>
                <p>专利申请趋势图表</p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <!-- 详细报表 -->
      <el-row :gutter="20" class="reports-section">
        <el-col :span="24">
          <el-card class="report-card">
            <template #header>
              <div class="report-header">
                <h3>详细报表</h3>
                <div class="report-actions">
                  <el-button type="primary" @click="exportReport">
                    <el-icon><Download /></el-icon>
                    导出报表
                  </el-button>
                  <el-button @click="printReport">
                    <el-icon><Printer /></el-icon>
                    打印报表
                  </el-button>
                </div>
              </div>
            </template>
            <div class="report-content">
              <el-table :data="reportData" style="width: 100%">
                <el-table-column prop="date" label="日期" width="120" />
                <el-table-column
                  prop="newPatents"
                  label="新增专利"
                  width="100"
                />
                <el-table-column
                  prop="approvedPatents"
                  label="授权专利"
                  width="100"
                />
                <el-table-column
                  prop="rejectedPatents"
                  label="驳回专利"
                  width="100"
                />
                <el-table-column
                  prop="expiringPatents"
                  label="即将过期"
                  width="100"
                />
                <el-table-column prop="totalValue" label="总价值" width="120" />
                <el-table-column prop="status" label="状态" width="100">
                  <template #default="scope">
                    <el-tag
                      :type="
                        scope.row.status === '正常' ? 'success' : 'warning'
                      "
                    >
                      {{ scope.row.status }}
                    </el-tag>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { ElMessage } from "element-plus";
import {
  Document,
  Check,
  Clock,
  Warning,
  PieChart,
  TrendCharts,
  Download,
  Printer,
} from "@element-plus/icons-vue";

// 统计数据
const stats = reactive({
  totalPatents: 1250,
  approvedPatents: 856,
  pendingPatents: 234,
  expiringPatents: 45,
});

// 报表数据
const reportData = ref([
  {
    date: "2024-01-15",
    newPatents: 12,
    approvedPatents: 8,
    rejectedPatents: 2,
    expiringPatents: 3,
    totalValue: "¥2,450,000",
    status: "正常",
  },
  {
    date: "2024-01-14",
    newPatents: 15,
    approvedPatents: 10,
    rejectedPatents: 3,
    expiringPatents: 2,
    totalValue: "¥3,120,000",
    status: "正常",
  },
  {
    date: "2024-01-13",
    newPatents: 8,
    approvedPatents: 6,
    rejectedPatents: 1,
    expiringPatents: 4,
    totalValue: "¥1,890,000",
    status: "正常",
  },
]);

// 导出报表
const exportReport = () => {
  ElMessage.success("报表导出成功");
};

// 打印报表
const printReport = () => {
  ElMessage.success("报表打印成功");
};

onMounted(() => {
  console.log("统计报表页面已加载");
});
</script>

<style scoped>
.reports-container {
  padding: 20px;
  background-color: #f5f7fa;
  min-height: 100vh;
}

.reports-card {
  margin-bottom: 20px;
}

.card-header {
  text-align: center;
}

.card-header h2 {
  margin: 0;
  color: #303133;
  font-size: 24px;
}

.subtitle {
  margin: 10px 0 0 0;
  color: #909399;
  font-size: 14px;
}

.stats-section {
  margin-bottom: 20px;
}

.stat-card {
  height: 100%;
}

.stat-content {
  display: flex;
  align-items: center;
  padding: 20px;
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: white;
  font-size: 24px;
}

.stat-info h3 {
  margin: 0 0 5px 0;
  font-size: 28px;
  color: #303133;
  font-weight: bold;
}

.stat-info p {
  margin: 0;
  color: #909399;
  font-size: 14px;
}

.charts-section {
  margin-bottom: 20px;
}

.chart-card {
  height: 300px;
}

.chart-header h3 {
  margin: 0;
  color: #303133;
}

.chart-container {
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-placeholder {
  text-align: center;
  color: #909399;
}

.chart-placeholder .el-icon {
  font-size: 48px;
  margin-bottom: 10px;
}

.reports-section {
  margin-bottom: 20px;
}

.report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.report-header h3 {
  margin: 0;
  color: #303133;
}

.report-actions {
  display: flex;
  gap: 10px;
}

.report-content {
  padding: 10px 0;
}

:deep(.el-card__header) {
  background-color: #f8f9fa;
  border-bottom: 1px solid #ebeef5;
}
</style>
