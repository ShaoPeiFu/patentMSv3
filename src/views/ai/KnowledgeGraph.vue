<template>
  <div class="knowledge-graph">
    <!-- 页面标题 -->
    <div class="page-header">
      <div class="header-content">
        <div class="breadcrumb">
          <span class="breadcrumb-item" @click="$router.push('/dashboard/ai')"
            >AI辅助功能</span
          >
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-item active">知识图谱</span>
        </div>
        <h1 class="page-title">🧠 知识图谱分析</h1>
        <p class="page-subtitle">
          技术关联、发明人网络、引用关系与技术演进分析
        </p>
      </div>
      <div class="header-actions">
        <AppleButton variant="primary" @click="generateKnowledgeGraph">
          <el-icon><Refresh /></el-icon>
          生成图谱
        </AppleButton>
      </div>
    </div>

    <!-- 图谱类型选择 -->
    <div class="graph-type-selector">
      <AppleCard elevated>
        <template #header>
          <h3 class="section-title">图谱类型</h3>
        </template>
        <div class="graph-types">
          <div
            v-for="type in graphTypes"
            :key="type.value"
            class="graph-type-card"
            :class="{ active: selectedGraphType === type.value }"
            @click="selectedGraphType = type.value"
          >
            <div class="type-icon">
              <el-icon><component :is="type.icon" /></el-icon>
            </div>
            <div class="type-content">
              <h4>{{ type.label }}</h4>
              <p>{{ type.description }}</p>
            </div>
          </div>
        </div>
      </AppleCard>
    </div>

    <!-- 参数配置 -->
    <div class="parameters-section">
      <AppleCard elevated>
        <template #header>
          <h3 class="section-title">分析参数</h3>
        </template>
        <div class="parameters-grid">
          <div class="parameter-group">
            <label>专利范围</label>
            <el-select
              v-model="analysisParams.patentScope"
              placeholder="选择专利范围"
            >
              <el-option label="全部专利" value="all" />
              <el-option label="技术领域" value="technology" />
              <el-option label="时间范围" value="time" />
              <el-option label="申请人" value="applicant" />
            </el-select>
          </div>
          <div class="parameter-group">
            <label>关联深度</label>
            <el-slider
              v-model="analysisParams.depth"
              :min="1"
              :max="5"
              :marks="{ 1: '浅层', 3: '中层', 5: '深层' }"
              show-stops
            />
          </div>
          <div class="parameter-group">
            <label>节点数量限制</label>
            <el-input-number
              v-model="analysisParams.maxNodes"
              :min="10"
              :max="1000"
              :step="10"
            />
          </div>
          <div class="parameter-group">
            <label>时间范围</label>
            <el-date-picker
              v-model="analysisParams.timeRange"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </div>
        </div>
      </AppleCard>
    </div>

    <!-- 图谱展示区域 -->
    <div class="graph-container">
      <AppleCard elevated>
        <template #header>
          <div class="graph-header">
            <h3 class="section-title">
              {{ getGraphTypeLabel(selectedGraphType) }}
            </h3>
            <div class="graph-controls">
              <AppleButton size="small" @click="resetView">
                <el-icon><Refresh /></el-icon>
                重置视图
              </AppleButton>
              <AppleButton size="small" @click="exportGraph">
                <el-icon><Download /></el-icon>
                导出图谱
              </AppleButton>
              <AppleButton size="small" @click="toggleFullscreen">
                <el-icon><FullScreen /></el-icon>
                全屏显示
              </AppleButton>
            </div>
          </div>
        </template>

        <div class="graph-viewport">
          <div v-if="currentGraphData" class="graph-content">
            <div class="graph-stats">
              <div class="stat-item">
                <span class="stat-label">节点数</span>
                <span class="stat-value">{{ graphStats.nodes }}</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">连接数</span>
                <span class="stat-value">{{ graphStats.edges }}</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">{{ getStatLabel() }}</span>
                <span class="stat-value">{{ getStatValue() }}</span>
              </div>
            </div>
            <GraphRenderer
              :graph-data="currentGraphData"
              :selected-node="selectedNode"
              @node-selected="handleNodeSelected"
            />
            <div class="interaction-hints">
              <div class="hint-item">
                <el-icon><Mouse /></el-icon>
                <span>拖拽空白区域移动图谱</span>
              </div>
              <div class="hint-item">
                <el-icon><ZoomIn /></el-icon>
                <span>滚轮缩放图谱</span>
              </div>
              <div class="hint-item">
                <el-icon><Pointer /></el-icon>
                <span>点击节点查看详情</span>
              </div>
            </div>
          </div>
          <div v-else class="empty-graph">
            <el-icon><Connection /></el-icon>
            <p>请选择图谱类型并生成知识图谱</p>
          </div>
        </div>
      </AppleCard>
    </div>

    <!-- 图谱详情面板 -->
    <div class="graph-details" v-if="selectedNode">
      <AppleCard elevated>
        <template #header>
          <h3 class="section-title">节点详情</h3>
        </template>
        <div class="node-details">
          <div class="detail-item">
            <label>名称</label>
            <span>{{ selectedNode.name }}</span>
          </div>
          <div class="detail-item">
            <label>类型</label>
            <span>{{ selectedNode.type }}</span>
          </div>
          <div class="detail-item">
            <label>权重</label>
            <span>{{ selectedNode.weight }}</span>
          </div>
          <div class="detail-item">
            <label>连接数</label>
            <span>{{ selectedNode.connections }}</span>
          </div>
          <div class="detail-item" v-if="selectedNode.description">
            <label>描述</label>
            <p>{{ selectedNode.description }}</p>
          </div>
        </div>
      </AppleCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
