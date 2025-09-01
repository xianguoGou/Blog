import Icon from './index.vue'

Icon.install = function (app: any) {
  app.component(Icon.name, Icon)
}

export default Icon
