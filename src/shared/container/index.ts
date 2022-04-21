import { container } from 'tsyringe';
import { ProductsRepository } from '../../modules/products/repositories/implementations/ProductsRepository';
import { IProductsRepository } from '../../modules/products/repositories/IProductsRepository';
import { PurchasesRepository } from '../../modules/purchases/repositories/implementations/PurchasesRepository';
import { IPurchasesRepository } from '../../modules/purchases/repositories/IPurchasesRepository';

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);

container.registerSingleton<IPurchasesRepository>(
  'PurchasesRepository',
  PurchasesRepository,
);
