<template>
  <div class="graph-renderer">
    <div
      class="graph-container"
      ref="graphContainer"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseUp"
      @wheel="handleWheel"
      @dblclick="resetView"
    >
      <!-- 技术关联分析图 -->
      <div v-if="graphType === 'technology'" class="technology-graph">
        <div class="graph-nodes" :style="transformStyle">
          <div
            v-for="node in graphData.nodes"
            :key="node.id"
            class="graph-node technology-node"
            :style="getNodeStyle(node)"
            @click="selectNode(node)"
          >
            <div class="node-icon">
              <el-icon><Connection /></el-icon>
            </div>
            <div class="node-label">{{ node.name }}</div>
            <div class="node-weight">{{ (node.weight * 100).toFixed(0) }}%</div>
          </div>
        </div>
        <div class="graph-connections" :style="transformStyle">
          <svg class="connections-svg">
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#007aff" />
              </marker>
            </defs>
            <line
              v-for="edge in graphData.edges"
              :key="`${edge.source}-${edge.target}`"
              :x1="getNodePosition(edge.source).x"
              :y1="getNodePosition(edge.source).y"
              :x2="getNodePosition(edge.target).x"
              :y2="getNodePosition(edge.target).y"
              :stroke-width="edge.weight * 3"
              :stroke-opacity="edge.weight"
              stroke="#007aff"
              marker-end="url(#arrowhead)"
            />
          </svg>
        </div>
      </div>

      <!-- 发明人网络图 -->
      <div v-if="graphType === 'inventor'" class="inventor-graph">
        <div class="graph-nodes" :style="transformStyle">
          <div
            v-for="node in graphData.nodes"
            :key="node.id"
            class="graph-node inventor-node"
            :style="getNodeStyle(node)"
            @click="selectNode(node)"
          >
            <div class="node-icon">
              <el-icon><User /></el-icon>
            </div>
            <div class="node-label">{{ node.name }}</div>
            <div class="node-patents">
              {{ node.metadata?.patents || 0 }} 专利
            </div>
          </div>
        </div>
        <div class="graph-connections" :style="transformStyle">
          <svg class="connections-svg">
            <defs>
              <marker
                id="collaboration-arrow"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#34c759" />
              </marker>
            </defs>
            <line
              v-for="edge in graphData.edges"
              :key="`${edge.source}-${edge.target}`"
              :x1="getNodePosition(edge.source).x"
              :y1="getNodePosition(edge.source).y"
              :x2="getNodePosition(edge.target).x"
              :y2="getNodePosition(edge.target).y"
              :stroke-width="edge.weight * 3"
              :stroke-opacity="edge.weight"
              stroke="#34c759"
              marker-end="url(#collaboration-arrow)"
            />
          </svg>
        </div>
      </div>

      <!-- 引用关系图 -->
      <div v-if="graphType === 'citation'" class="citation-graph">
        <div class="graph-nodes" :style="transformStyle">
          <div
            v-for="node in graphData.nodes"
            :key="node.id"
            class="graph-node patent-node"
            :style="getNodeStyle(node)"
            @click="selectNode(node)"
          >
            <div class="node-icon">
              <el-icon><Document /></el-icon>
            </div>
            <div class="node-label">{{ node.name }}</div>
            <div class="node-year">{{ node.metadata?.year || "未知" }}</div>
          </div>
        </div>
        <div class="graph-connections" :style="transformStyle">
          <svg class="connections-svg">
            <defs>
              <marker
                id="citation-arrow"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#ff9500" />
              </marker>
            </defs>
            <line
              v-for="edge in graphData.edges"
              :key="`${edge.source}-${edge.target}`"
              :x1="getNodePosition(edge.source).x"
              :y1="getNodePosition(edge.source).y"
              :x2="getNodePosition(edge.target).x"
              :y2="getNodePosition(edge.target).y"
              :stroke-width="edge.weight * 3"
              :stroke-opacity="edge.weight"
              stroke="#ff9500"
              marker-end="url(#citation-arrow)"
            />
          </svg>
        </div>
      </div>

      <!-- 技术演进路径 -->
      <div v-if="graphType === 'evolution'" class="evolution-graph">
        <div class="graph-nodes" :style="transformStyle">
          <div
            v-for="node in graphData.nodes"
            :key="node.id"
            class="graph-node stage-node"
            :style="getNodeStyle(node)"
            @click="selectNode(node)"
          >
            <div class="node-icon">
              <el-icon><TrendCharts /></el-icon>
            </div>
            <div class="node-label">{{ node.name }}</div>
            <div class="node-year">{{ node.metadata?.year || "未知" }}</div>
          </div>
        </div>
        <div class="graph-connections" :style="transformStyle">
          <svg class="connections-svg">
            <defs>
              <marker
                id="evolution-arrow"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#5856d6" />
              </marker>
            </defs>
            <line
              v-for="edge in graphData.edges"
              :key="`${edge.source}-${edge.target}`"
              :x1="getNodePosition(edge.source).x"
              :y1="getNodePosition(edge.source).y"
              :x2="getNodePosition(edge.target).x"
              :y2="getNodePosition(edge.target).y"
              :stroke-width="edge.weight * 3"
              :stroke-opacity="edge.weight"
              stroke="#5856d6"
              marker-end="url(#evolution-arrow)"
            />
          </svg>
        </div>
      </div>

      <!-- 控制按钮 -->
      <div class="graph-controls">
        <button class="control-btn zoom-in" @click="zoomIn" title="放大">
          <el-icon><ZoomIn /></el-icon>
        </button>
        <button class="control-btn zoom-out" @click="zoomOut" title="缩小">
          <el-icon><ZoomOut /></el-icon>
        </button>
        <button
          class="control-btn fit-view"
          @click="fitToView"
          title="自动适应"
        >
          <el-icon><FullScreen /></el-icon>
        </button>
        <button class="control-btn reset" @click="resetView" title="重置视图">
          <el-icon><Refresh /></el-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
