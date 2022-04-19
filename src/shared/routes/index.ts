import { Router } from 'express';
import { customersRoutes } from './customers.routes';
import { productsRoutes } from './products.routes';
import { purchasesRoutes } from './purchases.routes';

const router = Router();

router.use('/customer', customersRoutes);
router.use('/product', productsRoutes);
router.use('/purchase', purchasesRoutes);

export { router };
