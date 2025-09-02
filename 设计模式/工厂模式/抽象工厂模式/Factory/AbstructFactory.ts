
import { Sofa, Chair, CoffeTable } from "../Products/AbstructProduct"

// 定义抽象工厂接口
export abstract class AbstructFactory {
    abstract createSofa(): Sofa;
    abstract createChair(): Chair;
    abstract createCoffeTable(): CoffeTable;
}