import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { IProductsRepository } from '../../../products/repositories/IProductsRepository';
import { IPurchasesRepository } from '../../repositories/IPurchasesRepository';

interface IProducts {
  id: string;
  quantity: number;
}

interface IRequest {
  products: IProducts[];
  totalPrice: number;
}

@injectable()
class CreatePurchaseUseCase {
  constructor(
    @inject('PurchasesRepository')
    private purchasesRepository: IPurchasesRepository,
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}
  async execute({ products, totalPrice }: IRequest) {
    const productsId: string[] = [];

    products.map((product) => {
      return productsId.push(product.id);
    });

    const existsProducts = await this.productsRepository.findByIds(productsId);

    if (!existsProducts) {
      throw new AppError('Products not found');
    }

    const purchase = await this.purchasesRepository.create({
      products: existsProducts,
      totalPrice,
    });

    await this.purchasesRepository.updateProducts(existsProducts, purchase.id);

    await this.productsRepository.updateStock(products);
  }
}

export { CreatePurchaseUseCase };
