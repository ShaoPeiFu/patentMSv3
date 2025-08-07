// AI辅助功能相关类型定义

export interface SimilarityResult {
  id: number;
  patentId: number;
  similarPatentId: number;
  similarityScore: number;
  similarityType: "title" | "abstract" | "claims" | "technical_field";
  matchedText: string;
  createdAt: string;
}

export interface ClassificationSuggestion {
  id: number;
  patentId: number;
  suggestedCategory: string;
  confidence: number;
  reasoning: string;
  alternatives: string[];
  createdAt: string;
}

export interface SmartSummary {
  id: number;
  patentId: number;
  summaryType: "technical" | "business" | "legal" | "comprehensive";
  content: string;
  keyPoints: string[];
  technicalHighlights: string[];
  businessValue: string;
  riskFactors: string[];
  createdAt: string;
}

export interface RiskAlert {
  id: number;
  patentId: number;
  alertType: "expiration" | "infringement" | "competitor" | "market" | "legal";
  severity: "low" | "medium" | "high" | "critical";
  title: string;
  description: string;
  riskScore: number;
  recommendations: string[];
  isActive: boolean;
  createdAt: string;
  resolvedAt?: string;
}

export interface AIAnalysisResult {
  patentId: number;
  similarityResults: SimilarityResult[];
  classificationSuggestions: ClassificationSuggestion[];
  smartSummary: SmartSummary;
  riskAlerts: RiskAlert[];
  overallRiskScore: number;
  lastAnalyzed: string;
}

export interface AIConfig {
  enableSimilarityDetection: boolean;
  enableClassificationSuggestion: boolean;
  enableSmartSummary: boolean;
  enableRiskAlert: boolean;
  enableKnowledgeGraph: boolean;
  similarityThreshold: number;
  riskAlertThreshold: number;
  autoAnalysis: boolean;
}

// 知识图谱相关类型定义
export interface GraphNode {
  id: string;
  name: string;
  type: "technology" | "inventor" | "patent" | "stage" | "company";
  weight: number;
  connections: number;
  description?: string;
  metadata?: Record<string, any>;
}

export interface GraphEdge {
  source: string;
  target: string;
  weight: number;
  type: "similarity" | "collaboration" | "citation" | "evolution" | "ownership";
  metadata?: Record<string, any>;
}

export interface KnowledgeGraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
  type: "technology" | "inventor" | "citation" | "evolution";
  statistics: {
    nodes: number;
    edges: number;
    domains?: number;
    inventors?: number;
    collaborations?: number;
    coreInventors?: number;
    citedPatents?: number;
    citingPatents?: number;
    citationDepth?: number;
    techNodes?: number;
    evolutionStages?: number;
    breakthroughs?: number;
  };
  createdAt: string;
}

export interface KnowledgeGraphParams {
  patentScope: "all" | "technology" | "time" | "applicant";
  depth: number;
  maxNodes: number;
  timeRange?: [string, string];
  technologyField?: string;
  applicantName?: string;
}
