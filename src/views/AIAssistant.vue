<template>
  <div class="ai-assistant">
    <!-- 动态背景 -->
    <div class="page-background">
      <div class="floating-elements">
        <div class="element element-1"></div>
        <div class="element element-2"></div>
        <div class="element element-3"></div>
      </div>
    </div>

    <!-- 页面标题区域 -->
    <div class="page-header">
      <div class="header-content">
        <div class="breadcrumb">
          <span class="breadcrumb-item">首页</span>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-item active">AI辅助功能</span>
        </div>
        <h1 class="page-title">🤖 AI智能助手</h1>
        <p class="page-subtitle">
          专利相似性检测、自动分类建议、智能摘要生成、风险预警系统
        </p>
      </div>
      <div class="header-actions">
        <AppleButton
          variant="primary"
          @click="showConfigDialog = true"
          ref="configBtn"
        >
          <el-icon><Setting /></el-icon>
          AI配置
        </AppleButton>
      </div>
    </div>

    <!-- 统计卡片 -->
    <div class="statistics-section">
      <div class="stats-grid">
        <div
          class="stat-card"
          v-for="(stat, index) in aiStats"
          :key="stat.label"
          :style="{ animationDelay: `${index * 0.1}s` }"
          ref="statCards"
        >
          <div class="stat-icon">
            <el-icon><component :is="stat.icon" /></el-icon>
          </div>
          <div class="stat-content">
            <div class="stat-number">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
            <div class="stat-trend" :class="stat.trend">
              <el-icon><component :is="stat.trendIcon" /></el-icon>
              <span>{{ stat.trendValue }}</span>
            </div>
          </div>
          <div class="stat-glow"></div>
        </div>
      </div>
    </div>

    <!-- 功能区域 -->
    <div class="features-section">
      <AppleCard elevated>
        <template #header>
          <h3 class="section-title">AI功能模块</h3>
        </template>

        <div class="features-grid">
          <!-- 专利相似性检测 -->
          <div class="feature-card" @click="navigateToSimilarity">
            <div class="feature-icon">
              <el-icon><Search /></el-icon>
            </div>
            <h4>专利相似性检测</h4>
            <p>智能分析专利相似度，识别潜在冲突和机会</p>
            <div class="feature-stats">
              <span>检测次数: {{ similarityStatistics.total }}</span>
              <span>高相似度: {{ similarityStatistics.highSimilarity }}</span>
            </div>
          </div>

          <!-- 自动分类建议 -->
          <div class="feature-card" @click="navigateToClassification">
            <div class="feature-icon">
              <el-icon><Folder /></el-icon>
            </div>
            <h4>自动分类建议</h4>
            <p>基于专利内容智能推荐合适的分类类别</p>
            <div class="feature-stats">
              <span>建议数量: {{ classificationSuggestions.length }}</span>
              <span>平均置信度: {{ averageConfidence }}%</span>
            </div>
          </div>

          <!-- 智能摘要生成 -->
          <div class="feature-card" @click="navigateToSummary">
            <div class="feature-icon">
              <el-icon><Document /></el-icon>
            </div>
            <h4>智能摘要生成</h4>
            <p>自动生成技术、商业、法律等多维度摘要</p>
            <div class="feature-stats">
              <span>生成数量: {{ smartSummaries.length }}</span>
              <span>摘要类型: 4种</span>
            </div>
          </div>

          <!-- 风险预警系统 -->
          <div class="feature-card" @click="navigateToRiskAlert">
            <div class="feature-icon">
              <el-icon><Warning /></el-icon>
            </div>
            <h4>风险预警系统</h4>
            <p>实时监控专利风险，提供预警和建议</p>
            <div class="feature-stats">
              <span>活跃预警: {{ activeRiskAlerts.length }}</span>
              <span>高风险: {{ criticalRiskAlerts.length }}</span>
            </div>
          </div>

          <!-- 知识图谱分析 -->
          <div class="feature-card" @click="navigateToKnowledgeGraph">
            <div class="feature-icon">
              <el-icon><Connection /></el-icon>
            </div>
            <h4>知识图谱分析</h4>
            <p>技术关联、发明人网络、引用关系与技术演进分析</p>
            <div class="feature-stats">
              <span>图谱数量: {{ knowledgeGraphs.length }}</span>
              <span>分析类型: 4种</span>
            </div>
          </div>
        </div>
      </AppleCard>
    </div>

    <!-- 快速分析区域 -->
    <div class="quick-analysis-section">
      <AppleCard elevated>
        <template #header>
          <h3 class="section-title">快速AI分析</h3>
        </template>

        <div class="analysis-form">
          <div class="form-row">
            <div class="form-item">
              <label>选择专利</label>
              <el-select
                v-model="selectedPatentId"
                placeholder="请选择要分析的专利"
                style="width: 100%"
              >
                <el-option
                  v-for="patent in availablePatents"
                  :key="patent.id"
                  :label="patent.title"
                  :value="patent.id"
                />
              </el-select>
            </div>
            <div class="form-item">
              <label>分析类型</label>
              <el-select
                v-model="analysisType"
                placeholder="选择分析类型"
                style="width: 100%"
              >
                <el-option label="全面分析" value="comprehensive" />
                <el-option label="相似性检测" value="similarity" />
                <el-option label="分类建议" value="classification" />
                <el-option label="摘要生成" value="summary" />
                <el-option label="风险预警" value="risk" />
                <el-option label="知识图谱" value="knowledge-graph" />
              </el-select>
            </div>
          </div>

          <div class="form-actions">
            <AppleButton
              variant="primary"
              :loading="analyzing"
              @click="performAnalysis"
            >
              <el-icon><MagicStick /></el-icon>
              {{ analyzing ? "分析中..." : "开始分析" }}
            </AppleButton>
          </div>
        </div>
      </AppleCard>
    </div>

    <!-- AI配置对话框 -->
    <el-dialog
      v-model="showConfigDialog"
      title="AI配置设置"
      width="600px"
      class="apple-dialog"
    >
      <div class="config-form">
        <el-form :model="aiConfig" label-width="120px">
          <el-form-item label="相似性检测">
            <el-switch v-model="aiConfig.enableSimilarityDetection" />
          </el-form-item>
          <el-form-item label="分类建议">
            <el-switch v-model="aiConfig.enableClassificationSuggestion" />
          </el-form-item>
          <el-form-item label="智能摘要">
            <el-switch v-model="aiConfig.enableSmartSummary" />
          </el-form-item>
          <el-form-item label="风险预警">
            <el-switch v-model="aiConfig.enableRiskAlert" />
          </el-form-item>
          <el-form-item label="知识图谱">
            <el-switch v-model="aiConfig.enableKnowledgeGraph" />
          </el-form-item>
          <el-form-item label="自动分析">
            <el-switch v-model="aiConfig.autoAnalysis" />
          </el-form-item>
          <el-form-item label="相似性阈值">
            <el-slider
              v-model="aiConfig.similarityThreshold"
              :min="0"
              :max="1"
              :step="0.1"
              show-input
            />
          </el-form-item>
          <el-form-item label="风险预警阈值">
            <el-slider
              v-model="aiConfig.riskAlertThreshold"
              :min="0"
              :max="1"
              :step="0.1"
              show-input
            />
          </el-form-item>
        </el-form>
      </div>

      <template #footer>
        <div class="dialog-footer">
          <AppleButton @click="showConfigDialog = false">取消</AppleButton>
          <AppleButton variant="primary" @click="saveConfig"
            >保存配置</AppleButton
          >
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import { useAIStore } from "@/stores/ai";
import { usePatentStore } from "@/stores/patent";
import { ElMessage } from "element-plus";
import { appleAnimations } from "@/utils/animations";
import AppleButton from "@/components/ui/AppleButton.vue";
import AppleCard from "@/components/ui/AppleCard.vue";
import {
  Setting,
  Search,
  Folder,
  Document,
  Warning,
  MagicStick,
  TrendCharts,
  Brain,
  Lightbulb,
  Shield,
  Connection,
} from "@element-plus/icons-vue";

