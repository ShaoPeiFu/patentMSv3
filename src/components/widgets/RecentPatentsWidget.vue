<template>
  <div class="recent-patents-widget">
    <div class="patents-list">
      <div
        v-for="patent in recentPatents"
        :key="patent.id"
        class="patent-item"
        @click="viewPatent(patent)"
      >
        <div class="patent-info">
          <div class="patent-title">{{ patent.title }}</div>
          <div class="patent-meta">
            <span class="patent-number">{{ patent.number }}</span>
            <span class="patent-status" :class="patent.status">
              {{ getStatusText(patent.status) }}
            </span>
          </div>
          <div class="patent-date">
            申请日期: {{ formatDate(patent.applicationDate) }}
          </div>
        </div>

        <div class="patent-actions">
          <el-button size="small" @click.stop="editPatent(patent)">
            <el-icon><Edit /></el-icon>
          </el-button>
          <el-button size="small" @click.stop="viewPatent(patent)">
            <el-icon><View /></el-icon>
          </el-button>
        </div>
      </div>
    </div>

    <div v-if="recentPatents.length === 0" class="empty-state">
      <el-empty description="暂无最近专利">
        <el-button type="primary" @click="addPatent">
          <el-icon><Plus /></el-icon>
          添加专利
        </el-button>
      </el-empty>
    </div>

    <div class="widget-footer">
      <el-button size="small" @click="viewAllPatents"> 查看全部专利 </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Edit, View, Plus } from "@element-plus/icons-vue";

// Props
interface Props {
  widget?: any;
  config?: any;
}

const props = withDefaults(defineProps<Props>(), {
  widget: () => ({}),
  config: () => ({}),
});

const router = useRouter();

// 响应式数据
const recentPatents = ref([]);

// 方法
const loadRecentPatents = async () => {
  try {
    // 模拟加载数据
    await new Promise((resolve) => setTimeout(resolve, 500));

    recentPatents.value = [
      {
        id: 1,
        title: "一种基于人工智能的专利检索系统",
        number: "CN202310123456.7",
        status: "pending",
        applicationDate: "2023-01-15",
      },
      {
        id: 2,
        title: "智能专利管理系统及方法",
        number: "CN202310123457.8",
        status: "approved",
        applicationDate: "2023-01-10",
      },
      {
        id: 3,
        title: "专利数据分析可视化平台",
        number: "CN202310123458.9",
        status: "rejected",
        applicationDate: "2023-01-05",
      },
      {
        id: 4,
        title: "基于区块链的专利存证系统",
        number: "CN202310123459.0",
        status: "pending",
        applicationDate: "2023-01-01",
      },
      {
        id: 5,
        title: "智能专利分类与推荐方法",
        number: "CN202310123460.1",
        status: "approved",
        applicationDate: "2022-12-28",
      },
    ];
  } catch (error) {
    console.error("加载最近专利数据失败:", error);
  }
};

const getStatusText = (status: string) => {
  const statusMap = {
    pending: "待审核",
    approved: "已通过",
    rejected: "已拒绝",
  };
  return statusMap[status] || status;
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("zh-CN");
};

const viewPatent = (patent: any) => {
  router.push(`/dashboard/patents/${patent.id}`);
};

const editPatent = (patent: any) => {
  router.push(`/dashboard/patents/${patent.id}/edit`);
};

const addPatent = () => {
  router.push("/dashboard/patents/add");
};

const viewAllPatents = () => {
  router.push("/dashboard/patents");
};

onMounted(() => {
  loadRecentPatents();
});
</script>

<style scoped>
.recent-patents-widget {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.patents-list {
  flex: 1;
  overflow-y: auto;
}

.patent-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: all 0.2s ease;
}

.patent-item:hover {
  background: #f8f9fa;
}

.patent-item:last-child {
  border-bottom: none;
}

.patent-info {
  flex: 1;
  min-width: 0;
}

.patent-title {
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.patent-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.patent-number {
  font-size: 12px;
  color: #606266;
  font-family: monospace;
}

.patent-status {
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 10px;
  color: white;
}

.patent-status.pending {
  background: #e6a23c;
}

.patent-status.approved {
  background: #67c23a;
}

.patent-status.rejected {
  background: #f56c6c;
}

.patent-date {
  font-size: 11px;
  color: #909399;
}

.patent-actions {
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.patent-item:hover .patent-actions {
  opacity: 1;
}

.empty-state {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.widget-footer {
  padding: 12px 16px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
}

/* 深色模式支持 */
:deep(.dark-mode) .patent-item:hover {
  background: #2a2a2a;
}

:deep(.dark-mode) .patent-title {
  color: #ffffff;
}

:deep(.dark-mode) .patent-number {
  color: #c0c4cc;
}

:deep(.dark-mode) .patent-date {
  color: #909399;
}

:deep(.dark-mode) .widget-footer {
  border-color: #4c4c4c;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .patent-item {
    padding: 10px 12px;
  }

  .patent-title {
    font-size: 13px;
  }

  .patent-actions {
    opacity: 1;
  }
}
</style>
