import { SupabaseProductRepository } from '../infrastructure/SupabaseProductRepository';
import { Product } from '../domain/models/Product';

export class CatalogService {
    constructor(private readonly repository: SupabaseProductRepository) {}

    public async fetchStorefrontCatalog(category?: string, search?: string): Promise<Product[]> {
        return this.repository.fetchActive(category, search);
    }
}