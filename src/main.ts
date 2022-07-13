import { createApp } from 'vue'
import App from './App.vue'
import  Vant from 'vant' //组件库
import 'vant/lib/index.css' // 样式
import 'amfe-flexible' // 它会根据的手机尺寸来调整rem的基准值：html标签上的font-size。
import router from './router/index'
import { createPinia } from 'pinia'
// 省略其它...
// 引入全局样式
import './styles/index.less' // 全局样式

import './styles/index.less'
const app = createApp(App)
app.use(Vant)
app.use(router)
app.use(createPinia())
app.mount('#app')
