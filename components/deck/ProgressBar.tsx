"use client";
import { colors } from "@/lib/tokens";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = ((current + 1) / total) * 100;
  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-1 z-50"
      style={{ background: colors.line }}
    >
      <div
        className="h-full transition-all duration-300 ease-out"
        style={{ width: `${pct}%`, background: colors.clay }}
      />
    </div>
  );
}
