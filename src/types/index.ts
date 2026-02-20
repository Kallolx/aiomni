/**
 * Core type definitions for AIOmni platform
 */

export interface Entity {
  id: string;
  name: string;
  brandVariants?: string[];
  address: string;
  phone: string;
  hours: OperatingHours;
  services?: string[];
  logo?: string;
  website?: string;
  profileCompleteness: number;
}

export interface OperatingHours {
  monday?: TimeRange;
  tuesday?: TimeRange;
  wednesday?: TimeRange;
  thursday?: TimeRange;
  friday?: TimeRange;
  saturday?: TimeRange;
  sunday?: TimeRange;
}

export interface TimeRange {
  open: string;
  close: string;
  closed?: boolean;
}

export interface PromptResult {
  id: string;
  promptText: string;
  provider: AIProvider;
  brandMentioned: boolean;
  cited: boolean;
  accurate: boolean;
  responseText?: string;
  timestamp: Date;
  entityId: string;
}

export type AIProvider = "ChatGPT" | "Claude" | "Gemini" | "Perplexity";

export interface Issue {
  id: string;
  title: string;
  description: string;
  severity: "critical" | "warning" | "info";
  source: string;
  discoveredAt: Date;
  resolvedAt?: Date;
  status: "open" | "resolved" | "ignored";
  entityId: string;
  conflictDetails?: {
    entityTruth: string;
    foundValue: string;
  };
}

export interface Source {
  id: string;
  name: string;
  type: "website" | "directory";
  url: string;
  logo?: string;
  healthStatus: "healthy" | "issues" | "error";
  citationRate: number;
  lastScraped?: Date;
  extractedData?: {
    hours?: string;
    phone?: string;
    address?: string;
  };
}

export interface MetricScore {
  label: string;
  value: number;
  maxValue: number;
  status: "success" | "warning" | "error";
  trend?: "up" | "down" | "stable";
}

export interface TrendDataPoint {
  date: string;
  score: number;
}

export interface Client {
  id: string;
  name: string;
  entityId: string;
  visibilityScore: number;
  trend: "up" | "down" | "stable";
  sparklineData: number[];
  logo?: string;
}