const router = useRouter();
const aiStore = useAIStore();
const patentStore = usePatentStore();

// 响应式引用
const statCards = ref<HTMLElement[]>([]);
const configBtn = ref<HTMLElement>();

// 对话框状态
const showConfigDialog = ref(false);

// 分析状态
const selectedPatentId = ref<number>();
const analysisType = ref("comprehensive");
const analyzing = ref(false);

// AI配置
const aiConfig = ref(aiStore.aiConfig);

// 计算属性
const similarityStatistics = computed(() => aiStore.similarityStatistics);
const classificationSuggestions = computed(
  () => aiStore.classificationSuggestions
);
const smartSummaries = computed(() => aiStore.smartSummaries);
const activeRiskAlerts = computed(() => aiStore.activeRiskAlerts);
const criticalRiskAlerts = computed(() => aiStore.criticalRiskAlerts);
const knowledgeGraphs = computed(() => aiStore.knowledgeGraphs);

const averageConfidence = computed(() => {
  if (classificationSuggestions.value.length === 0) return 0;
  const total = classificationSuggestions.value.reduce(
    (sum, suggestion) => sum + suggestion.confidence,
    0
  );
  return Math.round((total / classificationSuggestions.value.length) * 100);
});

const availablePatents = computed(() => patentStore.patents);

