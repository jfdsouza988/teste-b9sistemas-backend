import { Router } from 'express';
import { CreatePurchaseController } from '../../modules/purchases/useCases/createPurchase/CreatePurchaseController';
import { GetAllPurchasesController } from '../../modules/purchases/useCases/getAllPurchases/GetAllPurchasesController';

const purchasesRoutes = Router();

const createPurchaseController = new CreatePurchaseController();
const getAllPurchasesController = new GetAllPurchasesController();

purchasesRoutes.post('/', createPurchaseController.handle);
purchasesRoutes.get('/', getAllPurchasesController.handle);

export { purchasesRoutes };
