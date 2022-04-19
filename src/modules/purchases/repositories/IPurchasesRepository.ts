import { Purchase } from '@prisma/client';
import { ICreatePurchaseDTO } from '../dtos/ICreatePurchaseDTO';

interface IPurchasesRepository {
  create({ productId, customerId }: ICreatePurchaseDTO): Promise<Purchase>;
}

export { IPurchasesRepository };
