import Vue from "vue";
import App from "./App.vue";
import router from '@/router';
import "./styles/global.less";
import { showMessage } from "@/utils";

// import Icon from '@/components/Icon'
// import getComponentRootDom from '@/utils/getComponentRootDom'
// const rootDom = getComponentRootDom(Icon, { type: 'home'})
// console.log(rootDom)

// 挂载全局方法
Vue.prototype.$showMessage = showMessage;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
