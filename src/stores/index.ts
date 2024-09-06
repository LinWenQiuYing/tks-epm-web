import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); // pinia数据持久化插件——防止刷新后数据丢失

export default pinia;
