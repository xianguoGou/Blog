// 打包文件配置

// 引入组件
import Icon from './components/Icon/index.vue'
import Button from './components/Button/index.vue'
import Card from './components/Card/index.vue'
import Dialog from './components/Dialog/index.vue'

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

const components = [Icon, Button, Card, Dialog]

function install(app: any) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
  // 注册 fontawesome 组件
  app.component('font-awesome-icon', FontAwesomeIcon)
}

// 默认导出全部组件
export default {
  install,
}
// 按需导出组件
export { Icon, Button, Card, Dialog }
