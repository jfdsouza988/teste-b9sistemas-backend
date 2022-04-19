import { Router } from 'express';
import { CreateProductController } from '../../modules/products/useCases/createProduct/CreateProductController';
import { DeleteProductController } from '../../modules/products/useCases/deleteProduct/DeleteProductController';
import { GetAllProductsController } from '../../modules/products/useCases/getAllProducts/GetAllProductsController';
import { UpdateProductController } from '../../modules/products/useCases/updateProduct/UpdateProductController';

const productsRoutes = Router();

const createProductController = new CreateProductController();
const getAllProductsController = new GetAllProductsController();
const deleteProductController = new DeleteProductController();
const updateProductsController = new UpdateProductController();

productsRoutes.get('/', getAllProductsController.handle);
productsRoutes.post('/', createProductController.handle);
productsRoutes.delete('/:id', deleteProductController.handle);
productsRoutes.patch('/:id', updateProductsController.handle);

export { productsRoutes };
