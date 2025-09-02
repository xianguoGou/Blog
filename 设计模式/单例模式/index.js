// 我们需要一个辅助方法
// 该方法可以将一个类转为一个单例类
function getSingle(fn) {
  let instance = null; // 用于存储唯一的实例对象
  return function (...args) {
    if (instance !== null) {
      // 进入此分支，说明当前已经存在实例对象
      return instance;
    }
    // 没有进入上面的 if，说明当前不存在实例对象
    instance = new fn(...args);
    return instance;
  };
}

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello ${this.name}`;
  }
}

const p1 = new Person("John");
const p2 = new Person("John");
console.log(p1 === p2); // false

const SinglePerson = getSingle(Person);
const p3 = new SinglePerson("John");
const p4 = new SinglePerson("John");
console.log(p3 === p4); // true