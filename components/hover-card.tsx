import { cn } from "@/lib/utils"
import React from "react"

type HoverCardProps = {
    children: React.ReactNode,
    className?: string
}

export default function HoverCard({ children, className }: HoverCardProps) {
    return (
        <div className={cn("relative group overflow-hidden", className)}>
            <div className="relative z-10">{children}</div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent to-primary transition-opacity duration-300"/>
        </div>
    )
}