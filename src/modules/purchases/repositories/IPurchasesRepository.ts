import { Product, Purchase } from '@prisma/client';
import { ICreatePurchaseDTO } from '../dtos/ICreatePurchaseDTO';

interface IPurchasesRepository {
  create({ products, totalPrice }: ICreatePurchaseDTO): Promise<Purchase>;
  updateProducts(products: Product[], purchaseId: string): Promise<void>;
  listAllPurchases(): Promise<Purchase[]>;
}

export { IPurchasesRepository };
