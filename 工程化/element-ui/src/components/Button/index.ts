import Button from './index.vue'

Button.install = function (app: any) {
  app.component(Button.name, Button)
}

export default Button
