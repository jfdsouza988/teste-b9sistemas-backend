import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '../../repositories/IProductsRepository';

interface IRequest {
  id: string;
  quantity: number;
}

@injectable()
class UpdateProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}
  async execute({ id, quantity }: IRequest) {
    const product = await this.productsRepository.update(id, quantity);

    return product;
  }
}

export { UpdateProductUseCase };