// AI统计数据
const aiStats = computed(() => [
  {
    icon: "Search",
    value: similarityStatistics.value.total.toString(),
    label: "相似性检测",
    trend: "up",
    trendValue: "+15%",
    trendIcon: "TrendCharts",
  },
  {
    icon: "Brain",
    value: classificationSuggestions.value.length.toString(),
    label: "分类建议",
    trend: "up",
    trendValue: "+8%",
    trendIcon: "TrendCharts",
  },
  {
    icon: "Lightbulb",
    value: smartSummaries.value.length.toString(),
    label: "智能摘要",
    trend: "up",
    trendValue: "+12%",
    trendIcon: "TrendCharts",
  },
  {
    icon: "Shield",
    value: activeRiskAlerts.value.length.toString(),
    label: "风险预警",
    trend: "down",
    trendValue: "-5%",
    trendIcon: "TrendCharts",
  },
  {
    icon: "Connection",
    value: knowledgeGraphs.value.length.toString(),
    label: "知识图谱",
    trend: "up",
    trendValue: "+20%",
    trendIcon: "TrendCharts",
  },
]);

// 导航方法
const navigateToSimilarity = () => {
  router.push("/dashboard/ai/similarity");
};

const navigateToClassification = () => {
  router.push("/dashboard/ai/classification");
};

const navigateToSummary = () => {
  router.push("/dashboard/ai/summary");
};

const navigateToRiskAlert = () => {
  router.push("/dashboard/ai/risk-alert");
};

const navigateToKnowledgeGraph = () => {
  router.push("/dashboard/ai/knowledge-graph");
};

// 执行分析
const performAnalysis = async () => {
  if (!selectedPatentId.value) {
    ElMessage.warning("请先选择要分析的专利");
    return;
  }

  analyzing.value = true;
  try {
    const patent = patentStore.patents.find(
      (p) => p.id === selectedPatentId.value
    );
    if (!patent) {
      throw new Error("专利不存在");
    }

    let results;
    switch (analysisType.value) {
      case "similarity":
        results = await aiStore.detectSimilarity(
          selectedPatentId.value,
          patent
        );
        break;
      case "classification":
        results = await aiStore.suggestClassification(
          selectedPatentId.value,
          patent
        );
        break;
      case "summary":
        results = await aiStore.generateSmartSummary(
          selectedPatentId.value,
          patent
        );
        break;
      case "risk":
        results = await aiStore.generateRiskAlerts(
          selectedPatentId.value,
          patent
        );
        break;
      case "knowledge-graph":
        results = await aiStore.generateKnowledgeGraph({
          patentScope: "technology",
          depth: 3,
          maxNodes: 100,
        });
        break;
      default:
        results = await aiStore.performAIAnalysis(
          selectedPatentId.value,
          patent
        );
    }

    ElMessage.success("AI分析完成！");
    console.log("分析结果:", results);
  } catch (error) {
    ElMessage.error("分析失败: " + (error as Error).message);
  } finally {
    analyzing.value = false;
  }
};

