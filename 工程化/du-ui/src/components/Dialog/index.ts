import Dialog from './index.vue'

Dialog.install = function (app: any) {
  app.component(Dialog.name, Dialog)
}

export default Dialog
