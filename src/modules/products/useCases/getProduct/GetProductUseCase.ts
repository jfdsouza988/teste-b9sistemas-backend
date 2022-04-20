import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '../../repositories/IProductsRepository';

interface IRequest {
  id: string;
}

@injectable()
class GetProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}
  async execute({ id }: IRequest) {
    const product = await this.productsRepository.findById(id);

    return product;
  }
}

export { GetProductUseCase };
