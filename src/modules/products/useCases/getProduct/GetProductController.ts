import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetProductUseCase } from './GetProductUseCase';

export class GetProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getProductUseCase = container.resolve(GetProductUseCase);

    const result = await getProductUseCase.execute({ id });

    return response.status(200).json(result);
  }
}
