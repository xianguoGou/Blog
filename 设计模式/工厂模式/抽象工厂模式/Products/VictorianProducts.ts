import { Chair, Sofa, CoffeTable } from "./AbstructProduct";

// 具体的产品 - 维多利亚风家具

export class VictorianChair extends Chair {
  sitOn(): string {
    return "维多利亚风椅子 - 坐在上面";
  }
}

export class VictorianSofa extends Sofa {
  lieOn(): string {
    return "维多利亚风沙发 - 躺在上面";
  }
}

export class VictorianCoffeTable extends CoffeTable {
  putOn(thing: string): string {
    return `维多利亚风咖啡杯 - 放 ${thing} 进去`;
  }
}
