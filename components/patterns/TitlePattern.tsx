"use client";
import { motion } from "framer-motion";
import { SlideData } from "@/data/slides";
import { SlideShell } from "@/components/deck/SlideShell";
import { colors, fonts } from "@/lib/tokens";

export function TitlePattern({ slide }: { slide: SlideData }) {
  return (
    <SlideShell variant="paper">
      <div className="relative w-full h-full flex items-center" style={{ padding: "6% 8%" }}>
        {slide.dividerImage && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slide.dividerImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center right",
              opacity: 0.18,
            }}
          />
        )}
        <div className="relative z-10 max-w-[60%]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div
              className="mb-4 text-sm tracking-widest uppercase"
              style={{ fontFamily: fonts.body, color: colors.clay }}
            >
              {slide.chapter}
            </div>
            <h1
              style={{
                fontFamily: fonts.display,
                color: colors.ink,
                fontSize: "clamp(32px, 5vw, 68px)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              {slide.title}
            </h1>
            {slide.subtitle && (
              <p
                className="mt-4"
                style={{
                  fontFamily: fonts.body,
                  color: colors.inkSoft,
                  fontSize: "clamp(16px, 1.6vw, 24px)",
                }}
              >
                {slide.subtitle}
              </p>
            )}
          </motion.div>
        </div>
        <div
          className="absolute right-[8%] bottom-[12%]"
          style={{
            fontFamily: fonts.display,
            color: colors.clay,
            fontSize: "clamp(60px, 12vw, 160px)",
            opacity: 0.07,
            lineHeight: 1,
            fontWeight: 700,
          }}
        >
          {slide.id.replace("S", "")}
        </div>
      </div>
    </SlideShell>
  );
}
