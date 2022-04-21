import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetAllPurchasesUseCase } from './GetAllPurchasesUseCase';

export class GetAllPurchasesController {
  async handle(request: Request, response: Response) {
    const getAllPurchasesUseCase = container.resolve(GetAllPurchasesUseCase);

    const result = await getAllPurchasesUseCase.execute();

    return response.status(200).json(result);
  }
}
