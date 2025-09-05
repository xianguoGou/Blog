import Watcher from "./Watcher.js";
// 发布者
export default class Dep {
    // 该静态属性用于暂时保存当前的 Watcher 对象，主要用于进行依赖的收集
    static target: Watcher | null = null;
    // 维护观察者的列表
    subs: Watcher[];
    constructor() {
        this.subs = [];
    }
    // 添加观察者
    addSub(sub: Watcher): void {
        this.subs.push(sub);
    }
    // 通知观察者更新
    notify(): void {
        this.subs.forEach(sub => sub.update());
    }
}