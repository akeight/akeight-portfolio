/** One accent per flagship project. Ochre doubles as the global annotation color. */
export type ProjectAccent = "ochre" | "plum" | "dusty" | "oxblood" | "sage";

export const accentText: Record<ProjectAccent, string> = {
  ochre: "text-ochre",
  plum: "text-plum",
  dusty: "text-dusty",
  oxblood: "text-oxblood",
  sage: "text-sage",
};

export const accentBg: Record<ProjectAccent, string> = {
  ochre: "bg-ochre",
  plum: "bg-plum",
  dusty: "bg-dusty",
  oxblood: "bg-oxblood",
  sage: "bg-sage",
};

export const accentBorder: Record<ProjectAccent, string> = {
  ochre: "border-ochre",
  plum: "border-plum",
  dusty: "border-dusty",
  oxblood: "border-oxblood",
  sage: "border-sage",
};

/** hsl() value for SVG strokes and inline styles */
export const accentHsl: Record<ProjectAccent, string> = {
  ochre: "hsl(var(--ochre))",
  plum: "hsl(var(--plum))",
  dusty: "hsl(var(--dusty))",
  oxblood: "hsl(var(--oxblood))",
  sage: "hsl(var(--sage))",
};
