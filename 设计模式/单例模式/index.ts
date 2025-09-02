export class Person {
  private static instance: Person; // 静态属性，用户存储全局唯一实例
  private name: string;
  private age: number;
  // 私有化了构造函数，防止外部直接使用 new Person() 来创建实例
  private constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // 静态方法，用于获取全局唯一实例
  public static getInstance(name: string, age: number): Person {
    // 如果实例不存在，则创建实例并返回
    if (Person.instance === null) {
      Person.instance = new Person(name, age);
    }
    return Person.instance;
  }
  sayHello() {
    console.log("hello");
  }
}

const p1 = Person.getInstance("virgo", 25);
const p2 = Person.getInstance("gxg", 26);
console.log(p1 === p2); // true
