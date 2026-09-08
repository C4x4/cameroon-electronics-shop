"use client";

import { useState, useEffect } from 'react';
import { ProductResponse } from '@/types';
import { ProductCard } from './ProductCard';
import { useLanguage } from '@/context/LanguageContext';
import { fetchProducts } from '@/services/api';

interface ProductCatalogProps {
    initialProducts: ProductResponse[];
}


const CATEGORIES = [
    { id: 'All', labelEn: 'All Products', labelFr: 'Tous les produits' },
    { id: 'Phones', labelEn: 'Phones', labelFr: 'Téléphones' },
    { id: 'Laptops', labelEn: 'Laptops', labelFr: 'Ordinateurs' },
    { id: 'Gaming', labelEn: 'Gaming & Consoles', labelFr: 'Jeux & Consoles' },
    { id: 'Cameras', labelEn: 'Cameras & Optics', labelFr: 'Caméras & Optique' },
    { id: 'Accessories', labelEn: 'Accessories', labelFr: 'Accessoires' }

];

export function ProductCatalog({ initialProducts }: ProductCatalogProps) {
    const { language } = useLanguage();
    const [products, setProducts] = useState<ProductResponse[]>(initialProducts);
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        const loadFilteredProducts = async () => {
            try {
                // Fetch products using only the category filter since the top navbar handles search
                const data = await fetchProducts(activeCategory);
                setProducts(data);
            } catch (error) {
                console.error("Error fetching filtered products:", error);
            }
        };

        loadFilteredProducts();
    }, [activeCategory]);

    return (
        <div>
            {/* Category Filter Toolbar Container */}
            <div className="mb-8 flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
                <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`rounded-xl px-5 py-2 text-sm font-semibold transition-all ${
                                activeCategory === category.id
                                    ? 'bg-cameroon-green text-white shadow-md'
                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            {language === 'en' ? category.labelEn : category.labelFr}
                        </button>
                    ))}
                </div>
                <div className="text-xs text-gray-400 font-medium hidden sm:block">
                    {products.length} {language === 'en' ? 'items available' : 'articles disponibles'}
                </div>
            </div>

            {/* Product Grid */}
            {products.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="py-16 text-center text-gray-500 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-lg font-medium">{language === 'en' ? "No products found." : "Aucun produit trouvé."}</p>
                </div>
            )}
        </div>
    );
}