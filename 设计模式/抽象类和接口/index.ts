// Food 接口
interface Food {
  getNutrition(): number;
}

// 香肠类
class Sausage implements Food {
  getNutrition(): number {
    return 12;
  }
  getColor(): string {
    return "red";
  }
}

class Cat {
  energy: number;
  constructor(energy: number) {
    this.energy = energy;
  }
  /**
   * 喂食方法
   * @param food 食物对象，必须实现Food接口
   * @remarks 此方法只依赖Food接口，不依赖具体实现类
   */
  eat(food: Food) {
    const nutrition = food.getNutrition();
    this.energy += nutrition;
    console.log(`Cat ate ${nutrition} calories`);
  }
}

const cat = new Cat(10);
const sausage = new Sausage();
cat.eat(sausage);
