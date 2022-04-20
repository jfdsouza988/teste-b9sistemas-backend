import { Router } from 'express';
import { CreateProductController } from '../../modules/products/useCases/createProduct/CreateProductController';
import { DeleteProductController } from '../../modules/products/useCases/deleteProduct/DeleteProductController';
import { GetAllProductsController } from '../../modules/products/useCases/getAllProducts/GetAllProductsController';
import { GetProductController } from '../../modules/products/useCases/getProduct/GetProductController';
import { UpdateProductController } from '../../modules/products/useCases/updateProduct/UpdateProductController';

const productsRoutes = Router();

const createProductController = new CreateProductController();
const getAllProductsController = new GetAllProductsController();
const getProductController = new GetProductController();
const deleteProductController = new DeleteProductController();
const updateProductsController = new UpdateProductController();

productsRoutes.get('/', getAllProductsController.handle);
productsRoutes.get('/:id', getProductController.handle);
productsRoutes.post('/', createProductController.handle);
productsRoutes.delete('/:id', deleteProductController.handle);
productsRoutes.patch('/:id', updateProductsController.handle);

export { productsRoutes };
