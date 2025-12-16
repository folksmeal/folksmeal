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
            borderRadius="0.75rem"
            containerClassName={className}
            className={cn(
                "h-full w-full p-4 flex flex-col justify-between space-y-4 bg-foreground/3 border-4 border-foreground/4! backdrop-blur-2xl transition-colors duration-500",
                contentClassName
            )}
            borderClassName={borderClassName}
            duration={duration}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200 flex items-center gap-2">
                <div className="flex-1">
                    <div className="font-sans font-bold text-neutral-200 mb-1">
                        {title}
                    </div>
                    <div className="font-sans font-normal text-xs text-neutral-300">
                        {description}
                    </div>
                </div>
                <div className="p-4 bg-foreground/1 backdrop-blur-3xl rounded-xl">
                    {icon}
                </div>
            </div>
        </MovingBorderContainer>
    );
};
