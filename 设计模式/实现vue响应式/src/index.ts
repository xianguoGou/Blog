import Vue from "./Vue.js";

// 在实例化 Vue 时，传入一个配置对象
const options = {
  el: "#app",
  data: {
    message: "Hello Vue.js",
  },
};
new Vue(options);