import { useAIStore } from "@/stores/ai";
import { usePatentStore } from "@/stores/patent";
import { ElMessage } from "element-plus";
import AppleButton from "@/components/ui/AppleButton.vue";
import AppleCard from "@/components/ui/AppleCard.vue";
import GraphRenderer from "@/components/GraphRenderer.vue";
import {
  Refresh,
  Download,
  FullScreen,
  Connection,
  User,
  Share,
  TrendCharts,
  Mouse,
  Pointer,
} from "@element-plus/icons-vue";

const aiStore = useAIStore();
const patentStore = usePatentStore();

// 图谱类型定义
const graphTypes = [
  {
    value: "technology",
    label: "技术关联分析",
    description: "分析专利技术之间的关联关系和相似性",
    icon: Connection,
  },
  {
    value: "inventor",
    label: "发明人网络图",
    description: "展示发明人之间的合作关系网络",
    icon: User,
  },
  {
    value: "citation",
    label: "引用关系图",
    description: "分析专利之间的引用和被引用关系",
    icon: Share,
  },
  {
    value: "evolution",
    label: "技术演进路径",
    description: "展示技术发展的演进路径和关键节点",
    icon: TrendCharts,
  },
];

// 响应式数据
const selectedGraphType = ref("technology");
const selectedNode = ref(null);
const currentGraphData = ref(null);

// 分析参数
const analysisParams = ref({
  patentScope: "all",
  depth: 3,
  maxNodes: 100,
  timeRange: null,
});

// 图谱统计信息
const graphStats = ref({
  nodes: 0,
  edges: 0,
  domains: 0,
  inventors: 0,
  collaborations: 0,
  coreInventors: 0,
  citedPatents: 0,
  citingPatents: 0,
  citationDepth: 0,
  techNodes: 0,
  evolutionStages: 0,
  breakthroughs: 0,
});

// 计算属性
const getGraphTypeLabel = (type: string) => {
  const graphType = graphTypes.find((t) => t.value === type);
  return graphType ? graphType.label : "知识图谱";
};

// 生成知识图谱
const generateKnowledgeGraph = async () => {
  try {
    ElMessage.info("正在生成知识图谱...");

    // 根据选择的图谱类型确定参数
    let patentScope: "all" | "technology" | "time" | "applicant";
    switch (selectedGraphType.value) {
      case "technology":
        patentScope = "technology";
        break;
      case "inventor":
        patentScope = "applicant";
        break;
      case "citation":
        patentScope = "time";
        break;
      case "evolution":
        patentScope = "all";
        break;
      default:
        patentScope = "technology";
    }

    // 调用AI Store生成图谱
    const graphData = await aiStore.generateKnowledgeGraph({
      patentScope,
      depth: analysisParams.value.depth,
      maxNodes: analysisParams.value.maxNodes,
      timeRange: analysisParams.value.timeRange,
    });

    currentGraphData.value = graphData;
    updateGraphStats(graphData);

    ElMessage.success("知识图谱生成完成！");
  } catch (error) {
    ElMessage.error("图谱生成失败: " + (error as Error).message);
  }
};

// 更新图谱统计信息
const updateGraphStats = (graphData: any) => {
  graphStats.value = {
    nodes: graphData.statistics.nodes,
    edges: graphData.statistics.edges,
    domains: graphData.statistics.domains || 0,
    inventors: graphData.statistics.inventors || 0,
    collaborations: graphData.statistics.collaborations || 0,
    coreInventors: graphData.statistics.coreInventors || 0,
    citedPatents: graphData.statistics.citedPatents || 0,
    citingPatents: graphData.statistics.citingPatents || 0,
    citationDepth: graphData.statistics.citationDepth || 0,
    techNodes: graphData.statistics.techNodes || 0,
    evolutionStages: graphData.statistics.evolutionStages || 0,
    breakthroughs: graphData.statistics.breakthroughs || 0,
  };
};

// 处理节点选择
const handleNodeSelected = (node: any) => {
  selectedNode.value = node;
};

