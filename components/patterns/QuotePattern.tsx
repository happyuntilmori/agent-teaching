"use client";
import { motion } from "framer-motion";
import { SlideData } from "@/data/slides";
import { SlideShell } from "@/components/deck/SlideShell";
import { colors, fonts } from "@/lib/tokens";

export function QuotePattern({ slide }: { slide: SlideData }) {
  return (
    <SlideShell variant="paper">
      <div className="w-full h-full flex flex-col items-center justify-center" style={{ padding: "8% 10%" }}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="w-16 h-0.5 mx-auto mb-8"
            style={{ background: colors.clay }}
          />
          <h2
            style={{
              fontFamily: fonts.display,
              color: colors.ink,
              fontSize: "clamp(24px, 3.8vw, 52px)",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            {slide.quoteText}
          </h2>
          {slide.subtitle && (
            <p
              className="mt-6"
              style={{
                fontFamily: fonts.body,
                color: colors.inkSoft,
                fontSize: "clamp(14px, 1.4vw, 20px)",
              }}
            >
              {slide.subtitle}
            </p>
          )}
          <div
            className="w-16 h-0.5 mx-auto mt-8"
            style={{ background: colors.line }}
          />
        </motion.div>
      </div>
    </SlideShell>
  );
}
