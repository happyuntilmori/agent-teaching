"use client";
import { motion } from "framer-motion";
import { SlideData } from "@/data/slides";
import { SlideShell } from "@/components/deck/SlideShell";
import { SlideTitle } from "@/components/primitives";
import { colors, fonts } from "@/lib/tokens";

export function ComparePattern({ slide }: { slide: SlideData }) {
  const left = slide.compareLeft;
  const right = slide.compareRight;
  return (
    <SlideShell variant="paper">
      <div className="w-full h-full flex flex-col" style={{ padding: "5% 7%" }}>
        {slide.title && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5"
          >
            <SlideTitle>{slide.title}</SlideTitle>
          </motion.div>
        )}
        <div className="flex-1 flex gap-5 items-stretch">
          {left && (
            <motion.div
              className="flex-[5] rounded-xl p-5 flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                background: colors.paperAlt,
                border: `1.5px solid ${colors.lineStrong}`,
                transform: "rotate(-0.5deg)",
              }}
            >
              <div
                style={{
                  fontFamily: fonts.display,
                  color: colors.inkSoft,
                  fontSize: "clamp(14px, 1.3vw, 18px)",
                  marginBottom: "12px",
                  borderBottom: `1px solid ${colors.line}`,
                  paddingBottom: "8px",
                }}
              >
                {left.title}
              </div>
              <div className="flex flex-col gap-2 flex-1 justify-center">
                {left.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    style={{
                      fontFamily: fonts.body,
                      color: colors.ink,
                      fontSize: "clamp(13px, 1.2vw, 17px)",
                      lineHeight: 1.5,
                    }}
                  >
                    · {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          <div
            className="flex items-center"
            style={{ color: colors.clay, fontSize: "24px" }}
          >
            vs
          </div>

          {right && (
            <motion.div
              className="flex-[7] rounded-xl p-5 flex flex-col"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{
                background: `${colors.clay}08`,
                border: `2px solid ${colors.clay}`,
                transform: "rotate(0.5deg)",
              }}
            >
              <div
                style={{
                  fontFamily: fonts.display,
                  color: colors.clay,
                  fontSize: "clamp(14px, 1.3vw, 18px)",
                  marginBottom: "12px",
                  borderBottom: `1px solid ${colors.clay}40`,
                  paddingBottom: "8px",
                }}
              >
                {right.title}
              </div>
              <div className="flex flex-col gap-2 flex-1 justify-center">
                {right.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.08 }}
                    style={{
                      fontFamily: fonts.body,
                      color: colors.ink,
                      fontSize: "clamp(13px, 1.2vw, 17px)",
                      lineHeight: 1.5,
                    }}
                  >
                    · {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </SlideShell>
  );
}
