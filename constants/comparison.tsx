import React from "react";
import { Shield, Heart, Zap, BarChart3, TrendingUp, Rocket } from "lucide-react";

export interface ComparisonFeature {
    icon: React.ReactNode;
    category: string;
    description: string;
    Caterers: string;
    aggregators: string;
    folksmeal: string;
}

export const comparisonFeatures: ComparisonFeature[] = [
    {
        icon: <Shield className="w-5 h-5" />,
        category: "Quality Control",
        description: "End-to-end food safety and consistency",
        Caterers: "Inconsistent quality across vendors",
        aggregators: "No control over restaurant standards",
        folksmeal: "ISO-certified central kitchen with real-time monitoring"
    },
    {
        icon: <Heart className="w-5 h-5" />,
        category: "Nutrition Focus",
        description: "Dietitian-approved balanced meals",
        Caterers: "Generic catering menus",
        aggregators: "Restaurant food, no health focus",
        folksmeal: "Dietitian-curated menus with macro tracking"
    },
    {
        icon: <Zap className="w-5 h-5" />,
        category: "Technology",
        description: "Seamless integration and automation",
        Caterers: "Manual coordination required",
        aggregators: "Consumer app, not B2B optimized",
        folksmeal: "HRMS integration, analytics dashboard, automated billing"
    },
    {
        icon: <BarChart3 className="w-5 h-5" />,
        category: "Data & Insights",
        description: "Employee wellness and engagement metrics",
        Caterers: "No data or reporting",
        aggregators: "Basic order history only",
        folksmeal: "Comprehensive analytics on preferences, nutrition, ROI"
    },
    {
        icon: <TrendingUp className="w-5 h-5" />,
        category: "Business Model",
        description: "Predictable recurring revenue",
        Caterers: "Event-based, irregular income",
        aggregators: "Consumer transactions, no B2B focus",
        folksmeal: "Subscription-based B2B with long-term contracts"
    },
    {
        icon: <Rocket className="w-5 h-5" />,
        category: "Scalability",
        description: "Growth without compromising quality",
        Caterers: "Limited by vendor capacity",
        aggregators: "High volume but fragmented quality",
        folksmeal: "Centralized operations with consistent brand experience"
    }
];