import {
  Connection,
  User,
  Document,
  TrendCharts,
  ZoomIn,
  ZoomOut,
  Refresh,
  FullScreen,
} from "@element-plus/icons-vue";
import type { KnowledgeGraphData, GraphNode } from "@/types/ai";

interface Props {
  graphData: KnowledgeGraphData;
  selectedNode?: GraphNode | null;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  nodeSelected: [node: GraphNode];
}>();

const graphContainer = ref<HTMLElement>();
const graphType = computed(() => props.graphData.type);

// 拖拽和缩放状态
const isDragging = ref(false);
const dragStart = ref({ x: 0, y: 0 });
const currentPosition = ref({ x: 0, y: 0 });
const scale = ref(1);
const lastMousePosition = ref({ x: 0, y: 0 });

// 节点位置计算
const nodePositions = ref<Record<string, { x: number; y: number }>>({});

// 变换样式
const transformStyle = computed(() => ({
  transform: `translate(${currentPosition.value.x}px, ${currentPosition.value.y}px) scale(${scale.value})`,
}));

const getNodeStyle = (node: GraphNode) => {
  const position = nodePositions.value[node.id];
  if (!position) return {};

  return {
    transform: `translate(${position.x}px, ${position.y}px)`,
    opacity: node.weight,
  };
};

const getNodePosition = (nodeId: string) => {
  return nodePositions.value[nodeId] || { x: 0, y: 0 };
};

const selectNode = (node: GraphNode) => {
  emit("nodeSelected", node);
};

// 鼠标事件处理
const handleMouseDown = (event: MouseEvent) => {
  // 检查是否点击在节点上
  const target = event.target as HTMLElement;
  if (target.closest(".graph-node")) {
    return; // 如果点击的是节点，不启动拖拽
  }

  isDragging.value = true;
  dragStart.value = {
    x: event.clientX - currentPosition.value.x,
    y: event.clientY - currentPosition.value.y,
  };
  event.preventDefault();
};

