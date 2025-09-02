import { Chair, Sofa, CoffeTable } from "./AbstructProduct";

// 具体的产品 - 现代风家具

export class ModernChair extends Chair {
  sitOn(): string {
    return "现代风椅子 - 坐在上面";
  }
}

export class ModernSofa extends Sofa {
    lieOn(): string {
        return "现代风沙发 - 躺在上面";
    }
}

export class ModernCoffeTable extends CoffeTable {
    putOn(thing: string): string {
        return `现代风咖啡杯 - 放 ${thing} 进去`;
    }
}

