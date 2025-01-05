import Vue from "vue";
import VueRouter from "vue-router";
import routes from '@/router/routes';
import { titleController } from "@/utils" 

Vue.use(VueRouter);
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