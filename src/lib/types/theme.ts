export const semanticColors = [
  "primary",
  "success",
  "warning",
  "danger",
  "neutral",
] as const;

export type SemanticColor = (typeof semanticColors)[number];

export interface ThemeColors {
  primary: string;
  success: string;
  warning: string;
  danger: string;
  neutral: string;
}

export type ThemeColorOverrides = Partial<{
  [K in SemanticColor]: string;
}>;

export interface ThemeConfig {
  fontFamily?: string;
  colors?: ThemeColorOverrides;
}

export const defaultThemeConfig: ThemeConfig = {
  fontFamily: '"Montserrat", ui-sans-serif, system-ui, sans-serif',
};
