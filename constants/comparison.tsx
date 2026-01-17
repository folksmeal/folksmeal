import React from "react";
import { MdSecurity, MdFavorite, MdFlashOn, MdInsertChart, MdTrendingUp, MdRocketLaunch } from "react-icons/md";

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
        icon: <MdSecurity className="w-5 h-5" />,
        category: "Quality Control",
        description: "End-to-End food safety and consistency",
        Caterers: "Inconsistent quality across vendors",
        aggregators: "No control over restaurant standards",
        folksmeal: "Self-operated kitchens with strict hygiene protocols"
    },
    {
        icon: <MdFavorite className="w-5 h-5" />,
        category: "Nutrition Focus",
        description: "Dietitian-approved balanced meals",
        Caterers: "Generic vendor menus",
        aggregators: "Restaurant food, often unhealthy",
        folksmeal: "Curated daily menus for office wellness"
    },
    {
        icon: <MdFlashOn className="w-5 h-5" />,
        category: "Technology",
        description: "Seamless integration and automation",
        Caterers: "Manual coordination required",
        aggregators: "Consumer app, not B2B optimized",
        folksmeal: "One platform for ordering, payments & subsidies"
    },
    {
        icon: <MdInsertChart className="w-5 h-5" />,
        category: "Data & Insights",
        description: "Employee wellness and engagement metrics",
        Caterers: "No data or reporting",
        aggregators: "Basic order history only",
        folksmeal: "Real-time usage & feedback analytics"
    },
    {
        icon: <MdTrendingUp className="w-5 h-5" />,
        category: "Business Model",
        description: "Predictable recurring revenue",
        Caterers: "Event-based, irregular income",
        aggregators: "Consumer transactions, no B2B focus",
        folksmeal: "Managed meal program with stable operations"
    },
    {
        icon: <MdRocketLaunch className="w-5 h-5" />,
        category: "Scalability",
        description: "Growth without compromising quality",
        Caterers: "Limited by vendor capacity",
        aggregators: "High volume but fragmented quality",
        folksmeal: "Centralized operations, scalable & consistent"
    }
];
