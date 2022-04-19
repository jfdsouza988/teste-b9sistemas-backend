import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '../../repositories/IProductsRepository';

interface IRequest {
  id: string;
}

@injectable()
class DeleteProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}
  async execute({ id }: IRequest) {
    const product = await this.productsRepository.delete(id);

    return product;
  }
}

export { DeleteProductUseCase };
