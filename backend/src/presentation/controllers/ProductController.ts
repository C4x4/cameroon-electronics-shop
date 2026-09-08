import { Request, Response } from 'express';
import { CatalogService } from '../../application/CatalogService';

export class ProductController {
    constructor(private readonly catalogService: CatalogService) {}

    public getActiveProducts = async (req: Request, res: Response): Promise<void> => {
        try {
            const category = req.query.category as string;
            const search = req.query.search as string;

            const products = await this.catalogService.fetchStorefrontCatalog(category, search);

            const response = products.map(p => ({
                id: p.id,
                nameEn: p.nameEn,
                nameFr: p.nameFr,
                priceXaf: p.priceXaf,
                formattedPrice: p.getFormattedPrice(),
                warranty: p.warranty,
                imageUrl: p.imageUrl,
                category: p.category,
                brand: p.brand
            }));

            res.status(200).json(response);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    };
}