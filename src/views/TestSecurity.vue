<template>
  <div class="test-security">
    <el-card>
      <template #header>
        <h2>🧪 数据安全功能测试</h2>
      </template>

      <el-row :gutter="20">
        <el-col :span="12">
          <el-card>
            <template #header>
              <h3>加密功能测试</h3>
            </template>
            <el-form>
              <el-form-item label="测试数据">
                <el-input v-model="testData" placeholder="输入要加密的数据" />
              </el-form-item>
              <el-form-item>
                <el-button @click="testEncryption" type="primary"
                  >测试加密</el-button
                >
                <el-button @click="testDecryption" type="success"
                  >测试解密</el-button
                >
              </el-form-item>
              <el-form-item label="加密结果">
                <el-input v-model="encryptedResult" readonly />
              </el-form-item>
              <el-form-item label="解密结果">
                <el-input v-model="decryptedResult" readonly />
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card>
            <template #header>
              <h3>日志功能测试</h3>
            </template>
            <el-form>
              <el-form-item label="日志级别">
                <el-select v-model="logLevel">
                  <el-option label="DEBUG" value="debug" />
                  <el-option label="INFO" value="info" />
                  <el-option label="WARN" value="warn" />
                  <el-option label="ERROR" value="error" />
                </el-select>
              </el-form-item>
              <el-form-item label="日志消息">
                <el-input v-model="logMessage" placeholder="输入日志消息" />
              </el-form-item>
              <el-form-item>
                <el-button @click="addLog" type="primary">添加日志</el-button>
                <el-button @click="clearLogs" type="danger">清空日志</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="margin-top: 20px">
        <el-col :span="12">
          <el-card>
            <template #header>
              <h3>备份功能测试</h3>
            </template>
            <el-form>
              <el-form-item label="备份名称">
                <el-input v-model="backupName" placeholder="输入备份名称" />
              </el-form-item>
              <el-form-item>
                <el-button @click="createTestBackup" type="primary"
                  >创建备份</el-button
                >
                <el-button @click="listBackups" type="info">列出备份</el-button>
              </el-form-item>
              <el-form-item label="备份列表">
                <el-input
                  v-model="backupList"
                  type="textarea"
                  :rows="4"
                  readonly
                />
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card>
            <template #header>
              <h3>安全事件测试</h3>
            </template>
            <el-form>
              <el-form-item label="事件类型">
                <el-select v-model="eventType">
                  <el-option label="加密" value="encryption" />
                  <el-option label="备份" value="backup" />
                  <el-option label="恢复" value="recovery" />
                  <el-option label="访问" value="access" />
                  <el-option label="错误" value="error" />
                </el-select>
              </el-form-item>
              <el-form-item label="严重程度">
                <el-select v-model="eventSeverity">
                  <el-option label="低" value="low" />
                  <el-option label="中" value="medium" />
                  <el-option label="高" value="high" />
                  <el-option label="严重" value="critical" />
                </el-select>
              </el-form-item>
              <el-form-item label="事件描述">
                <el-input
                  v-model="eventDescription"
                  placeholder="输入事件描述"
                />
              </el-form-item>
              <el-form-item>
                <el-button @click="addSecurityEvent" type="primary"
                  >添加事件</el-button
                >
                <el-button @click="getSecurityStats" type="info"
                  >获取统计</el-button
                >
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>

      <el-row style="margin-top: 20px">
        <el-col :span="24">
          <el-card>
            <template #header>
              <h3>测试结果</h3>
            </template>
            <el-input
              v-model="testResults"
              type="textarea"
              :rows="8"
              readonly
            />
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import {
  CryptoUtils,
  LoggingUtils,
  BackupUtils,
  SecurityMonitor,
} from "@/utils/security";

// 响应式数据
const testData = ref("Hello, World!");
const encryptedResult = ref("");
const decryptedResult = ref("");

const logLevel = ref("info");
const logMessage = ref("测试日志消息");

const backupName = ref("测试备份");
const backupList = ref("");

