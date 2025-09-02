import { AbstructFactory } from "./AbstructFactory";
import { Sofa, Chair, CoffeTable } from "../Products/AbstructProduct";
import {
  ModernChair,
  ModernSofa,
  ModernCoffeTable,
} from "../Products/ModernProducts";

export class ModernFactory extends AbstructFactory {
  createSofa(): Sofa {
    return new ModernSofa();
  }
  createChair(): Chair {
    return new ModernChair();
  }
  createCoffeTable(): CoffeTable {
    return new ModernCoffeTable();
  }
}
