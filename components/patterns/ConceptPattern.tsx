"use client";
import { motion } from "framer-motion";
import { SlideData } from "@/data/slides";
import { SlideShell } from "@/components/deck/SlideShell";
import { SlideTitle, ToolboxBadge, CallbackTag } from "@/components/primitives";
import { colors, fonts } from "@/lib/tokens";

const accents = ["clay", "teal", "clay", "teal", "clay", "teal", "clay"] as const;
const rotations = [-1, 0.5, -0.5, 1, -1, 0.5, -0.5];

export function ConceptPattern({ slide }: { slide: SlideData }) {
  return (
    <SlideShell variant="paper">
      <div className="w-full h-full flex flex-col" style={{ padding: "5% 7% 6% 8%" }}>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-5"
        >
          <SlideTitle>{slide.title}</SlideTitle>
        </motion.div>

        <div className="flex-1 flex flex-col justify-center gap-3">
          {slide.body?.map((item, i) => {
            const [title, ...rest] = item.split(" — ");
            const desc = rest.join(" — ");
            const accent = accents[i % accents.length];
            const accentColor = accent === "clay" ? colors.clay : colors.teal;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
                style={{
                  background: colors.surface,
                  border: `1.5px solid ${colors.lineStrong}`,
                  borderLeft: `4px solid ${accentColor}`,
                  borderRadius: "8px",
                  padding: "10px 16px",
                  transform: `rotate(${rotations[i % rotations.length] * 0.3}deg)`,
                  boxShadow: "0 2px 8px rgba(120,90,60,0.08)",
                }}
              >
                <div className="flex items-baseline gap-2">
                  <span
                    style={{
                      fontFamily: fonts.display,
                      color: accentColor,
                      fontSize: "clamp(13px, 1.2vw, 16px)",
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {title}
                  </span>
                  {desc && (
                    <span
                      style={{
                        fontFamily: fonts.body,
                        color: colors.inkSoft,
                        fontSize: "clamp(12px, 1.1vw, 15px)",
                      }}
                    >
                      {desc}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 flex flex-wrap gap-3 items-center"
        >
          {slide.callbacks?.map((cb) => (
            <CallbackTag key={cb.to} label={cb.label} to={cb.to} />
          ))}
          {slide.toolbox && <ToolboxBadge items={slide.toolbox} />}
        </motion.div>
      </div>
    </SlideShell>
  );
}
