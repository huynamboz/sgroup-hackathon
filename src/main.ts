/* eslint-disable prettier/prettier */
import { createApp } from "vue"
// import "./style.less"
import App from "./App.vue"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router"
import { createPinia } from "pinia"
import "./assets/css/global.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import JsonViewer from "vue3-json-viewer";
import "vue3-json-viewer/dist/index.css";
const app = createApp(App)
app.use(JsonViewer);
  app.use(router)
  // app.use(Antd)
  app.use(createPinia())
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  app.use(ElementPlus)
  router.isReady().then(() => {
        app.mount("#app")
    })
