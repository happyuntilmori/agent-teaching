"use client";
import { colors, fonts } from "@/lib/tokens";

interface SlideCounterProps {
  current: number;
  total: number;
  chapter?: string;
}

export function SlideCounter({ current, total, chapter }: SlideCounterProps) {
  return (
    <div className="fixed bottom-3 right-6 z-50 flex items-center gap-3 select-none">
      {chapter && (
        <span
          className="text-xs px-2 py-0.5 rounded-full"
          style={{
            fontFamily: fonts.body,
            color: colors.inkSoft,
            background: colors.line,
            fontSize: "13px",
          }}
        >
          {chapter}
        </span>
      )}
      <span
        style={{
          fontFamily: fonts.body,
          color: colors.inkSoft,
          fontSize: "13px",
        }}
      >
        {current + 1} / {total}
      </span>
    </div>
  );
}
