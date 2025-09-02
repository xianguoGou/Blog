import { IProduct } from './Interface';

export class ProductB implements IProduct {
    use(): void {
        console.log('ProductB is used.');
    }
}