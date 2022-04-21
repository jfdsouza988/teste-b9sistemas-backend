import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatePurchaseUseCase } from './CreatePurchaseUseCase';

export class CreatePurchaseController {
  async handle(request: Request, response: Response) {
    const { products, totalPrice } = request.body;

    const createPurchaseUseCase = container.resolve(CreatePurchaseUseCase);

    const result = await createPurchaseUseCase.execute({
      products,
      totalPrice,
    });

    return response.status(201).json(result);
  }
}
