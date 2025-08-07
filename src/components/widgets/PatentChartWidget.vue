<template>
  <div class="patent-chart-widget">
    <div class="chart-header">
      <h3>专利状态分布</h3>
      <el-select v-model="chartType" size="small" @change="updateChart">
        <el-option label="饼图" value="pie" />
        <el-option label="柱状图" value="bar" />
        <el-option label="折线图" value="line" />
      </el-select>
    </div>

    <div class="chart-container">
      <div class="chart-placeholder">
        <el-icon><PieChart /></el-icon>
        <p>{{ getChartDescription() }}</p>
        <div class="chart-legend">
          <div v-for="item in chartData" :key="item.name" class="legend-item">
            <div
              class="legend-color"
              :style="{ backgroundColor: item.color }"
            ></div>
            <span class="legend-label">{{ item.name }}</span>
            <span class="legend-value">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="chart-footer">
      <el-button size="small" @click="refreshChart">
        <el-icon><Refresh /></el-icon>
        刷新数据
      </el-button>
      <el-button size="small" @click="exportChart">
        <el-icon><Download /></el-icon>
        导出图表
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { PieChart, Refresh, Download } from "@element-plus/icons-vue";

// Props
interface Props {
  widget?: any;
  config?: any;
}

const props = withDefaults(defineProps<Props>(), {
  widget: () => ({}),
  config: () => ({}),
});

// 响应式数据
const chartType = ref("pie");
const chartData = ref([
  { name: "已通过", value: 98, color: "#67c23a" },
  { name: "待审核", value: 23, color: "#e6a23c" },
  { name: "已拒绝", value: 35, color: "#f56c6c" },
  { name: "草稿", value: 12, color: "#909399" },
]);

// 方法
const loadChartData = async () => {
  try {
    // 模拟加载数据
    await new Promise((resolve) => setTimeout(resolve, 500));

    // 这里可以根据实际需求加载数据
    console.log("图表数据已加载");
  } catch (error) {
    console.error("加载图表数据失败:", error);
  }
};

const updateChart = () => {
  // 更新图表类型
  console.log("图表类型已更新:", chartType.value);
};

const refreshChart = async () => {
  await loadChartData();
  console.log("图表数据已刷新");
};

const exportChart = () => {
  // 导出图表功能
  console.log("导出图表功能开发中");
};

const getChartDescription = () => {
  const descriptions = {
    pie: "专利状态饼图",
    bar: "专利状态柱状图",
    line: "专利趋势折线图",
  };
  return descriptions[chartType.value] || "专利数据图表";
};

onMounted(() => {
  loadChartData();
});
</script>

<style scoped>
.patent-chart-widget {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 16px 0;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 16px;
}

.chart-header h3 {
  margin: 0;
  color: #303133;
  font-size: 16px;
  font-weight: 500;
}

.chart-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border-radius: 8px;
  min-height: 200px;
  margin-bottom: 16px;
}

.chart-placeholder {
  text-align: center;
  color: #909399;
}

.chart-placeholder .el-icon {
  font-size: 48px;
  margin-bottom: 12px;
  color: #c0c4cc;
}

.chart-placeholder p {
  margin: 0 0 20px 0;
  font-size: 14px;
}

.chart-legend {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 2px;
}

.legend-label {
  color: #606266;
  min-width: 60px;
}

.legend-value {
  color: #303133;
  font-weight: 500;
}

.chart-footer {
  display: flex;
  gap: 8px;
  justify-content: center;
}

/* 深色模式支持 */
:deep(.dark-mode) .chart-header h3 {
  color: #ffffff;
}

:deep(.dark-mode) .chart-container {
  background: #2a2a2a;
}

:deep(.dark-mode) .legend-label {
  color: #c0c4cc;
}

:deep(.dark-mode) .legend-value {
  color: #ffffff;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chart-header {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  .chart-container {
    min-height: 150px;
  }

  .chart-placeholder .el-icon {
    font-size: 32px;
  }

  .chart-footer {
    flex-direction: column;
  }
}
</style>
