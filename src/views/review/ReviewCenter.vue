<template>
  <div class="review-center-container">
    <el-card class="review-card">
      <template #header>
        <div class="card-header">
          <h2>🔍 审核中心</h2>
          <p class="subtitle">专利审核与审批管理</p>
        </div>
      </template>

      <!-- 审核统计 -->
      <el-row :gutter="20" class="stats-section">
        <el-col :span="6">
          <el-card class="stat-card">
            <div class="stat-content">
              <div class="stat-icon pending">
                <el-icon><Clock /></el-icon>
              </div>
              <div class="stat-info">
                <h3>{{ stats.pendingReviews }}</h3>
                <p>待审核</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="stat-card">
            <div class="stat-content">
              <div class="stat-icon approved">
                <el-icon><Check /></el-icon>
              </div>
              <div class="stat-info">
                <h3>{{ stats.approvedReviews }}</h3>
                <p>已通过</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="stat-card">
            <div class="stat-content">
              <div class="stat-icon rejected">
                <el-icon><Close /></el-icon>
              </div>
              <div class="stat-info">
                <h3>{{ stats.rejectedReviews }}</h3>
                <p>已驳回</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="stat-card">
            <div class="stat-content">
              <div class="stat-icon total">
                <el-icon><Document /></el-icon>
              </div>
              <div class="stat-info">
                <h3>{{ stats.totalReviews }}</h3>
                <p>总审核</p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <!-- 审核列表 -->
      <el-row :gutter="20" class="review-section">
        <el-col :span="24">
          <el-card class="review-list-card">
            <template #header>
              <div class="review-header">
                <h3>审核列表</h3>
                <div class="filter-actions">
                  <el-select
                    v-model="filterStatus"
                    placeholder="状态筛选"
                    style="width: 120px"
                  >
                    <el-option label="全部" value="" />
                    <el-option label="待审核" value="pending" />
                    <el-option label="已通过" value="approved" />
                    <el-option label="已驳回" value="rejected" />
                  </el-select>
                  <el-button type="primary" @click="refreshList">
                    <el-icon><Refresh /></el-icon>
                    刷新
                  </el-button>
                </div>
              </div>
            </template>
            <div class="review-content">
              <el-table :data="filteredReviewList" style="width: 100%">
                <el-table-column prop="patentId" label="专利ID" width="100" />
                <el-table-column prop="patentName" label="专利名称" />
                <el-table-column prop="applicant" label="申请人" width="120" />
                <el-table-column
                  prop="submitDate"
                  label="提交日期"
                  width="120"
                />
                <el-table-column prop="status" label="状态" width="100">
                  <template #default="scope">
                    <el-tag :type="getStatusType(scope.row.status)">
                      {{ scope.row.status }}
                    </el-tag>
                  </template>
                </el-table-column>
                <el-table-column prop="priority" label="优先级" width="100">
                  <template #default="scope">
                    <el-tag
                      :type="getPriorityType(scope.row.priority)"
                      size="small"
                    >
                      {{ scope.row.priority }}
                    </el-tag>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="200">
                  <template #default="scope">
                    <el-button size="small" @click="viewPatent(scope.row)">
                      查看
                    </el-button>
                    <el-button
                      v-if="scope.row.status === '待审核'"
                      size="small"
                      type="success"
                      @click="approvePatent(scope.row)"
                    >
                      通过
                    </el-button>
                    <el-button
                      v-if="scope.row.status === '待审核'"
                      size="small"
                      type="danger"
                      @click="rejectPatent(scope.row)"
                    >
                      驳回
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <!-- 审核详情对话框 -->
      <el-dialog v-model="showDetailDialog" title="专利详情" width="60%">
        <div v-if="selectedPatent" class="patent-detail">
          <el-descriptions :column="2" border>
            <el-descriptions-item label="专利名称">{{
              selectedPatent.patentName
            }}</el-descriptions-item>
            <el-descriptions-item label="申请人">{{
              selectedPatent.applicant
            }}</el-descriptions-item>
            <el-descriptions-item label="申请日期">{{
              selectedPatent.submitDate
            }}</el-descriptions-item>
            <el-descriptions-item label="状态">{{
              selectedPatent.status
            }}</el-descriptions-item>
            <el-descriptions-item label="优先级">{{
              selectedPatent.priority
            }}</el-descriptions-item>
            <el-descriptions-item label="技术领域">{{
              selectedPatent.technology
            }}</el-descriptions-item>
          </el-descriptions>

          <div class="patent-description">
            <h4>专利描述</h4>
            <p>{{ selectedPatent.description }}</p>
          </div>

          <div class="review-comments">
            <h4>审核意见</h4>
            <el-input
              v-model="reviewComment"
              type="textarea"
              :rows="4"
              placeholder="请输入审核意见..."
            />
          </div>
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="showDetailDialog = false">取消</el-button>
            <el-button type="primary" @click="submitReview">提交审核</el-button>
          </span>
        </template>
      </el-dialog>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import {
  Clock,
  Check,
  Close,
  Document,
  Refresh,
} from "@element-plus/icons-vue";

