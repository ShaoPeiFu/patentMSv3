import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type {
  SimilarityResult,
  ClassificationSuggestion,
  SmartSummary,
  RiskAlert,
  AIAnalysisResult,
  AIConfig,
  KnowledgeGraphData,
  KnowledgeGraphParams,
  GraphNode,
  GraphEdge,
} from "@/types/ai";

export const useAIStore = defineStore("ai", () => {
  // 状态
  const similarityResults = ref<SimilarityResult[]>([]);
  const classificationSuggestions = ref<ClassificationSuggestion[]>([]);
  const smartSummaries = ref<SmartSummary[]>([]);
  const riskAlerts = ref<RiskAlert[]>([]);
  const aiConfig = ref<AIConfig>({
    enableSimilarityDetection: true,
    enableClassificationSuggestion: true,
    enableSmartSummary: true,
    enableRiskAlert: true,
    enableKnowledgeGraph: true,
    similarityThreshold: 0.7,
    riskAlertThreshold: 0.6,
    autoAnalysis: true,
  });

  // 知识图谱相关状态
  const knowledgeGraphs = ref<KnowledgeGraphData[]>([]);

  // 计算属性
  const activeRiskAlerts = computed(() =>
    riskAlerts.value.filter((alert) => alert.isActive)
  );

  const criticalRiskAlerts = computed(() =>
    activeRiskAlerts.value.filter((alert) => alert.severity === "critical")
  );

  const highRiskAlerts = computed(() =>
    activeRiskAlerts.value.filter((alert) => alert.severity === "high")
  );

  const similarityStatistics = computed(() => {
    const total = similarityResults.value.length;
    const highSimilarity = similarityResults.value.filter(
      (r) => r.similarityScore > 0.8
    ).length;
    const mediumSimilarity = similarityResults.value.filter(
      (r) => r.similarityScore > 0.6 && r.similarityScore <= 0.8
    ).length;
    const lowSimilarity = similarityResults.value.filter(
      (r) => r.similarityScore <= 0.6
    ).length;

    return {
      total,
      highSimilarity,
      mediumSimilarity,
      lowSimilarity,
      averageScore:
        total > 0
          ? similarityResults.value.reduce(
              (sum, r) => sum + r.similarityScore,
              0
            ) / total
          : 0,
    };
  });

  // 从localStorage加载数据
  const loadFromStorage = () => {
    const storedSimilarity = localStorage.getItem("ai_similarity_results");
    const storedClassifications = localStorage.getItem(
      "ai_classification_suggestions"
    );
    const storedSummaries = localStorage.getItem("ai_smart_summaries");
    const storedAlerts = localStorage.getItem("ai_risk_alerts");
    const storedConfig = localStorage.getItem("ai_config");
    const storedGraphs = localStorage.getItem("ai_knowledge_graphs");

    if (storedSimilarity) {
      similarityResults.value = JSON.parse(storedSimilarity);
    }
    if (storedClassifications) {
      classificationSuggestions.value = JSON.parse(storedClassifications);
    }
    if (storedSummaries) {
      smartSummaries.value = JSON.parse(storedSummaries);
    }
    if (storedAlerts) {
      riskAlerts.value = JSON.parse(storedAlerts);
    }
    if (storedGraphs) {
      knowledgeGraphs.value = JSON.parse(storedGraphs);
    }
    if (storedConfig) {
      aiConfig.value = { ...aiConfig.value, ...JSON.parse(storedConfig) };
    }
  };

  // 保存数据到localStorage
  const saveToStorage = () => {
    localStorage.setItem(
      "ai_similarity_results",
      JSON.stringify(similarityResults.value)
    );
    localStorage.setItem(
      "ai_classification_suggestions",
      JSON.stringify(classificationSuggestions.value)
    );
    localStorage.setItem(
      "ai_smart_summaries",
      JSON.stringify(smartSummaries.value)
    );
    localStorage.setItem("ai_risk_alerts", JSON.stringify(riskAlerts.value));
    localStorage.setItem(
      "ai_knowledge_graphs",
      JSON.stringify(knowledgeGraphs.value)
    );
    localStorage.setItem("ai_config", JSON.stringify(aiConfig.value));
  };

  // 专利相似性检测
  const detectSimilarity = async (patentId: number, patentData: any) => {
    // 模拟AI相似性检测
    const mockSimilarities: SimilarityResult[] = [
      {
        id: Date.now(),
        patentId,
        similarPatentId: patentId + 1,
        similarityScore: 0.85,
        similarityType: "title",
        matchedText: "基于深度学习的图像识别方法",
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now() + 1,
        patentId,
        similarPatentId: patentId + 2,
        similarityScore: 0.72,
        similarityType: "abstract",
        matchedText: "人工智能算法优化技术",
        createdAt: new Date().toISOString(),
      },
    ];

    similarityResults.value.push(...mockSimilarities);
    saveToStorage();
    return mockSimilarities;
  };

  // 自动分类建议
  const suggestClassification = async (patentId: number, patentData: any) => {
    // 模拟AI分类建议
    const suggestion: ClassificationSuggestion = {
      id: Date.now(),
      patentId,
      suggestedCategory: "人工智能",
      confidence: 0.92,
      reasoning:
        "基于专利标题和摘要分析，该专利主要涉及机器学习算法，建议归类为人工智能领域",
      alternatives: ["机器学习", "深度学习", "计算机视觉"],
      createdAt: new Date().toISOString(),
    };

    classificationSuggestions.value.push(suggestion);
    saveToStorage();
    return suggestion;
  };

  // 智能摘要生成
  const generateSmartSummary = async (
    patentId: number,
    patentData: any,
    summaryType:
      | "technical"
      | "business"
      | "legal"
      | "comprehensive" = "comprehensive"
  ) => {
    // 模拟AI摘要生成
    const summary: SmartSummary = {
      id: Date.now(),
      patentId,
      summaryType,
      content:
        "该专利提出了一种基于深度学习的图像识别方法，通过改进的卷积神经网络结构，实现了更高的识别准确率和更快的处理速度。该技术可广泛应用于安防监控、医疗诊断、自动驾驶等领域。",
      keyPoints: [
        "改进的CNN网络结构",
        "提高识别准确率",
        "优化处理速度",
        "多领域应用潜力",
      ],
      technicalHighlights: [
        "使用残差连接减少梯度消失",
        "引入注意力机制提升特征提取",
        "采用轻量化设计降低计算复杂度",
      ],
      businessValue:
        "该技术具有广阔的商业化前景，预计市场规模超过100亿美元，主要应用领域包括智能安防、医疗影像分析、自动驾驶等。",
      riskFactors: [
        "技术更新迭代快，存在被替代风险",
        "专利保护范围需要进一步明确",
        "竞争对手可能开发类似技术",
      ],
      createdAt: new Date().toISOString(),
    };

    smartSummaries.value.push(summary);
    saveToStorage();
    return summary;
  };

  // 风险预警系统
  const generateRiskAlerts = async (patentId: number, patentData: any) => {
    // 模拟AI风险预警
    const alerts: RiskAlert[] = [
      {
        id: Date.now(),
        patentId,
        alertType: "expiration",
        severity: "high",
        title: "专利即将过期",
        description: "该专利距离到期时间不足2年，建议及时进行续费或技术升级",
        riskScore: 0.8,
        recommendations: [
          "评估专利续费的必要性",
          "考虑技术升级和专利申请",
          "制定专利保护策略",
        ],
        isActive: true,
        createdAt: new Date().toISOString(),
      },
      {
        id: Date.now() + 1,
        patentId,
        alertType: "competitor",
        severity: "medium",
        title: "竞争对手技术威胁",
        description: "检测到3家竞争对手在相似技术领域申请了相关专利",
        riskScore: 0.6,
        recommendations: [
          "加强专利布局",
          "监控竞争对手动态",
          "考虑技术合作或收购",
        ],
        isActive: true,
        createdAt: new Date().toISOString(),
      },
    ];

    riskAlerts.value.push(...alerts);
    saveToStorage();
    return alerts;
  };

  // 综合分析
  const performAIAnalysis = async (patentId: number, patentData: any) => {
    const results: AIAnalysisResult = {
      patentId,
      similarityResults: [],
      classificationSuggestions: [],
      smartSummary: null as any,
      riskAlerts: [],
      overallRiskScore: 0,
      lastAnalyzed: new Date().toISOString(),
    };

    if (aiConfig.value.enableSimilarityDetection) {
      results.similarityResults = await detectSimilarity(patentId, patentData);
    }

    if (aiConfig.value.enableClassificationSuggestion) {
      results.classificationSuggestions = [
        await suggestClassification(patentId, patentData),
      ];
    }

    if (aiConfig.value.enableSmartSummary) {
      results.smartSummary = await generateSmartSummary(patentId, patentData);
    }

    if (aiConfig.value.enableRiskAlert) {
      results.riskAlerts = await generateRiskAlerts(patentId, patentData);
    }

    // 计算综合风险评分
    const riskScores = results.riskAlerts.map((alert) => alert.riskScore);
    results.overallRiskScore =
      riskScores.length > 0
        ? riskScores.reduce((sum, score) => sum + score, 0) / riskScores.length
        : 0;

    return results;
  };

  // 更新AI配置
  const updateAIConfig = (config: Partial<AIConfig>) => {
    aiConfig.value = { ...aiConfig.value, ...config };
    saveToStorage();
  };

  // 解决风险预警
  const resolveRiskAlert = (alertId: number) => {
    const alert = riskAlerts.value.find((a) => a.id === alertId);
    if (alert) {
      alert.isActive = false;
      alert.resolvedAt = new Date().toISOString();
      saveToStorage();
    }
  };

  // 知识图谱相关方法
  const generateKnowledgeGraph = async (params: KnowledgeGraphParams) => {
    try {
      // 模拟知识图谱生成
      const graphData: KnowledgeGraphData = {
        nodes: [],
        edges: [],
        type: "technology",
        statistics: {
          nodes: 0,
          edges: 0,
        },
        createdAt: new Date().toISOString(),
      };

      // 根据参数生成不同类型的图谱
      switch (params.patentScope) {
        case "technology":
          graphData.type = "technology";
          graphData.nodes = [
            {
              id: "AI",
              name: "人工智能",
              type: "technology",
              weight: 0.9,
              connections: 15,
            },
            {
              id: "ML",
              name: "机器学习",
              type: "technology",
              weight: 0.8,
              connections: 12,
            },
            {
              id: "NLP",
              name: "自然语言处理",
              type: "technology",
              weight: 0.7,
              connections: 10,
            },
            {
              id: "CV",
              name: "计算机视觉",
              type: "technology",
              weight: 0.6,
              connections: 8,
            },
            {
              id: "RL",
              name: "强化学习",
              type: "technology",
              weight: 0.5,
              connections: 6,
            },
          ];
          graphData.edges = [
            { source: "AI", target: "ML", weight: 0.8, type: "similarity" },
            { source: "AI", target: "NLP", weight: 0.6, type: "similarity" },
            { source: "AI", target: "CV", weight: 0.5, type: "similarity" },
            { source: "ML", target: "RL", weight: 0.7, type: "similarity" },
            { source: "NLP", target: "CV", weight: 0.4, type: "similarity" },
          ];
          graphData.statistics = {
            nodes: graphData.nodes.length,
            edges: graphData.edges.length,
            domains: 5,
          };
          break;

        case "applicant":
          graphData.type = "inventor";
          graphData.nodes = [
            {
              id: "inventor1",
              name: "张三",
              type: "inventor",
              weight: 0.9,
              connections: 8,
            },
            {
              id: "inventor2",
              name: "李四",
              type: "inventor",
              weight: 0.8,
              connections: 6,
            },
            {
              id: "inventor3",
              name: "王五",
              type: "inventor",
              weight: 0.7,
              connections: 5,
            },
            {
              id: "inventor4",
              name: "赵六",
              type: "inventor",
              weight: 0.6,
              connections: 4,
            },
          ];
          graphData.edges = [
            {
              source: "inventor1",
              target: "inventor2",
              weight: 0.8,
              type: "collaboration",
            },
            {
              source: "inventor1",
              target: "inventor3",
              weight: 0.6,
              type: "collaboration",
            },
            {
              source: "inventor2",
              target: "inventor4",
              weight: 0.5,
              type: "collaboration",
            },
          ];
          graphData.statistics = {
            nodes: graphData.nodes.length,
            edges: graphData.edges.length,
            inventors: graphData.nodes.length,
            collaborations: graphData.edges.length,
            coreInventors: 2,
          };
          break;

        case "time":
          graphData.type = "citation";
          graphData.nodes = [
            {
              id: "patent1",
              name: "专利A",
              type: "patent",
              weight: 0.9,
              connections: 10,
            },
            {
              id: "patent2",
              name: "专利B",
              type: "patent",
              weight: 0.8,
              connections: 8,
            },
            {
              id: "patent3",
              name: "专利C",
              type: "patent",
              weight: 0.7,
              connections: 6,
            },
            {
              id: "patent4",
              name: "专利D",
              type: "patent",
              weight: 0.6,
              connections: 4,
            },
          ];
          graphData.edges = [
            {
              source: "patent1",
              target: "patent2",
              weight: 0.8,
              type: "citation",
            },
            {
              source: "patent2",
              target: "patent3",
              weight: 0.6,
              type: "citation",
            },
            {
              source: "patent3",
              target: "patent4",
              weight: 0.5,
              type: "citation",
            },
          ];
          graphData.statistics = {
            nodes: graphData.nodes.length,
            edges: graphData.edges.length,
            citedPatents: graphData.nodes.length,
            citingPatents: graphData.edges.length,
            citationDepth: 3,
          };
          break;

        default:
          graphData.type = "evolution";
          graphData.nodes = [
            {
              id: "stage1",
              name: "基础研究",
              type: "stage",
              weight: 0.9,
              connections: 3,
            },
            {
              id: "stage2",
              name: "技术突破",
              type: "stage",
              weight: 0.8,
              connections: 4,
            },
            {
              id: "stage3",
              name: "应用开发",
              type: "stage",
              weight: 0.7,
              connections: 5,
            },
            {
              id: "stage4",
              name: "商业化",
              type: "stage",
              weight: 0.6,
              connections: 2,
            },
          ];
          graphData.edges = [
            {
              source: "stage1",
              target: "stage2",
              weight: 0.8,
              type: "evolution",
            },
            {
              source: "stage2",
              target: "stage3",
              weight: 0.6,
              type: "evolution",
            },
            {
              source: "stage3",
              target: "stage4",
              weight: 0.5,
              type: "evolution",
            },
          ];
          graphData.statistics = {
            nodes: graphData.nodes.length,
            edges: graphData.edges.length,
            techNodes: graphData.nodes.length,
            evolutionStages: graphData.nodes.length,
            breakthroughs: 1,
          };
          break;
      }

      knowledgeGraphs.value.push(graphData);
      saveToStorage();
      return graphData;
    } catch (error) {
      throw new Error(`知识图谱生成失败: ${error}`);
    }
  };

  const getKnowledgeGraphs = () => {
    return knowledgeGraphs.value;
  };

  const clearKnowledgeGraphs = () => {
    knowledgeGraphs.value = [];
    saveToStorage();
  };

  // 初始化
  loadFromStorage();

  return {
    // 状态
    similarityResults,
    classificationSuggestions,
    smartSummaries,
    riskAlerts,
    knowledgeGraphs,
    aiConfig,

    // 计算属性
    activeRiskAlerts,
    criticalRiskAlerts,
    highRiskAlerts,
    similarityStatistics,

    // 方法
    detectSimilarity,
    suggestClassification,
    generateSmartSummary,
    generateRiskAlerts,
    performAIAnalysis,
    updateAIConfig,
    resolveRiskAlert,
    generateKnowledgeGraph,
    getKnowledgeGraphs,
    clearKnowledgeGraphs,
    loadFromStorage,
    saveToStorage,
  };
});
