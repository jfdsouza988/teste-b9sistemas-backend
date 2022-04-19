import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateProductUseCase } from './UpdateProductUseCase';

export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { quantity } = request.body;

    const updateProductUseCase = container.resolve(UpdateProductUseCase);

    const result = await updateProductUseCase.execute({
      id,
      quantity,
    });

    return response.status(200).json(result);
  }
}
