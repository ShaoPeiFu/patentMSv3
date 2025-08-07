<template>
  <div class="classification-suggestion">
    <!-- 页面标题 -->
    <div class="page-header">
      <div class="header-content">
        <div class="breadcrumb">
          <span class="breadcrumb-item" @click="$router.push('/dashboard/ai')"
            >AI辅助功能</span
          >
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-item active">自动分类建议</span>
        </div>
        <h1 class="page-title">📁 自动分类建议</h1>
        <p class="page-subtitle">基于专利内容智能推荐合适的分类类别</p>
      </div>
      <div class="header-actions">
        <AppleButton variant="primary" @click="showSuggestionDialog = true">
          <el-icon><Folder /></el-icon>
          生成建议
        </AppleButton>
      </div>
    </div>

    <!-- 统计信息 -->
    <div class="statistics-section">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">
            <el-icon><Folder /></el-icon>
          </div>
          <div class="stat-content">
            <div class="stat-number">
              {{ classificationSuggestions.length }}
            </div>
            <div class="stat-label">总建议数</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon high">
            <el-icon><CircleCheck /></el-icon>
          </div>
          <div class="stat-content">
            <div class="stat-number">{{ highConfidenceCount }}</div>
            <div class="stat-label">高置信度</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon medium">
            <el-icon><InfoFilled /></el-icon>
          </div>
          <div class="stat-content">
            <div class="stat-number">{{ averageConfidence }}%</div>
            <div class="stat-label">平均置信度</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon low">
            <el-icon><Warning /></el-icon>
          </div>
          <div class="stat-content">
            <div class="stat-number">{{ lowConfidenceCount }}</div>
            <div class="stat-label">低置信度</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 分类建议列表 -->
    <div class="suggestions-section">
      <AppleCard elevated>
        <template #header>
          <div class="card-header">
            <h3 class="section-title">分类建议结果</h3>
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
                v-model="filterConfidence"
                placeholder="置信度筛选"
                style="width: 150px"
                clearable
              >
                <el-option label="高置信度 (>80%)" value="high" />
                <el-option label="中等置信度 (60-80%)" value="medium" />
                <el-option label="低置信度 (<60%)" value="low" />
              </el-select>
            </div>
          </div>
        </template>

        <div class="suggestions-list">
          <div
            v-for="suggestion in filteredSuggestions"
            :key="suggestion.id"
            class="suggestion-item"
            :class="getConfidenceClass(suggestion.confidence)"
          >
            <div class="suggestion-header">
              <div class="confidence-score">
                <div
                  class="score-circle"
                  :class="getConfidenceClass(suggestion.confidence)"
                >
                  {{ Math.round(suggestion.confidence * 100) }}%
                </div>
                <div class="score-label">
                  {{ getConfidenceLabel(suggestion.confidence) }}
                </div>
              </div>
              <div class="suggestion-info">
                <div class="patent-info">
                  <h4>专利 {{ suggestion.patentId }}</h4>
                  <p class="suggested-category">
                    {{ suggestion.suggestedCategory }}
                  </p>
                </div>
                <div class="reasoning">
                  <strong>推理过程:</strong> {{ suggestion.reasoning }}
                </div>
                <div class="alternatives">
                  <strong>备选分类:</strong>
                  {{ suggestion.alternatives.join(", ") }}
                </div>
                <div class="suggestion-time">
                  生成时间: {{ formatTime(suggestion.createdAt) }}
                </div>
              </div>
            </div>
            <div class="suggestion-actions">
              <AppleButton size="small" variant="secondary">
                <el-icon><View /></el-icon>
                查看详情
              </AppleButton>
              <AppleButton size="small" variant="primary">
                <el-icon><Check /></el-icon>
                采用建议
              </AppleButton>
            </div>
          </div>

          <div v-if="filteredSuggestions.length === 0" class="empty-state">
            <el-icon><Folder /></el-icon>
            <p>暂无分类建议</p>
            <AppleButton variant="primary" @click="showSuggestionDialog = true">
              生成建议
            </AppleButton>
          </div>
        </div>
      </AppleCard>
    </div>

    <!-- 建议生成对话框 -->
    <el-dialog
      v-model="showSuggestionDialog"
      title="生成分类建议"
      width="600px"
      class="apple-dialog"
    >
      <div class="suggestion-form">
        <el-form :model="suggestionForm" label-width="120px">
          <el-form-item label="选择专利">
            <el-select
              v-model="suggestionForm.patentId"
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
          </el-form-item>
          <el-form-item label="分析深度">
            <el-radio-group v-model="suggestionForm.analysisDepth">
              <el-radio label="basic">基础分析</el-radio>
              <el-radio label="standard">标准分析</el-radio>
              <el-radio label="comprehensive">全面分析</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>

      <template #footer>
        <div class="dialog-footer">
          <AppleButton @click="showSuggestionDialog = false">取消</AppleButton>
          <AppleButton
            variant="primary"
            :loading="generating"
            @click="generateSuggestion"
          >
            {{ generating ? "生成中..." : "开始生成" }}
          </AppleButton>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useAIStore } from "@/stores/ai";
import { usePatentStore } from "@/stores/patent";
import { ElMessage } from "element-plus";
import AppleButton from "@/components/ui/AppleButton.vue";
import AppleCard from "@/components/ui/AppleCard.vue";
import {
  Folder,
  CircleCheck,
  InfoFilled,
  Warning,
  Search,
  View,
  Check,
} from "@element-plus/icons-vue";

