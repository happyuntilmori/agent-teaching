"use client";
import { colors } from "@/lib/tokens";

interface SlideShellProps {
  children: React.ReactNode;
  variant?: "paper" | "paper-alt" | "clay" | "dark";
  className?: string;
}

export function SlideShell({ children, variant = "paper", className = "" }: SlideShellProps) {
  const bgMap: Record<string, string> = {
    paper: colors.paper,
    "paper-alt": colors.paperAlt,
    clay: colors.clay,
    dark: colors.ink,
  };

  return (
    <div
      className={`relative w-full h-full flex flex-col overflow-hidden ${className}`}
      style={{ background: bgMap[variant] }}
    >
      {children}
    </div>
  );
}
