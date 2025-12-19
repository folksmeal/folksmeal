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
        description: "End-to-End food safety and consistency",
        Caterers: "Inconsistent quality across vendors",
        aggregators: "No control over restaurant standards",
        folksmeal: "Self-operated kitchens with strict hygiene protocols"
    },
    {
        icon: <Heart className="w-5 h-5" />,
        category: "Nutrition Focus",
        description: "Dietitian-approved balanced meals",
        Caterers: "Generic vendor menus",
        aggregators: "Restaurant food, often unhealthy",
        folksmeal: "Curated daily menus for office wellness"
    },
    {
        icon: <Zap className="w-5 h-5" />,
        category: "Technology",
        description: "Seamless integration and automation",
        Caterers: "Manual coordination required",
        aggregators: "Consumer app, not B2B optimized",
        folksmeal: "One platform for ordering, payments & subsidies"
    },
    {
        icon: <BarChart3 className="w-5 h-5" />,
        category: "Data & Insights",
        description: "Employee wellness and engagement metrics",
        Caterers: "No data or reporting",
        aggregators: "Basic order history only",
        folksmeal: "Real-time usage & feedback analytics"
    },
    {
        icon: <TrendingUp className="w-5 h-5" />,
        category: "Business Model",
        description: "Predictable recurring revenue",
        Caterers: "Event-based, irregular income",
        aggregators: "Consumer transactions, no B2B focus",
        folksmeal: "Managed meal program with stable operations"
    },
    {
        icon: <Rocket className="w-5 h-5" />,
        category: "Scalability",
        description: "Growth without compromising quality",
        Caterers: "Limited by vendor capacity",
        aggregators: "High volume but fragmented quality",
        folksmeal: "Centralized operations, scalable & consistent"
    }
];