const aiStore = useAIStore();
const patentStore = usePatentStore();

// 对话框状态
const showSuggestionDialog = ref(false);
const generating = ref(false);

// 搜索和过滤
const searchQuery = ref("");
const filterConfidence = ref("");

// 建议表单
const suggestionForm = ref({
  patentId: null as number | null,
  analysisDepth: "standard",
});

// 计算属性
const classificationSuggestions = computed(
  () => aiStore.classificationSuggestions
);
const availablePatents = computed(() => patentStore.patents);

const highConfidenceCount = computed(
  () => classificationSuggestions.value.filter((s) => s.confidence > 0.8).length
);

const lowConfidenceCount = computed(
  () => classificationSuggestions.value.filter((s) => s.confidence < 0.6).length
);

const averageConfidence = computed(() => {
  if (classificationSuggestions.value.length === 0) return 0;
  const total = classificationSuggestions.value.reduce(
    (sum, s) => sum + s.confidence,
    0
  );
  return Math.round((total / classificationSuggestions.value.length) * 100);
});

const filteredSuggestions = computed(() => {
  let suggestions = classificationSuggestions.value;

  // 按搜索查询过滤
  if (searchQuery.value) {
    suggestions = suggestions.filter(
      (suggestion) =>
        suggestion.suggestedCategory
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase()) ||
        suggestion.reasoning
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase())
    );
  }

  // 按置信度过滤
  if (filterConfidence.value) {
    switch (filterConfidence.value) {
      case "high":
        suggestions = suggestions.filter((s) => s.confidence > 0.8);
        break;
      case "medium":
        suggestions = suggestions.filter(
          (s) => s.confidence >= 0.6 && s.confidence <= 0.8
        );
        break;
      case "low":
        suggestions = suggestions.filter((s) => s.confidence < 0.6);
        break;
    }
  }

  return suggestions;
});

// 获取置信度样式类
const getConfidenceClass = (confidence: number) => {
  if (confidence > 0.8) return "high";
  if (confidence > 0.6) return "medium";
  return "low";
};

// 获取置信度标签
const getConfidenceLabel = (confidence: number) => {
  if (confidence > 0.8) return "高置信度";
  if (confidence > 0.6) return "中等置信度";
  return "低置信度";
};

// 格式化时间
const formatTime = (time: string) => {
  return new Date(time).toLocaleString("zh-CN");
};

// 生成建议
const generateSuggestion = async () => {
  if (!suggestionForm.value.patentId) {
    ElMessage.warning("请选择要分析的专利");
    return;
  }

  generating.value = true;
  try {
    const patent = patentStore.patents.find(
      (p) => p.id === suggestionForm.value.patentId
    );
    if (!patent) {
      throw new Error("专利不存在");
    }

    const result = await aiStore.suggestClassification(
      suggestionForm.value.patentId,
      patent
    );
    ElMessage.success("分类建议生成完成！");
    showSuggestionDialog.value = false;
  } catch (error) {
    ElMessage.error("生成失败: " + (error as Error).message);
  } finally {
    generating.value = false;
  }
};
</script>

<style scoped>
.classification-suggestion {
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
  background: linear-gradient(135deg, #34c759, #30d158);
}

.stat-icon.medium {
  background: linear-gradient(135deg, #ff9500, #ffcc00);
}

.stat-icon.low {
  background: linear-gradient(135deg, #ff2d55, #ff3b30);
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

/* 建议列表 */
.suggestions-section {
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

.suggestions-list {
  padding: 20px 0;
}

.suggestion-item {
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

.suggestion-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--apple-shadow-medium);
  background: rgba(255, 255, 255, 0.9);
}

.suggestion-item.high {
  border-left: 4px solid #34c759;
}

.suggestion-item.medium {
  border-left: 4px solid #ff9500;
}

.suggestion-item.low {
  border-left: 4px solid #ff2d55;
}

.suggestion-header {
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
}

.confidence-score {
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
  background: linear-gradient(135deg, #34c759, #30d158);
}

.score-circle.medium {
  background: linear-gradient(135deg, #ff9500, #ffcc00);
}

.score-circle.low {
  background: linear-gradient(135deg, #ff2d55, #ff3b30);
}

.score-label {
  font-size: 0.8em;
  color: var(--apple-text-secondary);
  text-align: center;
}

.suggestion-info {
  flex: 1;
}

.patent-info h4 {
  font-size: 1.2em;
  font-weight: 600;
  color: var(--apple-text-primary);
  margin: 0 0 4px 0;
}

.suggested-category {
  font-size: 0.9em;
  color: var(--apple-accent);
  margin: 0 0 12px 0;
}

.reasoning {
  font-size: 0.9em;
  color: var(--apple-text-secondary);
  margin-bottom: 8px;
  line-height: 1.5;
}

.alternatives {
  font-size: 0.9em;
  color: var(--apple-text-secondary);
  margin-bottom: 8px;
}

.suggestion-time {
  font-size: 0.8em;
  color: var(--apple-text-secondary);
}

.suggestion-actions {
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
.suggestion-form {
  padding: 20px 0;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .classification-suggestion {
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

  .suggestion-header {
    flex-direction: column;
    gap: 16px;
  }

  .suggestion-actions {
    justify-content: center;
  }
}
</style>
