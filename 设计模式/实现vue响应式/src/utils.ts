import Vue from "./Vue.js";
import Dep from "./Dep.js";
import Watcher from "./Watcher.js";

// 该方法主要就是做数据劫持
// 将传递过来的 data 上面的数据绑定到 Vue 实例对象上面，并且添加 getter/setter
export function observer(vm: Vue, obj: Record<string, any>) {
  const dep = new Dep(); // 实例化一个发布者

  // 遍历 data 上面的所有属性
  Object.keys(obj).forEach((key) => {
    // 首先将原来的值保存下来
    let value = obj[key];
    Object.defineProperty(vm, key, {
      get(): void {
        // 如果有观察者，应该将该观察者添加到发布者的观察者列表里面
        if (Dep.target) {
          dep.addSub(Dep.target);
        }
        return value;
      },
      set(newValue: any) {
        value = newValue;
        // 数据发生了变化之后，我们就需要通知所有的观察者
        // 告诉观察者，数据发生了变化，你们需要更新一下
        dep.notify();
      },
    });
  });
}

export function compile(vm: Vue): void {
  // 首先拿到 Vue 实例对象上面的 el 属性，这个属性是一个选择器
  // 这一步其实就是拿到最外层的 DOM 节点 <div id="app">
  const el: HTMLElement | null = document.querySelector(vm.$el);

  if (!el) {
    throw new Error("Element with selector can not be found.");
  }

  // 接下来我们创建一个文档碎片
  const documentFragment: DocumentFragment = document.createDocumentFragment();

  // 对节点进行处理，会用到一个正则表达式
  // 该正则表达式，就是用来匹配 {{}} 的，因为猫须字符串会成为一个观察者
  const reg: RegExp = /\{\{(.*)\}\}/;

  while (el.firstChild) {
    // 拿到第一个子节点，然后我们会进行各种分析处理
    const child: ChildNode = el.firstChild;

    // 接下来对子节点进行分析操作
    if (child.nodeType === Node.ELEMENT_NODE) {
      // 说明这是一个元素节点
      const element = child as HTMLElement;

      if (reg.test(element.innerHTML)) {
        // 说明里面是带猫须的
        // 我们需要将其变成一个观察者
        const vmKey: string = RegExp.$1.trim(); // $1 是正则表达式匹配到的第一个值，这里其实就是 message
        new Watcher(vm, child, vmKey);
      } else {
        // 说明里面没有猫须，我们还需要判断这个元素节点的属性是否有 v-model
        // 如果你有 v-model 也需要进行处理
        Array.from(element.attributes).forEach((attr) => {
          if (attr.name === "v-model") {
            // 如果进入此分支，说明该元素节点的属性包含 v-model
            const vmKey: string = attr.value; // 这里其实就是 message
            element.addEventListener("input", (ev: Event)=>{
                const target = ev.target as HTMLInputElement;
                // 这里其实就是将文本框所输入的值赋值给 vm 实例对象上面的 message 属性
                vm[vmKey] = target.value;
            });
          }
        });
      }
    } else if(child.nodeType === Node.TEXT_NODE && reg.test(child.nodeValue || "")) {
        // 说明这是一个文本节点，并且这个文本节点也是带猫须的
        // 那么我们需要将这个文本节点转换为一个观察者
        const vmKey: string = RegExp.$1.trim(); // $1 是正则表达式匹配到的第一个值，这里其实就是 message
        new Watcher(vm, child, vmKey);
    }

    // 处理完成之后，我们就会将其添加到文档碎片中
    // 当我们将一个已有节点添加到另一个节点下面的时候做的是一个移动的操作
    documentFragment.appendChild(child);
  }

  // 因此当退出上面的 while 循环的时候，el 应该是一个空节点
  // 所有的子节点都放进了文档碎片中
  // 我们再将文档碎片中的所有子节点重新添加回 el 中
  el.appendChild(documentFragment);
}
