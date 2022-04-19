import { Router } from 'express';
import { customersRoutes } from './customers.routes';

const router = Router();

router.use('/customer', customersRoutes);

export { router };
