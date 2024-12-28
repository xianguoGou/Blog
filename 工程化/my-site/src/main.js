import "@/mock";
import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import "./styles/global.less";
import { showMessage } from "@/utils";
import vLoading from "@/directives/loading";
import * as blogApi from "@/api/blog";


// 全局注册指令
Vue.directive("loading", vLoading);
// 挂载全局方法
Vue.prototype.$showMessage = showMessage;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// 测试api接口
blogApi.getBlogDetail('xxxxx').then(res => console.log('文章详情：', res))

// blogApi.getBlogComment('11').then(res => console.log('文章评论：', res))

// blogApi.postBlogComment().then(res => console.log('发表评论：', res))