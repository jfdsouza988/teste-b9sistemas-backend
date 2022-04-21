import { Product } from '.prisma/client';
import { prisma } from '../../../../database/prismaClients';
import { ICreateProductDTO } from '../../dtos/ICreateProductDTO';
import { IProducts, IProductsRepository } from '../IProductsRepository';

class ProductsRepository implements IProductsRepository {
  async create({
    title,
    slug,
    quantity,
    price,
  }: ICreateProductDTO): Promise<Product> {
    const product = await prisma.product.create({
      data: {
        title,
        slug,
        stock: quantity,
        price,
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

  async update(id: string, quantity: number, price: number): Promise<Product> {
    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        stock: quantity,
        price,
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

  async findByIds(products: string[]): Promise<Product[]> {
    const result = await prisma.product.findMany({
      where: {
        id: {
          in: products,
        },
      },
    });

    return result;
  }

  async updateStock(products: IProducts[]): Promise<void> {
    products.map(async (product) => {
      await prisma.product.update({
        where: {
          id: product.id,
        },
        data: {
          stock: {
            decrement: product.quantity,
          },
        },
      });
    });
  }
}

export { ProductsRepository };
