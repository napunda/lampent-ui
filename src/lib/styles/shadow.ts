export const shadowClasses = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
} as const;

export type ShadowSize = keyof typeof shadowClasses;
