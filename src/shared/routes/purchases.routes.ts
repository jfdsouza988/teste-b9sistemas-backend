import { Router } from 'express';
import { CreatePurchaseController } from '../../modules/purchases/useCases/createPurchase/CreatePurchaseController';

const purchasesRoutes = Router();

const createPurchaseController = new CreatePurchaseController();

purchasesRoutes.post('/', createPurchaseController.handle);

export { purchasesRoutes };
