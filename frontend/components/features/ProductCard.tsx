"use client";

import { ProductResponse } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface ProductCardProps {
    product: ProductResponse;
}

export function ProductCard({ product }: ProductCardProps) {
    const { language } = useLanguage();

    // Dynamically select the text based on active language
    const title = language === 'en' ? product.nameEn : product.nameFr;
    const warrantyLabel = language === 'en' ? 'Warranty' : 'Garantie';
    const buttonText = language === 'en' ? 'Add to Cart' : 'Ajouter au panier';

    return (
        <div className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md">
            {/* Image Container with Relative Positioning for the Badge */}
            <div className="relative">
                {product.imageUrl ? (
                    <img src={product.imageUrl} alt={title} className="h-48 w-full object-cover" />
                ) : (
                    <div className="flex h-48 w-full items-center justify-center bg-gray-200 text-gray-500">No Image</div>
                )}

                {/* The Condition Badge */}
                <span className="absolute right-2 top-2 rounded bg-green-500 px-2 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
          {language === 'en' ? 'New' : 'Neuf'}
        </span>
            </div>

            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <p className="mt-2 text-xl font-bold text-blue-600">{product.formattedPrice}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    <span>{warrantyLabel}: {product.warranty}</span>
                    <button className="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}