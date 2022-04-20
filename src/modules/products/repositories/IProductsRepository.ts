import { Product } from '@prisma/client';
import { ICreateProductDTO } from '../dtos/ICreateProductDTO';

interface IProductsRepository {
  create({ title, quantity }: ICreateProductDTO): Promise<Product>;
  findBySlug(slug: string): Promise<Product>;
  findById(id: string): Promise<Product>;
  listAllProducts(): Promise<Product[]>;
  delete(id: string): Promise<Product>;
  update(id: string, quantity: number, price: number): Promise<Product>;
}

export { IProductsRepository };
