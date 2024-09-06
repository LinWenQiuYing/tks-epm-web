import "./assets/theme/index.less";

import App from "./App.vue";
import IconSvg from "./plugins/icon-svg"; // 调整路径以匹配您的项目结构
import { createApp } from "vue";
import pinia from "./stores";
import router from "./router";

const app = createApp(App);
app.use(IconSvg); // 注册全局组件
app.use(pinia).use(router);
app.mount("#app");
