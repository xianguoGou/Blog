import { VueOptions } from "./VueOptions";
import { observer, compile } from "./utils.js";

export default class Vue {
  $el: string;
  [key: string]: any;
  constructor(options: VueOptions) {
    this.$el = options.el;
    // 做数据劫持，将 data 上面的数据存储到 Vue 的实例对象上面
    observer(this, options.data);
    // 对模板进行编译
    compile(this);
  }
}
