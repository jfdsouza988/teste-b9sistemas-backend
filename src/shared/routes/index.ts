import { Router } from 'express';
import { productsRoutes } from './products.routes';
import { purchasesRoutes } from './purchases.routes';

const router = Router();

router.use('/product', productsRoutes);
router.use('/purchase', purchasesRoutes);

export { router };
