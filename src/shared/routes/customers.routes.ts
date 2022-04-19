import { Router } from 'express';
import { CreateCustomerController } from '../../modules/customers/useCases/createCustomer/CreateCustomerController';
import { GetAllCustomersController } from '../../modules/customers/useCases/getAllCustomers/GetAllCustomersController';

const customersRoutes = Router();

const createCustomerController = new CreateCustomerController();
const getAllCustomersController = new GetAllCustomersController();

customersRoutes.get('/', getAllCustomersController.handle);
customersRoutes.post('/', createCustomerController.handle);

export { customersRoutes };
