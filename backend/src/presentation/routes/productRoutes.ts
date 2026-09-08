import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';
import { CatalogService } from '../../application/CatalogService';
import { SupabaseProductRepository } from '../../infrastructure/SupabaseProductRepository';

const router = Router();

// Wire the architecture layers together
const repository = new SupabaseProductRepository();
const service = new CatalogService(repository);
const controller = new ProductController(service);

router.get('/products', controller.getActiveProducts);

export default router;