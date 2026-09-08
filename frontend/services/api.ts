import { ProductResponse } from '@/types';

const API_BASE_URL = 'http://localhost:8080/api';

export async function fetchProducts(category?: string, search?: string): Promise<ProductResponse[]> {
    const params = new URLSearchParams();

    if (category && category !== 'All') {
        params.append('category', category);
    }
    if (search) {
        params.append('search', search);
    }

    const url = `${API_BASE_URL}/products${params.toString() ? `?${params.toString()}` : ''}`;

    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch products from backend');

    return res.json();
}