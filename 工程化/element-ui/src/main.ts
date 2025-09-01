import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Icon from './components/Icon'
import Button from './components/Button'
import Card from './components/Card'
import Dialog from './components/Dialog'

// 加载页面默认样式
import './assets/main.css'
// 引入全局样式
import '@/styles/index.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)

const app = createApp(App)

// 全局注册 Icon 组件
app.component('font-awesome-icon', FontAwesomeIcon)
// 全局注册组件
app.component('DuIcon', Icon)
app.component('DuButton', Button)
app.component('DuCard', Card)
app.component('DuDialog', Dialog)

app.use(router)

app.mount('#app')
