import Vue from "vue";
import { Store, install } from "vuex";
import setting from "./setting";
import banner from "./banner";
import about from "./about";
import project from "./project";

// 对于`vuex`和`vue-router`，使用这种传统的方式引入的话会自动成为`Vue`的插件，因此需要去掉`Vue.use(xxx)`
if (!window.Vuex || !window.Vue) {
    install(Vue);
}

const store = new Store({
  modules: {
    setting,
    banner,
    about,
    project,
  },
  strict: true,
});

export default store;
