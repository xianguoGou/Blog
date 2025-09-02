import { AbstructFactory } from "./Factory/AbstructFactory";
import { ModernFactory } from "./Factory/ModernFactory";
import { VictorianFactory } from "./Factory/VictorianFactory";

class Store {
  factory: AbstructFactory;
  constructor(abstractFactory: AbstructFactory) {
    this.factory = abstractFactory;
  }
  // 定做家具方法
  public orderFurniture() {
    const chair = this.factory.createChair();
    const sofa = this.factory.createSofa();
    const coffeeTable = this.factory.createCoffeTable();
    return `${chair.sitOn()}, ${sofa.lieOn()}, ${coffeeTable.putOn("coffee")}`;
  }
}

const modernFactory = new ModernFactory();
const store = new Store(modernFactory);
console.log(store.orderFurniture());

const victorianFactory = new VictorianFactory();
const store2 = new Store(victorianFactory);
console.log(store2.orderFurniture());
