import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { ICustomersRepository } from '../../../customers/repositories/ICustomersRepository';
import { IProductsRepository } from '../../../products/repositories/IProductsRepository';
import { IPurchasesRepository } from '../../repositories/IPurchasesRepository';

interface IRequest {
  customerId: string;
  productId: string;
}

@injectable()
class CreatePurchaseUseCase {
  constructor(
    @inject('PurchasesRepository')
    private purchasesRepository: IPurchasesRepository,
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}
  async execute({ customerId, productId }: IRequest) {
    const product = await this.productsRepository.findById(productId);

    if (!product) {
      throw new AppError('Product not found');
    }

    const customer = await this.customersRepository.findById(customerId);

    if (!customer) {
      throw new AppError('Customer not found');
    }

    const purchase = await this.purchasesRepository.create({
      customerId,
      productId,
    });

    return purchase;
  }
}

export { CreatePurchaseUseCase };
