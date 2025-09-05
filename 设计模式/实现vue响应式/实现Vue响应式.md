# 实现Vue响应式

> 该文档仅记录重点信息



首先我们需要初始化项目，这里我们仅仅使用 tsc --init 来初始化 TS 的配置文件：

```json
{
  "compilerOptions": {
    "target": "es2016", // 配置编译目标代码的版本标准
    "module": "es6", // 配置编译目标使用的模块化标准
    "lib": ["DOM", "ESNext", "DOM.Iterable", "ScriptHost"],
    "outDir": "./dist", // 编译后的 js 所存放的目录
    "strict": true,
    "removeComments": true, // 去除注释
    "esModuleInterop": true // 启用 ES 模块化交互非 ES 模块导出
  },
  "include": ["./src"] // 默认编译项目目录下所有的 ts 文件，这里表示只编译 src 目录下的 ts 文件
}
```

上面配置中，所对应的每一项的具体含义如下：

- compilerOptions: 这个属性包含了一系列用来告诉 TypeScript 编译器如何编译代码的设置。
  - target: 设置编译后的 JavaScript 代码版本。es2016 指的是 ECMAScript 2016 标准，意味着编译器会产生符合 ES2016 标准的代码，可以使用该标准下的特性。
  - module: 设置生成代码的模块系统，es6 或 es2015 表示使用 ECMAScript 2015 的模块系统，即 import 和 export。
  - lib: 这个列表允许你声明项目中要包含的库文件。库是一组声明文件的集合，这些文件包含了不同环境的全局变量的类型信息。在这里，它包括 DOM API、最新的 ECMAScript 标准、可迭代的 DOM API（例如 NodeList 或 HTMLCollection）和脚本宿主（如浏览器和 Node.js）的类型信息。
  - outDir: 指定编译器输出 JavaScript 文件的目录。在这个配置中，所有编译后的 .js 文件将放置在项目根目录下的 dist 文件夹中。
  - strict: 启用所有严格的类型检查选项。当设置为 true 时，TypeScript 编译器会执行最严格的类型检查，这有助于确保代码质量更高，更少的潜在问题。
  - removeComments: 如果设置为 true，编译器在生成 JavaScript 文件时会移除源代码中的所有注释。
  - esModuleInterop: 这个选项为导入非 ECMAScript 标准模块启用更符合标准的行为。当设置为 true 时，它允许你使用 import foo from 'foo' 导入默认导出，而不是使用 import * as foo from 'foo'。

- include: 这个属性告诉 TypeScript 编译器应该编译哪些文件。在这个例子中，它被设置为编译 src 目录下的所有 .ts 文件。这意味着，编译器将遍历 src 目录，将找到的每个 .ts 文件编译为 .js 文件，并将它们输出到 outDir 指定的目录。



```ts
[key: string]: any;
```

这个叫做索引签名，表示的意思允许 Vue 实例拥有任意数量的属性，但是属性名是字符串类型，属性值可以是任意类型。



```ts
Record<string, any>
```

Record\<K,  T> 是 TS 里面的一个高级类型，通常表示一个对象，对象的键是 K 类型，对象的值为 T 类型。

比如在上面的代码中，表示对象的键是 string 类型，对象的值可以是任意类型。



接下来就是实现观察者模式，这里存在两个角色：

- 观察者
- 发布者



**发布者**

发布者的作用是：

- 可以添加观察者
- 能够通知观察者

```ts
// 发布者
import Watcher from "./Watcher.js";
export default class Dep {
  // 该静态属性用于暂时保存当前的 Watcher 对象，主要用于进行依赖的收集
  static target: Watcher | null = null;
  // 维护一个观察者的列表
  subs: Watcher[];

  constructor() {
    this.subs = [];
  }

  // 添加观察者到列表里面
  addSub(sub: Watcher): void {
    this.subs.push(sub);
  }

  // 通知所有观察者更新
  notify(): void {
    this.subs.forEach((sub) => {
      sub.update();
    });
  }
}
```



