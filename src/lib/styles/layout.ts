import type { ComponentSize } from "@/types";

export const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
} as const;

export type FlexAlign = keyof typeof alignClasses;

export const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
} as const;

export type FlexJustify = keyof typeof justifyClasses;

export const avatarSizeClasses: Record<ComponentSize, string> = {
  xs: "size-6 text-xs",
  md: "size-10 text-sm",
  lg: "size-14 text-base",
  xl: "size-20 text-lg",
};

export const loaderSizeClasses: Record<ComponentSize, string> = {
  xs: "size-4",
  md: "size-6",
  lg: "size-8",
  xl: "size-10",
};

export const actionIconSizeClasses: Record<ComponentSize, string> = {
  xs: "size-7 p-1",
  md: "size-9 p-1.5",
  lg: "size-11 p-2",
  xl: "size-13 p-2.5",
};

export const badgeSizeClasses: Record<ComponentSize, string> = {
  xs: "text-xs px-1.5 py-0.5",
  md: "text-xs px-2 py-0.5",
  lg: "text-sm px-2.5 py-1",
  xl: "text-sm px-3 py-1",
};
