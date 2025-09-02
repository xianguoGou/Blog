import { SimpleFactory } from "./SimpleFactory";

const productA = SimpleFactory.createProduct("A");
const productB = SimpleFactory.createProduct("B");

productA.use();
productB.use();
