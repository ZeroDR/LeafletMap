import { createApp } from 'vue'
import 'amfe-flexible'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import './style.css'
import './assets/css/table.scss'
import 'leaflet/dist/leaflet.css'
import utils from './utils'
import router from './router'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$utils = utils;
app.use(ElementPlus,{
  locale: zhCn,
}).use(router).mount('#app')
