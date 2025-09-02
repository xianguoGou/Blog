// 抽象产品类
// 我们有三个产品：椅子、沙发、咖啡桌

export abstract class Chair {
    abstract sitOn(): string;
}
export abstract class Sofa {
    abstract lieOn(): string;
}
export abstract class CoffeTable {
    abstract putOn(thing: string): string;
}