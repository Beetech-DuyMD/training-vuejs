import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/global.css";
import router from "./router";
import "./assets/styles/style.css";
import { registerGlobalComponents } from "./utils/import";
const app = createApp(App);
registerGlobalComponents(app);
app.use(router);
app.mount("#app");
