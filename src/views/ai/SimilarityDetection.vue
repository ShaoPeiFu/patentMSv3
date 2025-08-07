<template>
  <div class="similarity-detection">
    <!-- 页面标题 -->
    <div class="page-header">
      <div class="header-content">
        <div class="breadcrumb">
          <span class="breadcrumb-item" @click="$router.push('/dashboard/ai')"
            >AI辅助功能</span
          >
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-item active">专利相似性检测</span>
        </div>
        <h1 class="page-title">🔍 专利相似性检测</h1>
        <p class="page-subtitle">智能分析专利相似度，识别潜在冲突和机会</p>
      </div>
      <div class="header-actions">
        <AppleButton variant="primary" @click="showDetectionDialog = true">
          <el-icon><Search /></el-icon>
          开始检测
        </AppleButton>
      </div>
    </div>

    <!-- 统计信息 -->
    <div class="statistics-section">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">
            <el-icon><Search /></el-icon>
          </div>
          <div class="stat-content">
            <div class="stat-number">{{ similarityStatistics.total }}</div>
            <div class="stat-label">总检测次数</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon high">
            <el-icon><Warning /></el-icon>
          </div>
          <div class="stat-content">
            <div class="stat-number">
              {{ similarityStatistics.highSimilarity }}
            </div>
            <div class="stat-label">高相似度</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon medium">
            <el-icon><InfoFilled /></el-icon>
          </div>
          <div class="stat-content">
            <div class="stat-number">
              {{ similarityStatistics.mediumSimilarity }}
            </div>
            <div class="stat-label">中等相似度</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon low">
            <el-icon><CircleCheck /></el-icon>
          </div>
          <div class="stat-content">
            <div class="stat-number">
              {{ similarityStatistics.lowSimilarity }}
            </div>
            <div class="stat-label">低相似度</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 相似性结果列表 -->
    <div class="results-section">
      <AppleCard elevated>
        <template #header>
          <div class="card-header">
            <h3 class="section-title">相似性检测结果</h3>
            <div class="header-actions">
              <el-input
                v-model="searchQuery"
                placeholder="搜索专利..."
                style="width: 200px"
                clearable
              >
                <template #prefix>
                  <el-icon><Search /></el-icon>
                </template>
              </el-input>
              <el-select
                v-model="filterType"
                placeholder="相似度类型"
                style="width: 150px"
                clearable
              >
                <el-option label="标题相似" value="title" />
                <el-option label="摘要相似" value="abstract" />
                <el-option label="权利要求相似" value="claims" />
                <el-option label="技术领域相似" value="technical_field" />
              </el-select>
            </div>
          </div>
        </template>

        <div class="results-list">
          <div
            v-for="result in filteredResults"
            :key="result.id"
            class="result-item"
            :class="getSimilarityClass(result.similarityScore)"
          >
            <div class="result-header">
              <div class="similarity-score">
                <div
                  class="score-circle"
                  :class="getSimilarityClass(result.similarityScore)"
                >
                  {{ Math.round(result.similarityScore * 100) }}%
                </div>
                <div class="score-label">
                  {{ getSimilarityLabel(result.similarityScore) }}
                </div>
              </div>
              <div class="result-info">
                <div class="patent-info">
                  <h4>专利 {{ result.patentId }}</h4>
                  <p class="similarity-type">
                    {{ getSimilarityTypeLabel(result.similarityType) }}
                  </p>
                </div>
                <div class="matched-text">
                  <strong>匹配内容:</strong> {{ result.matchedText }}
                </div>
                <div class="result-time">
                  检测时间: {{ formatTime(result.createdAt) }}
                </div>
              </div>
            </div>
            <div class="result-actions">
              <AppleButton size="small" variant="secondary">
                <el-icon><View /></el-icon>
                查看详情
              </AppleButton>
              <AppleButton size="small" variant="primary">
                <el-icon><Document /></el-icon>
                生成报告
              </AppleButton>
            </div>
          </div>

          <div v-if="filteredResults.length === 0" class="empty-state">
            <el-icon><Search /></el-icon>
            <p>暂无相似性检测结果</p>
            <AppleButton variant="primary" @click="showDetectionDialog = true">
              开始检测
            </AppleButton>
          </div>
        </div>
      </AppleCard>
    </div>

    <!-- 检测对话框 -->
    <el-dialog
      v-model="showDetectionDialog"
      title="专利相似性检测"
      width="600px"
      class="apple-dialog"
    >
      <div class="detection-form">
        <el-form :model="detectionForm" label-width="120px">
          <el-form-item label="选择专利">
            <el-select
              v-model="detectionForm.patentId"
              placeholder="请选择要检测的专利"
              style="width: 100%"
            >
              <el-option
                v-for="patent in availablePatents"
                :key="patent.id"
                :label="patent.title"
                :value="patent.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="检测范围">
            <el-checkbox-group v-model="detectionForm.scope">
              <el-checkbox label="title">标题相似性</el-checkbox>
              <el-checkbox label="abstract">摘要相似性</el-checkbox>
              <el-checkbox label="claims">权利要求相似性</el-checkbox>
              <el-checkbox label="technical_field">技术领域相似性</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="相似度阈值">
            <el-slider
              v-model="detectionForm.threshold"
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
          <AppleButton @click="showDetectionDialog = false">取消</AppleButton>
          <AppleButton
            variant="primary"
            :loading="detecting"
            @click="performDetection"
          >
            {{ detecting ? "检测中..." : "开始检测" }}
          </AppleButton>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useAIStore } from "@/stores/ai";
