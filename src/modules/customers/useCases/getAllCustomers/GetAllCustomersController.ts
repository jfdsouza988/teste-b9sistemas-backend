import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetAllCustomersUseCase } from './GetAllCustomersUseCase';

export class GetAllCustomersController {
  async handle(request: Request, response: Response) {
    const getAllCustomersUseCase = container.resolve(GetAllCustomersUseCase);

    const result = await getAllCustomersUseCase.execute();

    return response.status(200).json(result);
  }
}