**观察者**

观察者有一个最重要的方法就是 update，当依赖的数据发生变化的时候，发布者会通知每一个观察者，然后观察者会调用 update 方法来更新数据。

具体代码如下：

```ts
// 观察者
import Vue from "./Vue.js";
import Dep from "./Dep.js";

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
  // 更新方法
  update(): void {
    // 根据节点的类型来进行更新
    // 这个例子中是做了简化的，只有两种类型
    if (this.el.nodeType === Node.TEXT_NODE) {
      // 说明你是一个文本类型的节点
      // 我们直接更新该节点的 nodeValue
      // this.vm[this.vmKey] 相关于是访问 Vue 实例对象的 data 中的属性
      // 因为后面我们会对 data 中的属性进行劫持，将 data 里面的所有数据存储到 Vue 实例对象上
      this.el.nodeValue = this.vm[this.vmKey];
    } else if (this.el.nodeType == Node.ELEMENT_NODE) {
      // 说明你是一个元素节点，这里做了简化，直接更新 innerHTML
      (this.el as HTMLElement).innerHTML = this.vm[this.vmKey];
    }
  }
}
```



**劫持数据对象**

所谓劫持数据对象，就是将 data 里面的数据添加到 Vue 的实例对象上面去，但是不是简简单单的添加上去就完事儿，而是会针对你的数据添加 getter/setter，回头当访问/设置 Vue 实例上面的数据的时候，就会触发拦截器（getter/setter）

具体代码如下：

```ts
import Vue from "./Vue.js";
import Dep from "./Dep.js";

export function observer(vm: Vue, obj: Record<string, any>): void {
  // 该方法主要就是做数据劫持
  // 将传递过来的 data 上面的数据绑定到 Vue 实例对象上面，并且添加 getter/setter

  const dep = new Dep(); // 实例化一个发布者

  // 遍历数据属性
  Object.keys(obj).forEach((key) => {
    // 首先，将原来的值先保存下来
    let internalValue = obj[key];

    Object.defineProperty(vm, key, {
      get(): any {
        // 如果有观察者，应该将该观察者添加到发布者的观察者列表里面
        if (Dep.target) {
          dep.addSub(Dep.target);
        }
        return internalValue;
      },
      set(newVal: any): void {
        internalValue = newVal;
        // 数据发生了变化之后，我们就需要通知所有的观察者
        // 告诉观察者，数据发生了变化，你们需要更新一下
        dep.notify();
      },
    });
  });
}
```



**对模板进行处理**

主要就是收集猫须字符串的地方，因为猫须字符串的地方就是要成为观察者的地方，对应的方法如下：

```ts
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
        const vmKey: string = RegExp.$1.trim(); // $1 是正则表达式匹配到的第一个值，这里其实就是 msg
        new Watcher(vm, child, vmKey);
      } else {
        // 说明里面没有猫须，我们还需要判断这个元素节点的属性是否有 v-model
        // 如果你有 v-model 也需要进行处理
        Array.from(element.attributes).forEach((attr) => {
          if (attr.name === "v-model") {
            // 如果进入此分支，说明该元素节点的属性包含 v-model
            const vmKey: string = attr.value; // 这里其实就是 msg
            element.addEventListener("input", (ev: Event)=>{
                const target = ev.target as HTMLInputElement;
                // 这里其实就是将文本框所输入的值赋值给 vm 实例对象上面的 msg 属性
                vm[vmKey] = target.value;
            });
          }
        });
      }
    } else if(child.nodeType === Node.TEXT_NODE && reg.test(child.nodeValue || "")) {
        // 说明这是一个文本节点，并且这个文本节点也是带猫须的
        // 那么我们需要将这个文本节点转换为一个观察者
        const vmKey: string = RegExp.$1.trim(); // $1 是正则表达式匹配到的第一个值，这里其实就是 msg
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
```

