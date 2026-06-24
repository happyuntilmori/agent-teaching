"use client";
import { motion } from "framer-motion";
import { SlideData } from "@/data/slides";
import { SlideShell } from "@/components/deck/SlideShell";
import { SlideTitle } from "@/components/primitives";
import { colors, fonts } from "@/lib/tokens";

export function TablePattern({ slide }: { slide: SlideData }) {
  const data = slide.tableData || [];
  const [header, ...rows] = data;
  return (
    <SlideShell variant="paper">
      <div className="w-full h-full flex flex-col" style={{ padding: "4% 5%" }}>
        {slide.title && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4"
          >
            <SlideTitle>{slide.title}</SlideTitle>
          </motion.div>
        )}
        <motion.div
          className="flex-1 overflow-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            {header && (
              <thead>
                <tr style={{ background: colors.clay }}>
                  {header.map((cell, i) => (
                    <th
                      key={i}
                      style={{
                        fontFamily: fonts.body,
                        color: colors.paper,
                        padding: "8px 12px",
                        fontSize: "clamp(11px, 1.1vw, 14px)",
                        textAlign: "left",
                        fontWeight: 700,
                        borderRight: i < header.length - 1 ? `1px solid ${colors.clayDeep}` : "none",
                      }}
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {rows.map((row, ri) => (
                <motion.tr
                  key={ri}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + ri * 0.07 }}
                  style={{
                    background: ri % 2 === 0 ? colors.surface : colors.paperAlt,
                  }}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      style={{
                        fontFamily: fonts.body,
                        color: ci === 0 ? colors.clay : colors.ink,
                        padding: "7px 12px",
                        fontSize: "clamp(10px, 1vw, 13px)",
                        lineHeight: 1.4,
                        borderBottom: `1px solid ${colors.line}`,
                        borderRight: ci < row.length - 1 ? `1px solid ${colors.line}` : "none",
                        fontWeight: ci === 0 ? 700 : 400,
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </SlideShell>
  );
}
