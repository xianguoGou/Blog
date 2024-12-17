import Vue from "vue";

/**
 * 获取某个组件渲染的Dom根元素
 * @param {VueComponent} component 
 * @param {Object} props 
 * @returns HTMLElement
 */
export default function getComponentRootDom(component, props) {
  const vm = new Vue({
    render(h) {
      return h(component, { props });
    },
  });
  vm.$mount();
  return vm.$el;
}
