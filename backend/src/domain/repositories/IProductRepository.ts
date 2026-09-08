import { Product } from '../models/Product';

export interface IProductRepository {
    getActiveProducts(): Promise<Product[]>;
}