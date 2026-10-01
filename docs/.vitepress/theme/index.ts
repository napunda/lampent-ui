import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { createLampentUI } from "lampent-ui";
import LpDemo from "../../demos/LpDemo.vue";
import "lampent-ui/style.css";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(createLampentUI());
    app.component("LpDemo", LpDemo);
  },
} satisfies Theme;
