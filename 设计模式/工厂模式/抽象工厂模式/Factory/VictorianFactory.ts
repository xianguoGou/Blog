import { AbstructFactory } from "./AbstructFactory";
import { Sofa, Chair, CoffeTable } from "../Products/AbstructProduct";
import {
  VictorianChair,
  VictorianCoffeTable,
  VictorianSofa,
} from "../Products/VictorianProducts";

export class VictorianFactory extends AbstructFactory {
  createSofa(): Sofa {
    return new VictorianSofa();
  }
  createChair(): Chair {
    return new VictorianChair();
  }
  createCoffeTable(): CoffeTable {
    return new VictorianCoffeTable();
  }
}
