import slugify from 'slugify';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { IProductsRepository } from '../../repositories/IProductsRepository';

interface IRequest {
  title: string;
  quantity: number;
  price: number;
}

@injectable()
class CreateProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}
  async execute({ title, quantity, price }: IRequest) {
    const slug = slugify(title, { lower: true });

    const productWithSameSlug = await this.productsRepository.findBySlug(slug);

    if (productWithSameSlug) {
      throw new AppError('Another product with same slug already exists');
    }

    const product = await this.productsRepository.create({
      title,
      slug,
      quantity,
      price,
    });

    return product;
  }
}

export { CreateProductUseCase };
