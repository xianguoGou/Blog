import "@/mock";
import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import "./styles/global.less";
import { showMessage } from "@/utils";
import vLoading from "@/directives/loading";
import vLazy from "@/directives/lazy"
import "./utils/eventBus"
import store from "@/store"
// import * as blogApi from "@/api/blog";
// import { getSetting } from "@/api/setting";

// 请求全局设置api
store.dispatch('setting/fetchSetting');

// 全局注册指令
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);

// 挂载全局方法
Vue.prototype.$showMessage = showMessage;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// 测试api接口
// blogApi.getBlogDetail("xxxxx").then((res) => console.log("文章详情：", res));

// blogApi.getBlogComment('11').then(res => console.log('文章评论：', res))

// blogApi.postBlogComment().then(res => console.log('发表评论：', res))
// getSetting().then(res => console.log('网站全局配置：', res))
