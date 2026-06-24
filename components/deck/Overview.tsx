"use client";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "@/data/slides";
import { colors, fonts } from "@/lib/tokens";

interface OverviewProps {
  open: boolean;
  current: number;
  onSelect: (i: number) => void;
  onClose: () => void;
}

export function Overview({ open, current, onSelect, onClose }: OverviewProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] overflow-auto"
          style={{ background: "rgba(46,42,38,0.92)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="p-8">
            <div
              className="text-center mb-6"
              style={{ fontFamily: fonts.display, color: colors.paper, fontSize: "20px" }}
            >
              슬라이드 전체 보기 — Esc로 닫기
            </div>
            <div
              className="grid gap-3"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}
              onClick={(e) => e.stopPropagation()}
            >
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => { onSelect(i); onClose(); }}
                  className="text-left rounded-lg p-3 transition-transform hover:scale-105"
                  style={{
                    background: i === current ? colors.clay : colors.surface,
                    border: `2px solid ${i === current ? colors.clayDeep : colors.line}`,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  <div
                    className="text-xs mb-1"
                    style={{ fontFamily: fonts.body, color: i === current ? colors.surface : colors.inkSoft }}
                  >
                    {slide.id} · {slide.chapter}
                  </div>
                  <div
                    className="text-sm font-medium leading-tight"
                    style={{
                      fontFamily: fonts.display,
                      color: i === current ? colors.paper : colors.ink,
                    }}
                  >
                    {slide.title || slide.quoteText?.slice(0, 40) || slide.bridgeText?.slice(0, 40) || "—"}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