import { usePatentStore } from "@/stores/patent";
import { ElMessage } from "element-plus";
import AppleButton from "@/components/ui/AppleButton.vue";
import AppleCard from "@/components/ui/AppleCard.vue";
import {
  Search,
  Warning,
  InfoFilled,
  CircleCheck,
  View,
  Document,
} from "@element-plus/icons-vue";

const aiStore = useAIStore();
const patentStore = usePatentStore();

// 对话框状态
const showDetectionDialog = ref(false);
const detecting = ref(false);

// 搜索和过滤
const searchQuery = ref("");
const filterType = ref("");

// 检测表单
const detectionForm = ref({
  patentId: null as number | null,
  scope: ["title", "abstract"],
  threshold: 0.7,
});

// 计算属性
const similarityStatistics = computed(() => aiStore.similarityStatistics);
const similarityResults = computed(() => aiStore.similarityResults);
const availablePatents = computed(() => patentStore.patents);

const filteredResults = computed(() => {
  let results = similarityResults.value;

  // 按搜索查询过滤
  if (searchQuery.value) {
    results = results.filter((result) =>
      result.matchedText.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  // 按相似度类型过滤
  if (filterType.value) {
    results = results.filter(
      (result) => result.similarityType === filterType.value
    );
  }

  return results;
});

// 获取相似度样式类
const getSimilarityClass = (score: number) => {
  if (score > 0.8) return "high";
  if (score > 0.6) return "medium";
  return "low";
};

// 获取相似度标签
const getSimilarityLabel = (score: number) => {
  if (score > 0.8) return "高相似度";
  if (score > 0.6) return "中等相似度";
  return "低相似度";
};

// 获取相似度类型标签
const getSimilarityTypeLabel = (type: string) => {
  const typeMap: Record<string, string> = {
    title: "标题相似",
    abstract: "摘要相似",
    claims: "权利要求相似",
    technical_field: "技术领域相似",
  };
  return typeMap[type] || type;
};

// 格式化时间
const formatTime = (time: string) => {
  return new Date(time).toLocaleString("zh-CN");
};

// 执行检测
const performDetection = async () => {
  if (!detectionForm.value.patentId) {
    ElMessage.warning("请选择要检测的专利");
    return;
  }

  detecting.value = true;
  try {
    const patent = patentStore.patents.find(
      (p) => p.id === detectionForm.value.patentId
    );
    if (!patent) {
      throw new Error("专利不存在");
    }

    const results = await aiStore.detectSimilarity(
      detectionForm.value.patentId,
      patent
    );
    ElMessage.success(`检测完成！发现 ${results.length} 个相似结果`);
    showDetectionDialog.value = false;
  } catch (error) {
    ElMessage.error("检测失败: " + (error as Error).message);
  } finally {
    detecting.value = false;
  }
};

onMounted(() => {
  // 组件挂载时的初始化逻辑
});
</script>

<style scoped>
.similarity-detection {
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

/* 统计信息 */
.statistics-section {
  margin-bottom: 32px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  box-shadow: var(--apple-shadow-soft);
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--apple-shadow-medium);
}

.stat-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  flex-shrink: 0;
}

.stat-icon.high {
  background: linear-gradient(135deg, #ff2d55, #ff3b30);
}

.stat-icon.medium {
  background: linear-gradient(135deg, #ff9500, #ffcc00);
}

.stat-icon.low {
  background: linear-gradient(135deg, #34c759, #30d158);
}

.stat-content {
  flex: 1;
}

.stat-number {
  font-size: 1.8em;
  font-weight: 700;
  color: var(--apple-text-primary);
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.9em;
  color: var(--apple-text-secondary);
}

/* 结果列表 */
.results-section {
  margin-bottom: 32px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-title {
  font-size: 1.5em;
  font-weight: 600;
  color: var(--apple-text-primary);
  margin: 0;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.results-list {
  padding: 20px 0;
}

.result-item {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.result-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--apple-shadow-medium);
  background: rgba(255, 255, 255, 0.9);
}

.result-item.high {
  border-left: 4px solid #ff2d55;
}

.result-item.medium {
  border-left: 4px solid #ff9500;
}

.result-item.low {
  border-left: 4px solid #34c759;
}

.result-header {
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
}

.similarity-score {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.score-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2em;
  color: white;
}

.score-circle.high {
  background: linear-gradient(135deg, #ff2d55, #ff3b30);
}

.score-circle.medium {
  background: linear-gradient(135deg, #ff9500, #ffcc00);
}

.score-circle.low {
  background: linear-gradient(135deg, #34c759, #30d158);
}

.score-label {
  font-size: 0.8em;
  color: var(--apple-text-secondary);
  text-align: center;
}

.result-info {
  flex: 1;
}

.patent-info h4 {
  font-size: 1.2em;
  font-weight: 600;
  color: var(--apple-text-primary);
  margin: 0 0 4px 0;
}

.similarity-type {
  font-size: 0.9em;
  color: var(--apple-accent);
  margin: 0 0 12px 0;
}

.matched-text {
  font-size: 0.9em;
  color: var(--apple-text-secondary);
  margin-bottom: 8px;
  line-height: 1.5;
}

.result-time {
  font-size: 0.8em;
  color: var(--apple-text-secondary);
}

.result-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--apple-text-secondary);
}

.empty-state .el-icon {
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.5;
}

.empty-state p {
  margin: 0 0 20px 0;
  font-size: 1.1em;
}

/* 对话框 */
.detection-form {
  padding: 20px 0;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .similarity-detection {
    padding: 16px;
  }

  .page-header {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .card-header {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .header-actions {
    width: 100%;
  }

  .result-header {
    flex-direction: column;
    gap: 16px;
  }

  .result-actions {
    justify-content: center;
  }
}
</style>
