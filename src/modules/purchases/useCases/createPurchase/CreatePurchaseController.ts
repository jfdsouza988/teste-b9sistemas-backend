import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatePurchaseUseCase } from './CreatePurchaseUseCase';

export class CreatePurchaseController {
  async handle(request: Request, response: Response) {
    const { productId, customerId } = request.body;

    const createPurchaseUseCase = container.resolve(CreatePurchaseUseCase);

    const result = await createPurchaseUseCase.execute({
      productId,
      customerId,
    });

    return response.status(200).json(result);
  }
}
