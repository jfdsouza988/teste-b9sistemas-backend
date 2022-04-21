import { Product } from '@prisma/client';
import { ICreateProductDTO } from '../dtos/ICreateProductDTO';

export interface IProducts {
  id: string;
  quantity: number;
}
interface IProductsRepository {
  create({ title, quantity }: ICreateProductDTO): Promise<Product>;
  findBySlug(slug: string): Promise<Product>;
  findById(id: string): Promise<Product>;
  findByIds(products: string[]): Promise<Product[]>;
  listAllProducts(): Promise<Product[]>;
  delete(id: string): Promise<Product>;
  update(id: string, quantity: number, price: number): Promise<Product>;
  updateStock(products: IProducts[]): Promise<void>;
}

export { IProductsRepository };
