import { Purchase } from '.prisma/client';
import { prisma } from '../../../../database/prismaClients';
import { ICreatePurchaseDTO } from '../../dtos/ICreatePurchaseDTO';
import { IPurchasesRepository } from '../IPurchasesRepository';

class PurchasesRepository implements IPurchasesRepository {
  async create({
    productId,
    customerId,
  }: ICreatePurchaseDTO): Promise<Purchase> {
    const purchase = await prisma.purchase.create({
      data: {
        productId,
        customerId,
      },
    });

    return purchase;
  }
}

export { PurchasesRepository };
