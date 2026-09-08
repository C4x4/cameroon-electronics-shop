import { ProductResponse } from '@/types';
import { ProductCatalog } from '@/components/features/ProductCatalog';
import { Hero } from '@/components/features/Hero';
import { PromoBanners } from '@/components/features/PromoBanners';
import { fetchProducts } from '@/services/api';

export default async function Home() {
    const products: ProductResponse[] = await fetchProducts();

    return (
        <div>
            <Hero />
            <PromoBanners />

            <main id="catalog" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
                <div className="mb-8 border-b border-gray-200 pb-4">
                    <h2 className="text-2xl font-black tracking-tight text-gray-900">Electronic Accessories & Devices</h2>
                    <p className="text-sm text-gray-500 mt-1">Browse our active inventory with live database filtering.</p>
                </div>

                <ProductCatalog initialProducts={products} />
            </main>
        </div>
    );
}