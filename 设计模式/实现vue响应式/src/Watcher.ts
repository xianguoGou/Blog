// 观察者
import Vue from './Vue.js'
import Dep from './Dep.js'
export default class Watcher {
  vm: Vue; // 表示 Vue 的实例对象
  el: Node; // 代表一个 DOM 节点
  vmKey: string; // 存储 data 中的 key
  
  constructor(vm: Vue, el: Node, vmKey: string) {
    this.vm = vm;
    this.el = el;
    this.vmKey = vmKey;
    // 在第一次进行 Watcher 初始化的时候，将当前的 Watcher 对象保存到 Dep.target 上
    // 之所以要存储，是为了进行依赖收集
    Dep.target = this;
    // 先初始化更新一遍
    this.update();
    // 避免重复收集依赖，收集完依赖后，将 Dep.target 置空
    Dep.target = null;
  }
  update(): void {
    // 根据节点的类型来做更新
    if (this.el.nodeType === Node.TEXT_NODE) {
        // 说明你是一个文本类型的节点
      // 我们直接更新该节点的 nodeValue
      // this.vm[this.vmKey] 相关于是访问 Vue 实例对象的 data 中的属性
      // 因为后面我们会对 data 中的属性进行劫持，将 data 里面的所有数据存储到 Vue 实例对象上
        this.el.nodeValue = this.vm[this.vmKey];
    } else if (this.el.nodeType === Node.ELEMENT_NODE) {
         // 说明你是一个元素节点，这里做了简化，直接更新 innerHTML
      (this.el as HTMLElement).innerHTML = this.vm[this.vmKey];

    }
  }
}