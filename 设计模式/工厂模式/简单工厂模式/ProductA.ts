import { IProduct } from './Interface';

export class ProductA implements IProduct {
    use(): void {
        console.log('ProductA is used.');
    }
}