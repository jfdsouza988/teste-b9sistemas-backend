import { Product } from '.prisma/client';
import { prisma } from '../../../../database/prismaClients';
import { ICreateProductDTO } from '../../dtos/ICreateProductDTO';
import { IProductsRepository } from '../IProductsRepository';

class ProductsRepository implements IProductsRepository {
  async create({ title, slug, quantity }: ICreateProductDTO): Promise<Product> {
    const product = await prisma.product.create({
      data: {
        title,
        slug,
        quantity,
      },
    });

    return product;
  }
  async findBySlug(slug: string): Promise<Product> {
    const product = await prisma.product.findUnique({
      where: {
        slug,
      },
    });

    return product;
  }
  async listAllProducts(): Promise<Product[]> {
    const products = await prisma.product.findMany();

    return products;
  }

  async delete(id: string): Promise<Product> {
    const product = await prisma.product.delete({
      where: {
        id,
      },
    });

    return product;
  }

  async update(id: string, title: string, quantity: number): Promise<Product> {
    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        title,
        quantity,
      },
    });

    return product;
  }

  async findById(id: string): Promise<Product> {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    return product;
  }
}

export { ProductsRepository };