const handleMouseMove = (event: MouseEvent) => {
  // 更新鼠标位置
  const rect = graphContainer.value?.getBoundingClientRect();
  if (rect) {
    lastMousePosition.value = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  if (isDragging.value) {
    currentPosition.value = {
      x: event.clientX - dragStart.value.x,
      y: event.clientY - dragStart.value.y,
    };
  }
};

const handleMouseUp = () => {
  isDragging.value = false;
};

// 参考技术族谱的缩放逻辑
const handleWheel = (event: WheelEvent) => {
  event.preventDefault();

  const rect = graphContainer.value?.getBoundingClientRect();
  if (!rect) return;

  // 获取鼠标在容器中的位置
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // 计算缩放前鼠标位置相对于内容的位置
  const contentX = (mouseX - currentPosition.value.x) / scale.value;
  const contentY = (mouseY - currentPosition.value.y) / scale.value;

  // 计算新的缩放级别
  const delta = event.deltaY > 0 ? -0.1 : 0.1;
  const newScale = Math.max(0.3, Math.min(3, scale.value + delta));

  // 更新缩放级别
  scale.value = newScale;

  // 调整位置，使鼠标位置保持不变
  currentPosition.value = {
    x: mouseX - contentX * newScale,
    y: mouseY - contentY * newScale,
  };
};

// 参考技术族谱的按钮缩放
const zoomIn = () => {
  const newScale = Math.min(3, scale.value * 1.2);
  const scaleRatio = newScale / scale.value;

  // 以容器中心为缩放中心
  const rect = graphContainer.value?.getBoundingClientRect();
  if (rect) {
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    currentPosition.value = {
      x: centerX - (centerX - currentPosition.value.x) * scaleRatio,
      y: centerY - (centerY - currentPosition.value.y) * scaleRatio,
    };
  }

  scale.value = newScale;
};

const zoomOut = () => {
  const newScale = Math.max(0.3, scale.value / 1.2);
  const scaleRatio = newScale / scale.value;

  // 以容器中心为缩放中心
  const rect = graphContainer.value?.getBoundingClientRect();
  if (rect) {
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    currentPosition.value = {
      x: centerX - (centerX - currentPosition.value.x) * scaleRatio,
      y: centerY - (centerY - currentPosition.value.y) * scaleRatio,
    };
  }

  scale.value = newScale;
};

// 自动适应视图（参考技术族谱的fitToView）
const fitToView = () => {
  if (!graphContainer.value || props.graphData.nodes.length === 0) return;

  const rect = graphContainer.value.getBoundingClientRect();
  const containerWidth = rect.width;
  const containerHeight = rect.height;

  // 计算所有节点的边界
  const positions = Object.values(nodePositions.value);
  if (positions.length === 0) return;

  const minX = Math.min(...positions.map((p) => p.x));
  const maxX = Math.max(...positions.map((p) => p.x));
  const minY = Math.min(...positions.map((p) => p.y));
  const maxY = Math.max(...positions.map((p) => p.y));

  // 添加边距
  const padding = 100;
  const contentWidth = maxX - minX + padding * 2;
  const contentHeight = maxY - minY + padding * 2;

  // 计算合适的缩放比例
  const scaleX = (containerWidth - padding * 2) / contentWidth;
  const scaleY = (containerHeight - padding * 2) / contentHeight;
  const newScale = Math.min(scaleX, scaleY, 1);

  scale.value = newScale;

  // 计算居中位置
  const scaledContentWidth = contentWidth * newScale;
  const scaledContentHeight = contentHeight * newScale;

  currentPosition.value = {
    x: (containerWidth - scaledContentWidth) / 2 - minX * newScale,
    y: (containerHeight - scaledContentHeight) / 2 - minY * newScale,
  };
};

// 重置视图
const resetView = () => {
  currentPosition.value = { x: 0, y: 0 };
  scale.value = 1;
  calculateNodePositions();
};

// 计算节点位置
const calculateNodePositions = () => {
  if (!graphContainer.value) return;

  const container = graphContainer.value;
  const width = container.clientWidth;
  const height = container.clientHeight;
  const nodes = props.graphData.nodes;

  // 根据图谱类型选择不同的布局
  switch (props.graphData.type) {
    case "technology":
      // 技术关联图使用力导向布局
      calculateForceLayout(nodes, width, height);
      break;
    case "inventor":
      // 发明人网络使用圆形布局
      calculateCircularLayout(nodes, width, height);
      break;
    case "citation":
      // 引用关系使用时间线布局
      calculateTimelineLayout(nodes, width, height);
      break;
    case "evolution":
      // 技术演进使用线性布局
      calculateLinearLayout(nodes, width, height);
      break;
    default:
      calculateCircularLayout(nodes, width, height);
  }
};

// 力导向布局
const calculateForceLayout = (
  nodes: GraphNode[],
  width: number,
  height: number
) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) * 0.3;

  nodes.forEach((node, index) => {
    const angle = (index / nodes.length) * 2 * Math.PI;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    nodePositions.value[node.id] = { x, y };
  });
};