// 统计数据
const stats = reactive({
  pendingReviews: 45,
  approvedReviews: 234,
  rejectedReviews: 12,
  totalReviews: 291,
});

// 筛选状态
const filterStatus = ref("");

// 审核列表数据
const reviewList = ref([
  {
    patentId: "P001",
    patentName: "一种智能专利管理系统",
    applicant: "张三",
    submitDate: "2024-01-15",
    status: "待审核",
    priority: "高",
    technology: "信息技术",
    description:
      "本发明涉及一种智能专利管理系统，包括数据采集模块、分析处理模块和展示模块...",
  },
  {
    patentId: "P002",
    patentName: "基于区块链的专利保护方法",
    applicant: "李四",
    submitDate: "2024-01-14",
    status: "已通过",
    priority: "中",
    technology: "区块链",
    description:
      "本发明提供一种基于区块链技术的专利保护方法，确保专利信息的不可篡改性和可追溯性...",
  },
  {
    patentId: "P003",
    patentName: "人工智能辅助专利检索系统",
    applicant: "王五",
    submitDate: "2024-01-13",
    status: "已驳回",
    priority: "高",
    technology: "人工智能",
    description:
      "本发明涉及一种基于人工智能技术的专利检索系统，能够提高检索效率和准确性...",
  },
]);

// 筛选后的列表
const filteredReviewList = computed(() => {
  if (!filterStatus.value) {
    return reviewList.value;
  }
  return reviewList.value.filter((item) => {
    if (filterStatus.value === "pending") return item.status === "待审核";
    if (filterStatus.value === "approved") return item.status === "已通过";
    if (filterStatus.value === "rejected") return item.status === "已驳回";
    return true;
  });
});

// 对话框相关
const showDetailDialog = ref(false);
const selectedPatent = ref<{
  patentId: string;
  patentName: string;
  applicant: string;
  submitDate: string;
  status: string;
  priority: string;
  technology: string;
  description: string;
} | null>(null);
const reviewComment = ref("");

// 获取状态类型
const getStatusType = (status: string) => {
  switch (status) {
    case "待审核":
      return "warning";
    case "已通过":
      return "success";
    case "已驳回":
      return "danger";
    default:
      return "info";
  }
};

// 获取优先级类型
const getPriorityType = (priority: string) => {
  switch (priority) {
    case "高":
      return "danger";
    case "中":
      return "warning";
    case "低":
      return "info";
    default:
      return "info";
  }
};

// 查看专利详情
const viewPatent = (patent: any) => {
  selectedPatent.value = patent;
  showDetailDialog.value = true;
};

// 通过专利
const approvePatent = async (patent: any) => {
  try {
    await ElMessageBox.confirm(
      `确定要通过专利 "${patent.patentName}" 吗？`,
      "确认通过",
      {
        type: "warning",
      }
    );

    patent.status = "已通过";
    stats.pendingReviews--;
    stats.approvedReviews++;
    ElMessage.success("专利审核通过");
  } catch (error) {
    if (error !== "cancel") {
      ElMessage.error("操作失败");
    }
  }
};

// 驳回专利
const rejectPatent = async (patent: any) => {
  try {
    await ElMessageBox.confirm(
      `确定要驳回专利 "${patent.patentName}" 吗？`,
      "确认驳回",
      {
        type: "warning",
      }
    );

    patent.status = "已驳回";
    stats.pendingReviews--;
    stats.rejectedReviews++;
    ElMessage.success("专利已驳回");
  } catch (error) {
    if (error !== "cancel") {
      ElMessage.error("操作失败");
    }
  }
};

// 提交审核
const submitReview = () => {
  if (!reviewComment.value.trim()) {
    ElMessage.warning("请输入审核意见");
    return;
  }

  ElMessage.success("审核意见已提交");
  showDetailDialog.value = false;
  reviewComment.value = "";
};

// 刷新列表
const refreshList = () => {
  ElMessage.success("列表已刷新");
};

onMounted(() => {
  console.log("审核中心页面已加载");
});
</script>

<style scoped>
.review-center-container {
  padding: 20px;
  background-color: #f5f7fa;
  min-height: 100vh;
}

.review-card {
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: white;
  font-size: 24px;
}

.stat-icon.pending {
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
}

.stat-icon.approved {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.stat-icon.rejected {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

.stat-icon.total {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

.review-section {
  margin-bottom: 20px;
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.review-header h3 {
  margin: 0;
  color: #303133;
}

.filter-actions {
  display: flex;
  gap: 10px;
}

.review-content {
  padding: 10px 0;
}

.patent-detail {
  padding: 20px 0;
}

.patent-description {
  margin: 20px 0;
}

.patent-description h4 {
  margin: 0 0 10px 0;
  color: #303133;
}

.patent-description p {
  margin: 0;
  color: #606266;
  line-height: 1.6;
}

.review-comments {
  margin: 20px 0;
}

.review-comments h4 {
  margin: 0 0 10px 0;
  color: #303133;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

:deep(.el-card__header) {
  background-color: #f8f9fa;
  border-bottom: 1px solid #ebeef5;
}
</style>
