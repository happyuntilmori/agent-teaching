"use client";
import { colors, fonts } from "@/lib/tokens";
import { motion } from "framer-motion";

export function DisplayTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h1
      className={`leading-tight ${className}`}
      style={{ fontFamily: fonts.display, color: colors.ink, fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "-0.02em" }}
    >
      {children}
    </h1>
  );
}

export function SlideTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`leading-snug ${className}`}
      style={{ fontFamily: fonts.display, color: colors.ink, fontSize: "clamp(24px, 3.2vw, 44px)", letterSpacing: "-0.01em" }}
    >
      {children}
    </h2>
  );
}

export function BodyText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`leading-relaxed ${className}`}
      style={{ fontFamily: fonts.body, color: colors.ink, fontSize: "clamp(16px, 1.5vw, 20px)" }}
    >
      {children}
    </p>
  );
}

export function KeyLine({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`inline-block ${className}`}
      style={{
        fontFamily: fonts.display,
        color: colors.clay,
        fontSize: "clamp(22px, 2.8vw, 40px)",
        fontWeight: 700,
        letterSpacing: "-0.01em",
        textDecoration: "underline",
        textDecorationColor: colors.clayDeep,
        textUnderlineOffset: "6px",
        textDecorationThickness: "3px",
      }}
    >
      {children}
    </div>
  );
}

export function MarginNote({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`transform -rotate-1 ${className}`}
      style={{
        fontFamily: fonts.hand,
        color: colors.clay,
        fontSize: "clamp(16px, 1.4vw, 22px)",
        opacity: 0.85,
      }}
    >
      {children}
    </div>
  );
}

interface ConceptCardProps {
  icon?: string;
  title: string;
  desc: string;
  accent?: "clay" | "teal";
  rotate?: number;
  delay?: number;
}

export function ConceptCard({ icon, title, desc, accent = "clay", rotate = 0, delay = 0 }: ConceptCardProps) {
  const accentColor = accent === "clay" ? colors.clay : colors.teal;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      style={{
        background: colors.surface,
        border: `1.5px solid ${colors.lineStrong}`,
        borderRadius: "10px",
        padding: "16px 20px",
        transform: `rotate(${rotate}deg)`,
        boxShadow: "0 2px 10px rgba(120,90,60,0.10)",
      }}
    >
      {icon && <div style={{ fontSize: "24px", marginBottom: "6px" }}>{icon}</div>}
      <div
        style={{
          fontFamily: fonts.display,
          color: accentColor,
          fontSize: "clamp(14px, 1.3vw, 18px)",
          fontWeight: 700,
          marginBottom: "4px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: fonts.body,
          color: colors.inkSoft,
          fontSize: "clamp(12px, 1.1vw, 15px)",
          lineHeight: 1.5,
        }}
      >
        {desc}
      </div>
    </motion.div>
  );
}

interface ToolboxBadgeProps {
  items: string[];
}

export function ToolboxBadge({ items }: ToolboxBadgeProps) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <span style={{ fontFamily: fonts.body, color: colors.inkSoft, fontSize: "13px" }}>🧰</span>
      {items.map((item) => (
        <span
          key={item}
          style={{
            fontFamily: fonts.body,
            color: colors.inkSoft,
            background: colors.line,
            borderRadius: "6px",
            padding: "2px 10px",
            fontSize: "13px",
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

interface CallbackTagProps {
  label: string;
  to: string;
}

export function CallbackTag({ label, to }: CallbackTagProps) {
  return (
    <span
      style={{
        fontFamily: fonts.body,
        color: colors.teal,
        background: `${colors.teal}18`,
        border: `1px solid ${colors.teal}`,
        borderRadius: "6px",
        padding: "2px 8px",
        fontSize: "12px",
        whiteSpace: "nowrap",
      }}
    >
      ↩ {label} →{to}
    </span>
  );
}
