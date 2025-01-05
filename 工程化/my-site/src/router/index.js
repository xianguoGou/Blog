import Vue from "vue";
import VueRouter from "vue-router";
import routes from '@/router/routes';
import { titleController } from "@/utils" 

// 对于`vuex`和`vue-router`，使用这种传统的方式引入的话会自动成为`Vue`的插件，因此需要去掉`Vue.use(xxx)`
if (!window.VueRouter) {
  Vue.use(VueRouter);
}
const router = new VueRouter({
  routes,
  mode: 'history'
});

router.afterEach((to) => {
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title)
  }
});
export default router;