"use client";
import { motion } from "framer-motion";
import { SlideData } from "@/data/slides";
import { SlideShell } from "@/components/deck/SlideShell";
import { SlideTitle, KeyLine, ToolboxBadge, CallbackTag } from "@/components/primitives";
import { colors, fonts } from "@/lib/tokens";

import { TokenPredict } from "@/components/diagrams/TokenPredict";
import { SystemUserPrompt } from "@/components/diagrams/SystemUserPrompt";
import { RAGFlow } from "@/components/diagrams/RAGFlow";
import { ToolCallFlow } from "@/components/diagrams/ToolCallFlow";
import { ChainToGraph } from "@/components/diagrams/ChainToGraph";
import { MultiAgent } from "@/components/diagrams/MultiAgent";
import { ContextDesk } from "@/components/diagrams/ContextDesk";
import { RuleFileTree } from "@/components/diagrams/RuleFileTree";
import { VerificationCards } from "@/components/diagrams/VerificationCards";
import { HarnessRing } from "@/components/diagrams/HarnessRing";
import { ConnectionMap } from "@/components/diagrams/ConnectionMap";
import { MemoryDeskDrawer } from "@/components/diagrams/MemoryDeskDrawer";

const diagramMap: Record<string, React.ComponentType> = {
  TokenPredict,
  SystemUserPrompt,
  RAGFlow,
  ToolCallFlow,
  ChainToGraph,
  MultiAgent,
  ContextDesk,
  RuleFileTree,
  VerificationCards,
  HarnessRingEmpty: () => <HarnessRing filled={false} />,
  HarnessRingFull: () => <HarnessRing filled={true} />,
  ConnectionMap,
  MemoryDeskDrawer,
};

export function DiagramPattern({ slide }: { slide: SlideData }) {
  const DiagramComponent = slide.diagram ? diagramMap[slide.diagram] : null;

  return (
    <SlideShell variant="paper">
      <div className="w-full h-full flex flex-col" style={{ padding: "4% 6% 5% 7%" }}>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-3"
        >
          <SlideTitle>{slide.title}</SlideTitle>
        </motion.div>

        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {DiagramComponent ? (
            <DiagramComponent />
          ) : (
            <div style={{ color: colors.lineStrong, fontFamily: fonts.body, fontSize: "14px" }}>
              다이어그램: {slide.diagram}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-2 flex flex-col gap-2"
        >
          {slide.keyline && <KeyLine>{slide.keyline}</KeyLine>}
          <div className="flex flex-wrap gap-2 items-center">
            {slide.callbacks?.map((cb) => (
              <CallbackTag key={cb.to} label={cb.label} to={cb.to} />
            ))}
            {slide.toolbox && <ToolboxBadge items={slide.toolbox} />}
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
