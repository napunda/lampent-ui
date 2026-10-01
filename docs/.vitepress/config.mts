import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitepress";

const root = fileURLToPath(new URL("../..", import.meta.url));

export default defineConfig({
  title: "Lampent UI",
  description: "Biblioteca de componentes Vue 3 com Tailwind CSS",
  lang: "pt-BR",
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
      },
    ],
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: [
        { find: "lampent-ui/style.css", replacement: resolve(root, "src/lib/style.css") },
        { find: "lampent-ui", replacement: resolve(root, "src/lib/index.ts") },
        { find: "@", replacement: resolve(root, "src/lib") },
      ],
    },
  },

  themeConfig: {
    logo: "/favicon.svg",
    siteTitle: "Lampent UI",

    nav: [
      { text: "Guia", link: "/guide/introduction", activeMatch: "/guide/" },
      { text: "Componentes", link: "/components/", activeMatch: "/components/" },
      {
        text: "npm",
        link: "https://www.npmjs.com/package/lampent-ui",
      },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Introdução",
          items: [
            { text: "O que é Lampent UI?", link: "/guide/introduction" },
            { text: "Instalação", link: "/guide/installation" },
            { text: "Início rápido", link: "/guide/quick-start" },
            { text: "Temas", link: "/guide/theming" },
          ],
        },
      ],
      "/components/": [
        {
          text: "Layout",
          items: [
            { text: "Visão geral", link: "/components/" },
            { text: "Stack", link: "/components/stack" },
            { text: "Group", link: "/components/group" },
            { text: "Paper", link: "/components/paper" },
            { text: "Divider", link: "/components/divider" },
          ],
        },
        {
          text: "Tipografia",
          items: [
            { text: "Text", link: "/components/text" },
            { text: "Title", link: "/components/title" },
          ],
        },
        {
          text: "Formulário",
          items: [
            { text: "Button", link: "/components/button" },
            { text: "TextInput", link: "/components/text-input" },
            { text: "Textarea", link: "/components/textarea" },
            { text: "Checkbox", link: "/components/checkbox" },
            { text: "Switch", link: "/components/switch" },
            { text: "Radio", link: "/components/radio" },
          ],
        },
        {
          text: "Feedback",
          items: [
            { text: "Alert", link: "/components/alert" },
            { text: "Badge", link: "/components/badge" },
            { text: "Loader", link: "/components/loader" },
            { text: "ActionIcon", link: "/components/action-icon" },
          ],
        },
        {
          text: "Dados",
          items: [
            { text: "Card", link: "/components/card" },
            { text: "Avatar", link: "/components/avatar" },
          ],
        },
        {
          text: "Overlay",
          items: [
            { text: "Tabs", link: "/components/tabs" },
            { text: "Modal", link: "/components/modal" },
            { text: "Tooltip", link: "/components/tooltip" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/lampent-ui/lampent-ui" },
    ],

    footer: {
      message: "Lançado sob a licença MIT.",
      copyright: "Copyright © 2026 Lampent UI",
    },

    outline: {
      label: "Nesta página",
    },

    docFooter: {
      prev: "Anterior",
      next: "Próximo",
    },

    darkModeSwitchLabel: "Aparência",
    lightModeSwitchTitle: "Mudar para modo claro",
    darkModeSwitchTitle: "Mudar para modo escuro",
    sidebarMenuLabel: "Menu",
    returnToTopLabel: "Voltar ao topo",
  },
});
