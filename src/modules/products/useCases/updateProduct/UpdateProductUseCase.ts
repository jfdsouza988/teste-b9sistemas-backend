import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '../../repositories/IProductsRepository';

interface IRequest {
  id: string;
  quantity: number;
  price: number;
}

@injectable()
class UpdateProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}
  async execute({ id, quantity, price }: IRequest) {
    const product = await this.productsRepository.update(id, quantity, price);

    return product;
  }
}

export { UpdateProductUseCase };
