import { createApp } from "vue";
import "./global.css";
import App from "./App.vue";
import { createLampentUI } from "@/plugin";

createApp(App)
  .use(
    createLampentUI({
      // Exemplo: sobrescrever fonte e cor primary em runtime
      // fontFamily: '"Roboto", sans-serif',
      // colors: { primary: "#6366f1" },
    }),
  )
  .mount("#app");
