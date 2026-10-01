import type { ThemeConfig } from "@/types";

export function applyTheme(config: ThemeConfig): void {
  if (typeof document === "undefined") return;

  const root = document.documentElement;

  if (config.fontFamily) {
    root.style.setProperty("--font-sans", config.fontFamily);
  }

  if (config.colors) {
    for (const [semantic, value] of Object.entries(config.colors)) {
      root.style.setProperty(`--color-${semantic}-500`, value);
    }
  }
}
