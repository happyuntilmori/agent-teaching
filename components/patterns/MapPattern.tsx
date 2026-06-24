"use client";
import { motion } from "framer-motion";
import { SlideData } from "@/data/slides";
import { SlideShell } from "@/components/deck/SlideShell";
import { colors, fonts } from "@/lib/tokens";

const stages = [
  { num: "1", label: "LLM 챗봇", icon: "💬" },
  { num: "2", label: "프롬프트\n엔지니어링", icon: "✍️" },
  { num: "3", label: "바이브\n코딩", icon: "🛠️" },
  { num: "4", label: "AI\n에이전트", icon: "🤖" },
  { num: "5", label: "하네스\n엔지니어링", icon: "🔗" },
];

export function MapPattern({ slide }: { slide: SlideData }) {
  return (
    <SlideShell variant="paper">
      <div className="w-full h-full flex flex-col" style={{ padding: "5% 7% 6% 7%" }}>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          <h1
            style={{
              fontFamily: fonts.display,
              color: colors.ink,
              fontSize: "clamp(28px, 4vw, 56px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p
              style={{
                fontFamily: fonts.body,
                color: colors.inkSoft,
                fontSize: "clamp(14px, 1.4vw, 20px)",
                marginTop: "4px",
              }}
            >
              {slide.subtitle}
            </p>
          )}
        </motion.div>

        <div className="flex-1 flex items-center">
          <div className="w-full flex items-center gap-0">
            {stages.map((s, i) => (
              <motion.div
                key={i}
                className="flex items-center flex-1"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              >
                <div className="flex flex-col items-center text-center" style={{ flex: 1 }}>
                  <div style={{ fontSize: "28px", marginBottom: "6px" }}>{s.icon}</div>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: i === 4 ? colors.clay : colors.paperAlt,
                      border: `2px solid ${i === 4 ? colors.clay : colors.lineStrong}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fonts.display,
                      color: i === 4 ? colors.paper : colors.inkSoft,
                      fontSize: "16px",
                      fontWeight: 700,
                      marginBottom: "8px",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.body,
                      color: i === 4 ? colors.clay : colors.ink,
                      fontSize: "clamp(11px, 1vw, 13px)",
                      lineHeight: 1.35,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
                {i < stages.length - 1 && (
                  <div style={{ color: colors.clay, fontSize: "22px", flexShrink: 0, margin: "0 4px" }}>→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-around mt-4"
        >
          {["자율성 ↑", "도구·맥락 ↑", "검증 ↑"].map((axis, i) => (
            <div
              key={i}
              style={{
                fontFamily: fonts.body,
                color: colors.clay,
                fontSize: "clamp(11px, 1vw, 14px)",
                background: `${colors.clay}12`,
                padding: "4px 12px",
                borderRadius: "20px",
                border: `1px solid ${colors.clay}30`,
              }}
            >
              {axis}
            </div>
          ))}
        </motion.div>

        {slide.keyline && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="mt-3 text-center"
            style={{
              fontFamily: fonts.body,
              color: colors.inkSoft,
              fontSize: "clamp(13px, 1.2vw, 16px)",
            }}
          >
            {slide.keyline}
          </motion.div>
        )}
      </div>
    </SlideShell>
  );
}