const eventType = ref("access");
const eventSeverity = ref("low");
const eventDescription = ref("测试安全事件");

const testResults = ref("");

// 方法
const addResult = (message: string) => {
  const timestamp = new Date().toLocaleString();
  testResults.value += `[${timestamp}] ${message}\n`;
};

const testEncryption = async () => {
  try {
    addResult("开始测试加密功能...");

    const key = await CryptoUtils.generateKey();
    const encrypted = await CryptoUtils.encrypt(testData.value, key);

    encryptedResult.value = encrypted;
    addResult("加密成功: " + encrypted.substring(0, 50) + "...");

    ElMessage.success("加密测试成功");
  } catch (error) {
    addResult("加密测试失败: " + error);
    ElMessage.error("加密测试失败");
  }
};

const testDecryption = async () => {
  try {
    addResult("开始测试解密功能...");

    if (!encryptedResult.value) {
      addResult("请先进行加密测试");
      return;
    }

    const key = await CryptoUtils.generateKey();
    const decrypted = await CryptoUtils.decrypt(encryptedResult.value, key);

    decryptedResult.value = decrypted;
    addResult("解密结果: " + decrypted);

    ElMessage.success("解密测试成功");
  } catch (error) {
    addResult("解密测试失败: " + error);
    ElMessage.error("解密测试失败");
  }
};

const addLog = () => {
  try {
    LoggingUtils.log(logLevel.value as any, logMessage.value);
    addResult(
      `添加日志: [${logLevel.value.toUpperCase()}] ${logMessage.value}`
    );
    ElMessage.success("日志添加成功");
  } catch (error) {
    addResult("添加日志失败: " + error);
    ElMessage.error("添加日志失败");
  }
};

const clearLogs = () => {
  try {
    LoggingUtils.clearLogs();
    addResult("日志已清空");
    ElMessage.success("日志已清空");
  } catch (error) {
    addResult("清空日志失败: " + error);
    ElMessage.error("清空日志失败");
  }
};

const createTestBackup = async () => {
  try {
    addResult("开始创建测试备份...");

    const backupData = {
      testData: "测试数据",
      timestamp: new Date().toISOString(),
      logs: LoggingUtils.getLogs(),
      events: SecurityMonitor.getEvents(),
    };

    const backupId = await BackupUtils.createBackup(
      backupData,
      backupName.value
    );
    addResult(`备份创建成功，ID: ${backupId}`);

    ElMessage.success("备份创建成功");
  } catch (error) {
    addResult("创建备份失败: " + error);
    ElMessage.error("创建备份失败");
  }
};

const listBackups = () => {
  try {
    const backups = BackupUtils.getBackupList();
    backupList.value = JSON.stringify(backups, null, 2);
    addResult(`获取到 ${backups.length} 个备份`);
    ElMessage.success("备份列表获取成功");
  } catch (error) {
    addResult("获取备份列表失败: " + error);
    ElMessage.error("获取备份列表失败");
  }
};

const addSecurityEvent = () => {
  try {
    const eventId = SecurityMonitor.addEvent(
      eventType.value,
      eventSeverity.value as any,
      eventDescription.value
    );
    addResult(`安全事件已添加，ID: ${eventId}`);
    ElMessage.success("安全事件添加成功");
  } catch (error) {
    addResult("添加安全事件失败: " + error);
    ElMessage.error("添加安全事件失败");
  }
};

const getSecurityStats = () => {
  try {
    const stats = SecurityMonitor.getSecurityStats();
    addResult(
      `安全统计: 总事件=${stats.totalEvents}, 严重事件=${stats.criticalEvents}, 已解决=${stats.resolvedEvents}`
    );
    ElMessage.success("安全统计获取成功");
  } catch (error) {
    addResult("获取安全统计失败: " + error);
    ElMessage.error("获取安全统计失败");
  }
};
</script>

<style scoped>
.test-security {
  padding: 20px;
}

.el-card {
  margin-bottom: 20px;
}

.el-form-item {
  margin-bottom: 15px;
}
</style>
