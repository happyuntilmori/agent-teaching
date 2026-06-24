"use client";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "@/data/slides";
import { colors, fonts } from "@/lib/tokens";

interface PresenterNotesProps {
  open: boolean;
  current: number;
  onClose: () => void;
}

export function PresenterNotes({ open, current, onClose }: PresenterNotesProps) {
  const slide = slides[current];
  const next = slides[current + 1];
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed right-0 top-0 bottom-0 z-[100] overflow-auto flex flex-col"
          style={{
            width: "380px",
            background: colors.ink,
            borderLeft: `2px solid ${colors.line}`,
          }}
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div
            className="p-4 border-b flex items-center justify-between"
            style={{ borderColor: colors.inkSoft }}
          >
            <span style={{ fontFamily: fonts.body, color: colors.paper, fontSize: "13px" }}>
              발표자 노트 — {slide.id}
            </span>
            <button
              onClick={onClose}
              style={{ color: colors.inkSoft, fontSize: "18px", lineHeight: 1 }}
            >
              ✕
            </button>
          </div>
          <div className="flex-1 p-5 overflow-auto">
            <p
              className="whitespace-pre-line leading-relaxed"
              style={{ fontFamily: fonts.body, color: colors.paper, fontSize: "16px" }}
            >
              {slide.notes}
            </p>
          </div>
          {next && (
            <div
              className="p-4 border-t"
              style={{ borderColor: colors.inkSoft }}
            >
              <div
                className="text-xs mb-1"
                style={{ fontFamily: fonts.body, color: colors.inkSoft }}
              >
                다음: {next.id}
              </div>
              <div
                style={{ fontFamily: fonts.display, color: colors.lineStrong, fontSize: "14px" }}
              >
                {next.title || next.quoteText?.slice(0, 50) || next.bridgeText?.slice(0, 50)}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
