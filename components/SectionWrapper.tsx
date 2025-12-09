import { ReactNode } from "react";
import { cn } from "@/components/ui/Button"; // Reusing cn from Button file for now, typically in lib/utils

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
    background?: "white" | "cream" | "none";
}

export default function SectionWrapper({
    children,
    className,
    id,
    background = "none",
}: SectionWrapperProps) {
    const bgStyles = {
        white: "bg-white",
        cream: "bg-mango-cream",
        none: "",
    };

    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24 px-4 sm:px-6 lg:px-8",
                bgStyles[background],
                className
            )}
        >
            <div className="max-w-7xl mx-auto">{children}</div>
        </section>
    );
}
