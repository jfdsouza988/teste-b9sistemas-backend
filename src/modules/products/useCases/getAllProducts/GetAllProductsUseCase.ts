import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '../../repositories/IProductsRepository';

@injectable()
class GetAllProductsUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}
  async execute() {
    const products = await this.productsRepository.listAllProducts();

    return products;
  }
}

export { GetAllProductsUseCase };
