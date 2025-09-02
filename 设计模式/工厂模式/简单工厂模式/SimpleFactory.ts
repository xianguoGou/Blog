import { IProduct } from "./Interface";
import { ProductA } from "./ProductA";
import { ProductB } from "./ProductB";

export class SimpleFactory {
  static createProduct(type: string): IProduct {
    switch (type) {
      case "A":
        return new ProductA();
      case "B":
        return new ProductB();
      default:
        throw new Error("Invalid product type");
    }
  }
}
