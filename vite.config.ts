import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/lib"),
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/lib/index.ts"),
      name: "LampentUI",
      fileName: "lampent-ui",
      formats: ["es", "cjs"],
    },
    rolldownOptions: {
      external: ["vue", "tailwind-merge", "@floating-ui/vue"],
      output: {
        globals: {
          vue: "Vue",
          "tailwind-merge": "tailwindMerge",
        },
      },
    },
  },
});
