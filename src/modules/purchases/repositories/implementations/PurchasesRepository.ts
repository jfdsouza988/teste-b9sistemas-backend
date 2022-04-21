import { Purchase, Product } from '@prisma/client';
import { prisma } from '../../../../database/prismaClients';
import { ICreatePurchaseDTO } from '../../dtos/ICreatePurchaseDTO';
import { IPurchasesRepository } from '../IPurchasesRepository';

class PurchasesRepository implements IPurchasesRepository {
  async create({
    products,
    totalPrice,
  }: ICreatePurchaseDTO): Promise<Purchase> {
    const purchase = await prisma.purchase.create({
      data: {
        products: {
          connect: [{ id: products[0].id }],
        },
        totalPrice,
      },
    });

    return purchase;
  }

  async updateProducts(products: Product[], purchaseId: string): Promise<void> {
    products.map(async (product) => {
      await prisma.purchase.update({
        where: {
          id: purchaseId,
        },
        data: {
          products: {
            connect: [{ id: product.id }],
          },
        },
      });
    });
  }

  async listAllPurchases(): Promise<Purchase[]> {
    const purchases = await prisma.purchase.findMany({
      include: {
        products: true,
      },
    });

    return purchases;
  }
}

export { PurchasesRepository };
