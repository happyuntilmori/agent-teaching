"use client";
import { motion } from "framer-motion";
import { SlideData } from "@/data/slides";
import { SlideShell } from "@/components/deck/SlideShell";
import { ToolboxBadge } from "@/components/primitives";
import { colors, fonts } from "@/lib/tokens";

export function BridgePattern({ slide }: { slide: SlideData }) {
  return (
    <SlideShell variant="clay">
      <div
        className="w-full h-full flex flex-col items-center justify-center"
        style={{ padding: "8% 12%" }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div
            className="w-12 h-0.5 mx-auto mb-6"
            style={{ background: `${colors.paper}60` }}
          />
          <h2
            style={{
              fontFamily: fonts.display,
              color: colors.paper,
              fontSize: "clamp(20px, 2.8vw, 38px)",
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
            }}
          >
            {slide.bridgeText}
          </h2>
          <div
            className="w-12 h-0.5 mx-auto mt-6"
            style={{ background: `${colors.paper}40` }}
          />
        </motion.div>

        {slide.toolbox && (
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ToolboxBadge items={slide.toolbox} />
          </motion.div>
        )}
      </div>
    </SlideShell>
  );
}
