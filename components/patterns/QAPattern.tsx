"use client";
import { motion } from "framer-motion";
import { SlideData } from "@/data/slides";
import { SlideShell } from "@/components/deck/SlideShell";
import { colors, fonts } from "@/lib/tokens";

export function QAPattern({ slide }: { slide: SlideData }) {
  return (
    <SlideShell variant="paper">
      <div className="w-full h-full flex flex-col items-center justify-center" style={{ padding: "8%" }}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              fontFamily: fonts.display,
              color: colors.inkSoft,
              fontSize: "clamp(12px, 1.2vw, 16px)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            {slide.chapter}
          </div>
          <h1
            style={{
              fontFamily: fonts.display,
              color: colors.ink,
              fontSize: "clamp(32px, 5vw, 64px)",
              letterSpacing: "-0.02em",
            }}
          >
            {slide.title}
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 mx-auto"
            style={{
              height: "3px",
              width: "80px",
              background: colors.clay,
              borderRadius: "2px",
            }}
          />
          <p
            className="mt-6"
            style={{
              fontFamily: fonts.body,
              color: colors.inkSoft,
              fontSize: "clamp(14px, 1.3vw, 18px)",
            }}
          >
            발표자 노트(N)에서 예상 질문을 확인하세요
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
