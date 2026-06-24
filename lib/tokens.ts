export const colors = {
  paper: "#FBF7F0",
  paperAlt: "#F5EFE6",
  surface: "#FEFCF8",
  ink: "#2E2A26",
  inkSoft: "#6B6259",
  clay: "#C8624B",
  clayDeep: "#A84B38",
  teal: "#3E7C77",
  amber: "#E0A93B",
  line: "#E6DBCB",
  lineStrong: "#D8C9B3",
} as const;

export const fonts = {
  display: '"Gowun Batang", "Nanum Myeongjo", serif',
  body: '"Pretendard", -apple-system, BlinkMacSystemFont, sans-serif',
  hand: '"Nanum Pen Script", cursive',
} as const;

export const roughDefaults = {
  roughness: 1.4,
  bowing: 1,
  stroke: colors.ink,
  strokeWidth: 1.6,
};

export const roughLight = {
  roughness: 1.0,
  bowing: 0.8,
  stroke: colors.inkSoft,
  strokeWidth: 1.2,
};
