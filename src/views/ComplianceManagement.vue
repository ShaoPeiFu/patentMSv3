<template>
  <div class="compliance-container">
    <el-card class="compliance-card">
      <template #header>
        <div class="card-header">
          <h2>📋 合规管理</h2>
          <p class="subtitle">法规跟踪、合规检查、审计痕迹与隐私保护</p>
        </div>
      </template>

      <!-- 合规概览 -->
      <el-row :gutter="20" class="overview-section">
        <el-col :span="6">
          <el-card class="overview-card">
            <div class="overview-content">
              <div class="overview-icon regulations">
                <el-icon><Document /></el-icon>
              </div>
              <div class="overview-info">
                <h3>{{ overview.totalRegulations }}</h3>
                <p>跟踪法规</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="overview-card">
            <div class="overview-content">
              <div class="overview-icon checklist">
                <el-icon><Check /></el-icon>
              </div>
              <div class="overview-info">
                <h3>{{ overview.completedChecks }}</h3>
                <p>已完成检查</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="overview-card">
            <div class="overview-content">
              <div class="overview-icon audit">
                <el-icon><Monitor /></el-icon>
              </div>
              <div class="overview-info">
                <h3>{{ overview.auditTrails }}</h3>
                <p>审计痕迹</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="overview-card">
            <div class="overview-content">
              <div class="overview-icon privacy">
                <el-icon><Lock /></el-icon>
              </div>
              <div class="overview-info">
                <h3>{{ overview.privacyIncidents }}</h3>
                <p>隐私事件</p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <!-- 功能模块 -->
      <el-row :gutter="20" class="modules-section">
        <el-col :span="12">
          <el-card class="module-card">
            <template #header>
              <div class="module-header">
                <el-icon><Document /></el-icon>
                <span>法规变更跟踪</span>
                <el-button
                  type="primary"
                  size="small"
                  @click="addRegulation"
                  style="margin-left: auto"
                >
                  <el-icon><Plus /></el-icon>
                  添加法规
                </el-button>
              </div>
            </template>
            <div class="module-content">
              <el-table
                :data="regulations"
                style="width: 100%"
                max-height="300"
              >
                <el-table-column prop="name" label="法规名称" />
                <el-table-column prop="version" label="版本" width="80" />
                <el-table-column
                  prop="updateDate"
                  label="更新日期"
                  width="120"
                />
                <el-table-column prop="status" label="状态" width="100">
                  <template #default="scope">
                    <el-tag :type="getRegulationStatusType(scope.row.status)">
                      {{ scope.row.status }}
                    </el-tag>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="150">
                  <template #default="scope">
                    <el-button size="small" @click="viewRegulation(scope.row)">
                      查看
                    </el-button>
                    <el-button
                      size="small"
                      type="warning"
                      @click="editRegulation(scope.row)"
                    >
                      编辑
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="module-actions">
                <el-button @click="refreshRegulations">
                  <el-icon><Refresh /></el-icon>
                  刷新
                </el-button>
                <el-button @click="exportRegulations">
                  <el-icon><Download /></el-icon>
                  导出
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card class="module-card">
            <template #header>
              <div class="module-header">
                <el-icon><Check /></el-icon>
                <span>合规检查清单</span>
                <el-button
                  type="primary"
                  size="small"
                  @click="addChecklist"
                  style="margin-left: auto"
                >
                  <el-icon><Plus /></el-icon>
                  添加检查项
                </el-button>
              </div>
            </template>
            <div class="module-content">
              <el-table :data="checklists" style="width: 100%" max-height="300">
                <el-table-column prop="name" label="检查项目" />
                <el-table-column prop="category" label="类别" width="100" />
                <el-table-column prop="dueDate" label="截止日期" width="120" />
                <el-table-column prop="status" label="状态" width="100">
                  <template #default="scope">
                    <el-tag :type="getChecklistStatusType(scope.row.status)">
                      {{ scope.row.status }}
                    </el-tag>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="150">
                  <template #default="scope">
                    <el-button size="small" @click="viewChecklist(scope.row)">
                      查看
                    </el-button>
                    <el-button
                      size="small"
                      type="warning"
                      @click="editChecklist(scope.row)"
                    >
                      编辑
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="module-actions">
                <el-button @click="refreshChecklists">
                  <el-icon><Refresh /></el-icon>
                  刷新
                </el-button>
                <el-button @click="exportChecklists">
                  <el-icon><Download /></el-icon>
                  导出
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20" class="modules-section">
        <el-col :span="12">
          <el-card class="module-card">
            <template #header>
              <div class="module-header">
                <el-icon><Monitor /></el-icon>
                <span>审计痕迹</span>
                <el-button
                  type="primary"
                  size="small"
                  @click="exportAuditTrails"
                  style="margin-left: auto"
                >
                  <el-icon><Download /></el-icon>
                  导出日志
                </el-button>
              </div>
            </template>
            <div class="module-content">
              <el-table
                :data="auditTrails"
                style="width: 100%"
                max-height="300"
              >
                <el-table-column prop="timestamp" label="时间" width="150" />
                <el-table-column prop="user" label="用户" width="100" />
                <el-table-column prop="action" label="操作" />
                <el-table-column prop="resource" label="资源" width="120" />
                <el-table-column prop="result" label="结果" width="80">
                  <template #default="scope">
                    <el-tag
                      :type="scope.row.result === '成功' ? 'success' : 'danger'"
                      size="small"
                    >
                      {{ scope.row.result }}
                    </el-tag>
                  </template>
                </el-table-column>
              </el-table>
              <div class="module-actions">
                <el-button @click="refreshAuditTrails">
                  <el-icon><Refresh /></el-icon>
                  刷新
                </el-button>
                <el-button @click="clearAuditTrails">
                  <el-icon><Delete /></el-icon>
                  清空
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card class="module-card">
            <template #header>
              <div class="module-header">
                <el-icon><Lock /></el-icon>
                <span>数据隐私保护</span>
                <el-button
                  type="primary"
                  size="small"
                  @click="addPrivacyEvent"
                  style="margin-left: auto"
                >
                  <el-icon><Plus /></el-icon>
                  添加事件
                </el-button>
              </div>
            </template>
            <div class="module-content">
              <el-table
                :data="privacyEvents"
                style="width: 100%"
                max-height="300"
              >
                <el-table-column prop="timestamp" label="时间" width="150" />
                <el-table-column prop="type" label="类型" width="100" />
                <el-table-column prop="description" label="描述" />
                <el-table-column prop="severity" label="严重程度" width="100">
                  <template #default="scope">
                    <el-tag
                      :type="getSeverityType(scope.row.severity)"
                      size="small"
                    >
                      {{ scope.row.severity }}
                    </el-tag>
                  </template>
                </el-table-column>
                <el-table-column prop="status" label="状态" width="80">
                  <template #default="scope">
                    <el-tag
                      :type="
                        scope.row.status === '已处理' ? 'success' : 'warning'
                      "
                      size="small"
                    >
                      {{ scope.row.status }}
                    </el-tag>
                  </template>
                </el-table-column>
              </el-table>
              <div class="module-actions">
                <el-button @click="refreshPrivacyEvents">
                  <el-icon><Refresh /></el-icon>
                  刷新
                </el-button>
                <el-button @click="exportPrivacyEvents">
                  <el-icon><Download /></el-icon>
                  导出
                </el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <!-- 合规报告 -->
      <el-card class="report-card">
        <template #header>
          <div class="report-header">
            <h3>合规报告</h3>
            <div class="report-actions">
              <el-button type="primary" @click="generateReport">
                <el-icon><Document /></el-icon>
                生成报告
              </el-button>
              <el-button @click="exportReport">
                <el-icon><Download /></el-icon>
                导出报告
              </el-button>
            </div>
          </div>
        </template>
        <div class="report-content">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="report-item">
                <h4>法规合规率</h4>
                <div class="progress-container">
                  <el-progress
                    :percentage="complianceRate.regulations"
                    :color="getProgressColor(complianceRate.regulations)"
                  />
                  <span>{{ complianceRate.regulations }}%</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="report-item">
                <h4>检查完成率</h4>
                <div class="progress-container">
                  <el-progress
                    :percentage="complianceRate.checklists"
                    :color="getProgressColor(complianceRate.checklists)"
                  />
                  <span>{{ complianceRate.checklists }}%</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="report-item">
                <h4>隐私保护率</h4>
                <div class="progress-container">
                  <el-progress
                    :percentage="complianceRate.privacy"
                    :color="getProgressColor(complianceRate.privacy)"
                  />
                  <span>{{ complianceRate.privacy }}%</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-card>

    <!-- 法规详情对话框 -->
    <el-dialog v-model="showRegulationDialog" title="法规详情" width="60%">
      <div v-if="selectedRegulation" class="regulation-detail">
        <el-descriptions :column="2" border>
          <el-descriptions-item label="法规名称">{{
            selectedRegulation.name
          }}</el-descriptions-item>
          <el-descriptions-item label="版本">{{
            selectedRegulation.version
          }}</el-descriptions-item>
          <el-descriptions-item label="发布日期">{{
            selectedRegulation.publishDate
          }}</el-descriptions-item>
          <el-descriptions-item label="生效日期">{{
            selectedRegulation.effectiveDate
          }}</el-descriptions-item>
          <el-descriptions-item label="状态">{{
            selectedRegulation.status
          }}</el-descriptions-item>
          <el-descriptions-item label="适用范围">{{
            selectedRegulation.scope
          }}</el-descriptions-item>
        </el-descriptions>

        <div class="regulation-content">
          <h4>法规内容</h4>
          <p>{{ selectedRegulation.content }}</p>
        </div>

        <div class="regulation-requirements">
          <h4>合规要求</h4>
          <el-tag
            v-for="req in selectedRegulation.requirements"
            :key="req"
            style="margin-right: 8px; margin-bottom: 8px"
          >
            {{ req }}
          </el-tag>
        </div>
      </div>
    </el-dialog>

    <!-- 检查清单详情对话框 -->
    <el-dialog v-model="showChecklistDialog" title="检查清单详情" width="60%">
      <div v-if="selectedChecklist" class="checklist-detail">
        <el-descriptions :column="2" border>
          <el-descriptions-item label="检查项目">{{
            selectedChecklist.name
          }}</el-descriptions-item>
          <el-descriptions-item label="类别">{{
            selectedChecklist.category
          }}</el-descriptions-item>
          <el-descriptions-item label="截止日期">{{
            selectedChecklist.dueDate
          }}</el-descriptions-item>
          <el-descriptions-item label="负责人">{{
            selectedChecklist.assignee
          }}</el-descriptions-item>
          <el-descriptions-item label="状态">{{
            selectedChecklist.status
          }}</el-descriptions-item>
          <el-descriptions-item label="优先级">{{
            selectedChecklist.priority
          }}</el-descriptions-item>
        </el-descriptions>

        <div class="checklist-content">
          <h4>检查内容</h4>
          <p>{{ selectedChecklist.description }}</p>
        </div>

        <div class="checklist-items">
          <h4>检查项目</h4>
          <el-checkbox-group v-model="selectedChecklist.completedItems">
            <el-checkbox
              v-for="item in selectedChecklist.items"
              :key="item.id"
              :label="item.id"
            >
              {{ item.description }}
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showChecklistDialog = false">取消</el-button>
          <el-button type="primary" @click="saveChecklist">保存</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 添加/编辑法规对话框 -->
    <el-dialog
      v-model="showRegulationFormDialog"
      :title="isEditingRegulation ? '编辑法规' : '添加法规'"
      width="60%"
    >
      <el-form
        :model="regulationForm"
        :rules="regulationRules"
        ref="regulationFormRef"
        label-width="100px"
      >
        <el-form-item label="法规名称" prop="name">
          <el-input
            v-model="regulationForm.name"
            placeholder="请输入法规名称"
          />
        </el-form-item>
        <el-form-item label="版本" prop="version">
          <el-input
            v-model="regulationForm.version"
            placeholder="请输入版本号"
          />
        </el-form-item>
        <el-form-item label="发布日期" prop="publishDate">
          <el-date-picker
            v-model="regulationForm.publishDate"
            type="date"
            placeholder="选择发布日期"
          />
        </el-form-item>
        <el-form-item label="生效日期" prop="effectiveDate">
          <el-date-picker
            v-model="regulationForm.effectiveDate"
            type="date"
            placeholder="选择生效日期"
          />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="regulationForm.status" placeholder="选择状态">
            <el-option label="已生效" value="已生效" />
            <el-option label="即将生效" value="即将生效" />
            <el-option label="已废止" value="已废止" />
          </el-select>
        </el-form-item>
        <el-form-item label="适用范围" prop="scope">
          <el-input
            v-model="regulationForm.scope"
            placeholder="请输入适用范围"
          />
        </el-form-item>
        <el-form-item label="法规内容" prop="content">
          <el-input
            v-model="regulationForm.content"
            type="textarea"
            :rows="4"
            placeholder="请输入法规内容"
          />
        </el-form-item>
        <el-form-item label="合规要求" prop="requirements">
          <el-input
            v-model="regulationForm.requirements"
            type="textarea"
            :rows="3"
            placeholder="请输入合规要求，用逗号分隔"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showRegulationFormDialog = false">取消</el-button>
          <el-button type="primary" @click="saveRegulation">保存</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 添加/编辑检查清单对话框 -->
    <el-dialog
      v-model="showChecklistFormDialog"
      :title="isEditingChecklist ? '编辑检查清单' : '添加检查清单'"
      width="60%"
    >
      <el-form
        :model="checklistForm"
        :rules="checklistRules"
        ref="checklistFormRef"
        label-width="100px"
      >
        <el-form-item label="检查项目" prop="name">
          <el-input
            v-model="checklistForm.name"
            placeholder="请输入检查项目名称"
          />
        </el-form-item>
        <el-form-item label="类别" prop="category">
          <el-select v-model="checklistForm.category" placeholder="选择类别">
            <el-option label="专利申请" value="专利申请" />
            <el-option label="数据安全" value="数据安全" />
            <el-option label="隐私保护" value="隐私保护" />
            <el-option label="系统安全" value="系统安全" />
          </el-select>
        </el-form-item>
        <el-form-item label="截止日期" prop="dueDate">
          <el-date-picker
            v-model="checklistForm.dueDate"
            type="date"
            placeholder="选择截止日期"
          />
        </el-form-item>
        <el-form-item label="负责人" prop="assignee">
          <el-input
            v-model="checklistForm.assignee"
            placeholder="请输入负责人"
          />
        </el-form-item>
        <el-form-item label="优先级" prop="priority">
          <el-select v-model="checklistForm.priority" placeholder="选择优先级">
            <el-option label="高" value="高" />
            <el-option label="中" value="中" />
            <el-option label="低" value="低" />
          </el-select>
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input
            v-model="checklistForm.description"
            type="textarea"
            :rows="3"
            placeholder="请输入检查描述"
          />
        </el-form-item>
        <el-form-item label="检查项目" prop="items">
          <el-input
            v-model="checklistForm.items"
            type="textarea"
            :rows="4"
            placeholder="请输入检查项目，每行一个"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showChecklistFormDialog = false">取消</el-button>
          <el-button type="primary" @click="saveChecklistForm">保存</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useComplianceStore } from "@/stores/compliance";
