import rough from "roughjs";
import type { Options } from "roughjs/bin/core";
import { colors } from "./tokens";

export function getRoughGenerator() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  return rough.svg(svg);
}

export function drawRoughRect(
  rc: ReturnType<typeof rough.svg>,
  x: number,
  y: number,
  w: number,
  h: number,
  opts?: Options
): SVGElement {
  return rc.rectangle(x, y, w, h, {
    roughness: 1.4,
    bowing: 1,
    stroke: colors.ink,
    strokeWidth: 1.5,
    fill: "none",
    ...opts,
  });
}

export function drawRoughLine(
  rc: ReturnType<typeof rough.svg>,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  opts?: Options
): SVGElement {
  return rc.line(x1, y1, x2, y2, {
    roughness: 1.2,
    bowing: 0.8,
    stroke: colors.ink,
    strokeWidth: 1.5,
    ...opts,
  });
}

export function drawRoughArrow(
  rc: ReturnType<typeof rough.svg>,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  opts?: Options
): SVGElement {
  return rc.line(x1, y1, x2, y2, {
    roughness: 1.2,
    bowing: 0.5,
    stroke: colors.ink,
    strokeWidth: 1.8,
    ...opts,
  });
}

export function drawRoughCircle(
  rc: ReturnType<typeof rough.svg>,
  cx: number,
  cy: number,
  r: number,
  opts?: Options
): SVGElement {
  return rc.circle(cx, cy, r * 2, {
    roughness: 1.5,
    bowing: 1,
    stroke: colors.clay,
    strokeWidth: 2,
    fill: "none",
    ...opts,
  });
}

export function drawRoughUnderline(
  rc: ReturnType<typeof rough.svg>,
  x1: number,
  y: number,
  x2: number,
  opts?: Options
): SVGElement {
  return rc.line(x1, y, x2, y, {
    roughness: 1.8,
    bowing: 1.2,
    stroke: colors.clay,
    strokeWidth: 2.5,
    ...opts,
  });
}