// 获取统计标签
const getStatLabel = () => {
  switch (selectedGraphType.value) {
    case "technology":
      return "技术领域";
    case "inventor":
      return "发明人数";
    case "citation":
      return "引用专利";
    case "evolution":
      return "技术节点";
    default:
      return "统计项";
  }
};

// 获取统计值
const getStatValue = () => {
  switch (selectedGraphType.value) {
    case "technology":
      return graphStats.value.domains;
    case "inventor":
      return graphStats.value.inventors;
    case "citation":
      return graphStats.value.citedPatents;
    case "evolution":
      return graphStats.value.techNodes;
    default:
      return 0;
  }
};

// 重置视图
const resetView = () => {
  selectedNode.value = null;
  ElMessage.info("视图已重置");
};

// 导出图谱
const exportGraph = () => {
  ElMessage.success("图谱导出功能开发中...");
};

// 全屏显示
const toggleFullscreen = () => {
  ElMessage.info("全屏显示功能开发中...");
};

// 组件挂载时初始化
onMounted(async () => {
  await nextTick();
  // 默认生成技术关联分析图
  await generateKnowledgeGraph();
});
</script>

<style scoped>
.knowledge-graph {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

/* 页面标题 */
.page-header {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.7) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 32px;
  margin-bottom: 32px;
  color: var(--apple-text-primary);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: var(--apple-shadow-soft);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-content {
  flex: 1;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 14px;
}

.breadcrumb-item {
  color: var(--apple-text-secondary);
  cursor: pointer;
  transition: color 0.3s ease;
}

.breadcrumb-item:hover {
  color: var(--apple-accent);
}

.breadcrumb-item.active {
  color: var(--apple-text-primary);
  font-weight: 600;
  cursor: default;
}

.breadcrumb-separator {
  color: var(--apple-text-secondary);
}

.page-title {
  font-size: 2.5em;
  font-weight: 700;
  margin: 0 0 8px 0;
  background: linear-gradient(135deg, var(--apple-accent), #5856d6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
}

.page-subtitle {
  font-size: 1.1em;
  color: var(--apple-text-secondary);
  margin: 0;
}

.header-actions {
  flex-shrink: 0;
}

/* 图谱类型选择器 */
.graph-type-selector {
  margin-bottom: 32px;
}

.graph-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.graph-type-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  border-radius: 16px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 16px;
}

.graph-type-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--apple-shadow-medium);
  border-color: var(--apple-accent);
}

.graph-type-card.active {
  border-color: var(--apple-accent);
  background: rgba(88, 86, 214, 0.1);
}

.type-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--apple-accent), #5856d6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  flex-shrink: 0;
}

.type-content h4 {
  font-size: 1.1em;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: var(--apple-text-primary);
}

.type-content p {
  font-size: 0.9em;
  color: var(--apple-text-secondary);
  margin: 0;
  line-height: 1.4;
}

/* 参数配置 */
.parameters-section {
  margin-bottom: 32px;
}

.parameters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.parameter-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.parameter-group label {
  font-weight: 600;
  color: var(--apple-text-primary);
  font-size: 0.9em;
}

/* 图谱展示区域 */
.graph-container {
  margin-bottom: 32px;
}

.graph-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.graph-controls {
  display: flex;
  gap: 12px;
}

.graph-viewport {
  position: relative;
  min-height: 600px;
}

.graph-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.graph-stats {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stat-label {
  font-size: 0.8em;
  color: var(--apple-text-secondary);
}

.stat-value {
  font-size: 1.2em;
  font-weight: 600;
  color: var(--apple-accent);
}

.graph-canvas {
  flex: 1;
  min-height: 500px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--apple-text-secondary);
  font-size: 1.1em;
}

.empty-graph {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  color: var(--apple-text-secondary);
  font-size: 1.1em;
}

.empty-graph .el-icon {
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.5;
}

.empty-graph p {
  margin: 0;
}

.interaction-hints {
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 16px;
  z-index: 5;
}

.hint-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  font-size: 12px;
  color: var(--apple-text-secondary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.hint-item .el-icon {
  font-size: 14px;
  color: var(--apple-accent);
}

/* 图谱详情面板 */
.graph-details {
  margin-bottom: 32px;
}

.node-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.detail-item label {
  font-weight: 600;
  color: var(--apple-text-primary);
  font-size: 0.9em;
}

.detail-item span,
.detail-item p {
  color: var(--apple-text-secondary);
  font-size: 0.95em;
  line-height: 1.4;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .knowledge-graph {
    padding: 16px;
  }

  .page-header {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .graph-types {
    grid-template-columns: 1fr;
  }

  .parameters-grid {
    grid-template-columns: 1fr;
  }

  .graph-header {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .graph-controls {
    width: 100%;
    justify-content: center;
  }

  .graph-stats {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