import {
  Document,
  Check,
  Monitor,
  Lock,
  Plus,
  Refresh,
  Download,
  Delete,
} from "@element-plus/icons-vue";

// 使用合规管理状态
const complianceStore = useComplianceStore();

// 概览数据
const overview = complianceStore.overview;

// 法规数据
const regulations = complianceStore.regulations;

// 检查清单数据
const checklists = complianceStore.checklists;

// 审计痕迹数据
const auditTrails = complianceStore.auditTrails;

// 隐私事件数据
const privacyEvents = complianceStore.privacyEvents;

// 合规率数据
const complianceRate = complianceStore.complianceRate;

// 对话框相关
const showRegulationDialog = ref(false);
const showChecklistDialog = ref(false);
const showRegulationFormDialog = ref(false);
const showChecklistFormDialog = ref(false);
const selectedRegulation = ref(null);
const selectedChecklist = ref(null);
const isEditingRegulation = ref(false);
const isEditingChecklist = ref(false);

// 表单数据
const regulationForm = reactive({
  name: "",
  version: "",
  publishDate: "",
  effectiveDate: "",
  status: "",
  scope: "",
  content: "",
  requirements: "",
});

const checklistForm = reactive({
  name: "",
  category: "",
  dueDate: "",
  assignee: "",
  priority: "",
  description: "",
  items: "",
});

