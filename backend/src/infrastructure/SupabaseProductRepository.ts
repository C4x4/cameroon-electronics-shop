import { supabase } from './supabaseClient';
import { Product } from '../domain/models/Product';

export class SupabaseProductRepository {
    public async fetchActive(category?: string, search?: string): Promise<Product[]> {
        let query = supabase.from('products').select('*').eq('is_active', true);

        if (category && category !== 'All') {
            query = query.eq('category', category);
        }

        if (search) {
            query = query.or(`name_en.ilike.%${search}%,name_fr.ilike.%${search}%`);
        }

        const { data, error } = await query;

        if (error) throw new Error(`Database error: ${error.message}`);
        if (!data) return []; // Fixes the "Qualifier of 'map' is possibly null" error


        return data.map((row: any) => new Product(
            row.id,
            row.name_en,
            row.name_fr,
            row.base_price_xaf,
            row.warranty,
            row.image_url,
            row.category,
            row.brand
        ));
    }
}