// 圆形布局
const calculateCircularLayout = (
  nodes: GraphNode[],
  width: number,
  height: number
) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) * 0.25;

  nodes.forEach((node, index) => {
    const angle = (index / nodes.length) * 2 * Math.PI;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    nodePositions.value[node.id] = { x, y };
  });
};

// 时间线布局
const calculateTimelineLayout = (
  nodes: GraphNode[],
  width: number,
  height: number
) => {
  const padding = 100;
  const availableWidth = width - 2 * padding;
  const spacing = availableWidth / (nodes.length - 1);

  nodes.forEach((node, index) => {
    const x = padding + index * spacing;
    const y = height / 2 + (index % 2 === 0 ? -50 : 50);

    nodePositions.value[node.id] = { x, y };
  });
};

// 线性布局
const calculateLinearLayout = (
  nodes: GraphNode[],
  width: number,
  height: number
) => {
  const padding = 100;
  const availableWidth = width - 2 * padding;
  const spacing = availableWidth / (nodes.length - 1);

  nodes.forEach((node, index) => {
    const x = padding + index * spacing;
    const y = height / 2;

    nodePositions.value[node.id] = { x, y };
  });
};

onMounted(async () => {
  await nextTick();
  calculateNodePositions();
});
</script>

<style scoped>
.graph-renderer {
  width: 100%;
  height: 100%;
  position: relative;
}

.graph-container {
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  cursor: grab;
  user-select: none;
}

.graph-container:active {
  cursor: grabbing;
}

.graph-nodes {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: transform 0.1s ease;
}

.graph-node {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  transform-origin: center;
  user-select: none;
}

.graph-node:hover {
  transform: scale(1.1);
  z-index: 10;
}

.graph-node:active {
  cursor: grabbing;
}

.technology-node {
  background: linear-gradient(135deg, #007aff, #5856d6);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
}

.inventor-node {
  background: linear-gradient(135deg, #34c759, #30d158);
  color: white;
  box-shadow: 0 4px 12px rgba(52, 199, 89, 0.3);
}

.patent-node {
  background: linear-gradient(135deg, #ff9500, #ffcc00);
  color: white;
  box-shadow: 0 4px 12px rgba(255, 149, 0, 0.3);
}

.stage-node {
  background: linear-gradient(135deg, #5856d6, #007aff);
  color: white;
  box-shadow: 0 4px 12px rgba(88, 86, 214, 0.3);
}

.node-icon {
  font-size: 20px;
  margin-bottom: 4px;
}

.node-label {
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 2px;
}

.node-weight,
.node-patents,
.node-year {
  font-size: 10px;
  opacity: 0.8;
}

.graph-connections {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: transform 0.1s ease;
}

.connections-svg {
  width: 100%;
  height: 100%;
}

.connections-svg line {
  transition: all 0.3s ease;
}

.connections-svg line:hover {
  stroke-width: 4;
  stroke-opacity: 1;
}

/* 控制按钮 */
.graph-controls {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 10;
}

.control-btn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  color: var(--apple-text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.control-btn:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.control-btn:active {
  transform: translateY(0);
}

.control-btn .el-icon {
  font-size: 16px;
}
</style>
