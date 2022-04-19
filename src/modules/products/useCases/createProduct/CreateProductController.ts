import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateProductUseCase } from './CreateProductUseCase';

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { title, quantity } = request.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    const result = await createProductUseCase.execute({
      title,
      quantity,
    });

    return response.status(200).json(result);
  }
}