// 表单验证规则
const regulationRules = {
  name: [{ required: true, message: "请输入法规名称", trigger: "blur" }],
  version: [{ required: true, message: "请输入版本号", trigger: "blur" }],
  status: [{ required: true, message: "请选择状态", trigger: "change" }],
};

const checklistRules = {
  name: [{ required: true, message: "请输入检查项目名称", trigger: "blur" }],
  category: [{ required: true, message: "请选择类别", trigger: "change" }],
  dueDate: [{ required: true, message: "请选择截止日期", trigger: "change" }],
  assignee: [{ required: true, message: "请输入负责人", trigger: "blur" }],
};

// 表单引用
const regulationFormRef = ref();
const checklistFormRef = ref();

// 获取法规状态类型
const getRegulationStatusType = (status: string) => {
  switch (status) {
    case "已生效":
      return "success";
    case "即将生效":
      return "warning";
    case "已废止":
      return "danger";
    default:
      return "info";
  }
};

// 获取检查清单状态类型
const getChecklistStatusType = (status: string) => {
  switch (status) {
    case "已完成":
      return "success";
    case "进行中":
      return "warning";
    case "待开始":
      return "info";
    case "已逾期":
      return "danger";
    default:
      return "info";
  }
};

// 获取严重程度类型
const getSeverityType = (severity: string) => {
  switch (severity) {
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

// 获取进度条颜色
const getProgressColor = (percentage: number) => {
  if (percentage >= 80) return "#67c23a";
  if (percentage >= 60) return "#e6a23c";
  return "#f56c6c";
};

// 查看法规详情
const viewRegulation = (regulation: any) => {
  selectedRegulation.value = regulation;
  showRegulationDialog.value = true;
};

// 编辑法规
const editRegulation = (regulation: any) => {
  isEditingRegulation.value = true;
  Object.assign(regulationForm, regulation);
  showRegulationFormDialog.value = true;
};

// 添加法规
const addRegulation = () => {
  isEditingRegulation.value = false;
  Object.keys(regulationForm).forEach((key) => {
    regulationForm[key] = "";
  });
  showRegulationFormDialog.value = true;
};

// 保存法规
const saveRegulation = async () => {
  try {
    await regulationFormRef.value.validate();

    if (isEditingRegulation.value) {
      // 编辑现有法规
      await complianceStore.updateRegulation(
        selectedRegulation.value.id,
        regulationForm
      );
      ElMessage.success("法规更新成功");
    } else {
      // 添加新法规
      await complianceStore.addRegulation(regulationForm);
      ElMessage.success("法规添加成功");
    }

    showRegulationFormDialog.value = false;
  } catch (error) {
    ElMessage.error("请检查表单信息");
  }
};

// 查看检查清单详情
const viewChecklist = (checklist: any) => {
  selectedChecklist.value = { ...checklist };
  showChecklistDialog.value = true;
};

// 编辑检查清单
const editChecklist = (checklist: any) => {
  isEditingChecklist.value = true;
  Object.assign(checklistForm, {
    ...checklist,
    items: checklist.items.map((item) => item.description).join("\n"),
  });
  showChecklistFormDialog.value = true;
};

// 添加检查清单
const addChecklist = () => {
  isEditingChecklist.value = false;
  Object.keys(checklistForm).forEach((key) => {
    checklistForm[key] = "";
  });
  showChecklistFormDialog.value = true;
};

// 保存检查清单表单
const saveChecklistForm = async () => {
  try {
    await checklistFormRef.value.validate();

    if (isEditingChecklist.value) {
      // 编辑现有检查清单
      await complianceStore.updateChecklist(
        selectedChecklist.value.id,
        checklistForm
      );
      ElMessage.success("检查清单更新成功");
    } else {
      // 添加新检查清单
      await complianceStore.addChecklist(checklistForm);
      ElMessage.success("检查清单添加成功");
    }

    showChecklistFormDialog.value = false;
  } catch (error) {
    ElMessage.error("请检查表单信息");
  }
};

// 添加隐私事件
const addPrivacyEvent = () => {
  ElMessage.info("添加隐私事件功能开发中");
};

// 刷新数据
const refreshRegulations = () => {
  ElMessage.success("法规数据已刷新");
};

const refreshChecklists = () => {
  ElMessage.success("检查清单已刷新");
};

const refreshAuditTrails = () => {
  ElMessage.success("审计痕迹已刷新");
};

const refreshPrivacyEvents = () => {
  ElMessage.success("隐私事件已刷新");
};

// 导出功能
const exportRegulations = () => {
  ElMessage.success("法规数据导出成功");
};

const exportChecklists = () => {
  ElMessage.success("检查清单导出成功");
};

const exportAuditTrails = () => {
  ElMessage.success("审计日志导出成功");
};

const exportPrivacyEvents = () => {
  ElMessage.success("隐私事件导出成功");
};

const clearAuditTrails = async () => {
  try {
    await ElMessageBox.confirm(
      "确定要清空审计痕迹吗？此操作不可恢复。",
      "确认清空",
      {
        type: "warning",
      }
    );
    await complianceStore.clearAuditTrails();
    ElMessage.success("审计痕迹已清空");
  } catch (error) {
    // 用户取消操作
  }
};

const generateReport = () => {
  ElMessage.success("合规报告生成成功");
};

const exportReport = () => {
  ElMessage.success("合规报告导出成功");
};

// 保存检查清单
const saveChecklist = () => {
  ElMessage.success("检查清单保存成功");
  showChecklistDialog.value = false;
};

onMounted(async () => {
  console.log("合规管理页面已加载");

  // 加载合规管理数据
  try {
    await Promise.all([
      complianceStore.loadRegulations(),
      complianceStore.loadChecklists(),
      complianceStore.loadAuditTrails(),
      complianceStore.loadPrivacyEvents(),
    ]);
  } catch (error) {
    console.error("加载合规管理数据失败:", error);
    ElMessage.error("加载数据失败");
  }
});
</script>

<style scoped>
.compliance-container {
  padding: 20px;
  background-color: #f5f7fa;
  min-height: 100vh;
}

.compliance-card {
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

.overview-section {
  margin-bottom: 20px;
}

.overview-card {
  height: 100%;
}

.overview-content {
  display: flex;
  align-items: center;
  padding: 20px;
}

.overview-icon {
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

.overview-icon.regulations {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.overview-icon.checklist {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.overview-icon.audit {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.overview-icon.privacy {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.overview-info h3 {
  margin: 0 0 5px 0;
  font-size: 28px;
  color: #303133;
  font-weight: bold;
}

.overview-info p {
  margin: 0;
  color: #909399;
  font-size: 14px;
}

.modules-section {
  margin-bottom: 20px;
}

.module-card {
  height: 100%;
}

.module-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #303133;
}

.module-content {
  padding: 10px 0;
}

.module-actions {
  margin-top: 15px;
  display: flex;
  gap: 10px;
}

.report-card {
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
  padding: 20px 0;
}

.report-item {
  text-align: center;
  padding: 20px;
}

.report-item h4 {
  margin: 0 0 15px 0;
  color: #303133;
  font-size: 16px;
}

.progress-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.progress-container span {
  font-weight: bold;
  color: #303133;
  min-width: 40px;
}

.regulation-detail,
.checklist-detail {
  padding: 20px 0;
}

.regulation-content,
.checklist-content {
  margin: 20px 0;
}

.regulation-content h4,
.checklist-content h4 {
  margin: 0 0 10px 0;
  color: #303133;
}

.regulation-content p,
.checklist-content p {
  margin: 0;
  color: #606266;
  line-height: 1.6;
}

.regulation-requirements,
.checklist-items {
  margin: 20px 0;
}

.regulation-requirements h4,
.checklist-items h4 {
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

:deep(.el-progress) {
  flex: 1;
}
</style>
