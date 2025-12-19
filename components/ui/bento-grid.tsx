import { cn } from "@/lib/utils";
import { MovingBorderContainer } from "./moving-border";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    contentClassName,
    borderClassName,
    title,
    description,
    header,
    icon,
    duration = 3000,
}: {
    className?: string;
    contentClassName?: string;
    borderClassName?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    duration?: number;
}) => {
    return (
        <MovingBorderContainer
            borderRadius="1.5rem"
            containerClassName={className}
            className={cn(
                "h-full w-full p-6 flex flex-col justify-between space-y-4 bg-white/80 hover:bg-white border border-primary/20 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]",
                contentClassName
            )}
            borderClassName={borderClassName}
            duration={duration}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200 flex items-center gap-4">
                <div className="flex-1">
                    <div className="font-sans font-bold text-slate-900 mb-2 text-lg">
                        {title}
                    </div>
                    <div className="font-sans font-normal text-sm text-slate-500 leading-relaxed">
                        {description}
                    </div>
                </div>
                <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                    {icon}
                </div>
            </div>
        </MovingBorderContainer>
    );
};