// 保存配置
const saveConfig = () => {
  aiStore.updateAIConfig(aiConfig.value);
  ElMessage.success("AI配置已保存");
  showConfigDialog.value = false;
};

// 组件挂载时初始化动画
onMounted(async () => {
  await nextTick();

  // 为统计卡片添加动画
  statCards.value.forEach((card, index) => {
    if (card) {
      setTimeout(() => {
        appleAnimations.slideUp(card, 0.6);
      }, index * 100);
    }
  });
});
</script>

<style scoped>
.ai-assistant {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
}

/* 动态背景 */
.page-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

.floating-elements {
  position: relative;
  width: 100%;
  height: 100%;
}

.element {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  animation: float 20s ease-in-out infinite;
}

.element-1 {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #007aff, #5856d6);
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.element-2 {
  width: 150px;
  height: 150px;
  background: linear-gradient(45deg, #34c759, #30d158);
  top: 60%;
  right: 20%;
  animation-delay: -7s;
}

.element-3 {
  width: 180px;
  height: 180px;
  background: linear-gradient(45deg, #ff9500, #ff2d55);
  bottom: 20%;
  left: 30%;
  animation-delay: -14s;
}

/* 页面标题区域 */
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
  position: relative;
  overflow: hidden;
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
}

.breadcrumb-item.active {
  color: var(--apple-text-primary);
  font-weight: 600;
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

/* 统计卡片 */
.statistics-section {
  margin-bottom: 32px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 32px;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: var(--apple-shadow-soft);
  opacity: 0;
  transform: translateY(30px);
}

.stat-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--apple-shadow-medium);
}

.stat-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-card:hover .stat-glow {
  opacity: 1;
}

.stat-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--apple-accent), #5856d6);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(0, 122, 255, 0.3);
}

.stat-content {
  flex: 1;
}

.stat-number {
  font-size: 2em;
  font-weight: 700;
  color: var(--apple-text-primary);
  margin-bottom: 4px;
}

.stat-label {
  font-size: 1em;
  color: var(--apple-text-secondary);
  margin-bottom: 8px;
}

.stat-trend {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.9em;
  font-weight: 600;
}

.stat-trend.up {
  color: var(--apple-success);
}

.stat-trend.down {
  color: var(--apple-danger);
}

/* 功能区域 */
.features-section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 1.5em;
  font-weight: 600;
  color: var(--apple-text-primary);
  margin: 0 0 24px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--apple-shadow-medium);
  background: rgba(255, 255, 255, 0.9);
}

.feature-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--apple-accent), #5856d6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  margin-bottom: 16px;
}

.feature-card h4 {
  font-size: 1.2em;
  font-weight: 600;
  color: var(--apple-text-primary);
  margin: 0 0 8px 0;
}

.feature-card p {
  color: var(--apple-text-secondary);
  margin: 0 0 16px 0;
  line-height: 1.5;
}

.feature-stats {
  display: flex;
  gap: 16px;
  font-size: 0.9em;
  color: var(--apple-text-secondary);
}

.feature-stats span {
  background: rgba(0, 122, 255, 0.1);
  padding: 4px 8px;
  border-radius: 6px;
  color: var(--apple-accent);
}

/* 快速分析区域 */
.quick-analysis-section {
  margin-bottom: 32px;
}

.analysis-form {
  padding: 24px 0;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}

.form-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-item label {
  font-weight: 600;
  color: var(--apple-text-primary);
}

.form-actions {
  display: flex;
  justify-content: center;
}

/* 配置对话框 */
.config-form {
  padding: 20px 0;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* 动画 */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
  }
  66% {
    transform: translateY(-10px) rotate(240deg);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .ai-assistant {
    padding: 16px;
  }

  .page-header {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
