import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateProductUseCase } from './UpdateProductUseCase';

export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title, quantity, price } = request.body;

    const updateProductUseCase = container.resolve(UpdateProductUseCase);

    const result = await updateProductUseCase.execute({
      id,
      title,
      quantity,
      price,
    });

    return response.status(200).json(result);
  }
}
