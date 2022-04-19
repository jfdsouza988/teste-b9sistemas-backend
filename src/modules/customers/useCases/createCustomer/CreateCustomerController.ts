import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCustomerUseCase } from './CreateCustomerUseCase';

export class CreateCustomerController {
  async handle(request: Request, response: Response) {
    const { name, cpf } = request.body;

    const createCustomerUseCase = container.resolve(CreateCustomerUseCase);

    const result = await createCustomerUseCase.execute({
      name,
      cpf,
    });

    return response.status(201).json(result);
  }
}
