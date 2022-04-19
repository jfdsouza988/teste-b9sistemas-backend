import { Router } from 'express';
import { customersRoutes } from './customers.routes';
import { productsRoutes } from './products.routes';

const router = Router();

router.use('/customer', customersRoutes);
router.use('/product', productsRoutes);

export { router };
