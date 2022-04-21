import { Product } from '@prisma/client';

interface ICreatePurchaseDTO {
  products: Product[];
  totalPrice: number;
}

export { ICreatePurchaseDTO };
