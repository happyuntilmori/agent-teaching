"use client";
import { motion } from "framer-motion";
import { SlideData } from "@/data/slides";
import { SlideShell } from "@/components/deck/SlideShell";
import { SlideTitle, ToolboxBadge } from "@/components/primitives";
import { colors, fonts } from "@/lib/tokens";

export function ListRevealPattern({ slide }: { slide: SlideData }) {
  return (
    <SlideShell variant="paper">
      <div className="w-full h-full flex flex-col" style={{ padding: "5% 8% 6% 8%" }}>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <SlideTitle>{slide.title}</SlideTitle>
        </motion.div>

        <div className="flex-1 flex flex-col justify-center gap-3">
          {slide.body?.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.1, ease: "easeOut" }}
              className="flex items-start gap-3"
            >
              <span
                style={{
                  color: colors.clay,
                  fontSize: "clamp(16px, 1.5vw, 22px)",
                  marginTop: "2px",
                  flexShrink: 0,
                }}
              >
                {i + 1}.
              </span>
              <span
                style={{
                  fontFamily: fonts.body,
                  color: colors.ink,
                  fontSize: "clamp(15px, 1.4vw, 20px)",
                  lineHeight: 1.5,
                }}
              >
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        {slide.bridgeText && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-4 rounded-lg p-3"
            style={{ background: `${colors.clay}15`, border: `1.5px solid ${colors.clay}` }}
          >
            <span
              style={{
                fontFamily: fonts.body,
                color: colors.clayDeep,
                fontSize: "clamp(13px, 1.2vw, 16px)",
              }}
            >
              → {slide.bridgeText}
            </span>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-4"
        >
          {slide.toolbox && <ToolboxBadge items={slide.toolbox} />}
        </motion.div>
      </div>
    </SlideShell>
  );
}
