import type { ComponentSize } from "@/types";

/** Padding e tipografia compartilhados entre componentes */
export const sizeClasses: Record<ComponentSize, string> = {
  xs: "text-xs px-2 py-1",
  md: "text-sm px-3 py-2",
  lg: "text-base px-4 py-2.5",
  xl: "text-lg px-5 py-3",
};

/** Extensão para elementos inline (ex.: Button) */
export const inlineSizeClasses: Record<ComponentSize, string> = {
  xs: "gap-1 text-xs px-2 py-1",
  md: "gap-2 text-sm px-4 py-2",
  lg: "gap-2 text-base px-5 py-2.5",
  xl: "gap-3 text-lg px-6 py-3",
};
