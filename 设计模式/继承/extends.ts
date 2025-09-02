/** ES6 中的继承 **/

// 父类
export class Person {
  private _name: string;
  private _age: number;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
  sayHello() {
    console.log(
      `Hello, my name is ${this._name} and I am ${this._age} years old.`
    );
  }
}

// 学生类
class Student extends Person {
  private _gender: string;
  private _score: number;
  constructor(name: string, age: number, gender: string, score: number) {
    super(name, age);
    this._gender = gender;
    this._score = score;
  }
  sayScore() {
    console.log(`My score is ${this._score}.`);
  }
  
  get gender() {
    return this._gender;
  }
  get score() {
    return this._score;
  }
}

const student = new Student("Alice", 18, "female", 90);
student.sayHello();
student.sayScore();
console.log(student.gender);
