import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { ICustomersRepository } from '../../repositories/ICustomersRepository';

interface IRequest {
  name?: string;
  cpf: string;
}

@injectable()
class CreateCustomerUseCase {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}
  async execute({ name, cpf }: IRequest) {
    const customerAlreadyExists = await this.customersRepository.findByCpf(cpf);

    if (customerAlreadyExists) {
      throw new AppError('Customer already exists');
    }

    const customer = await this.customersRepository.create({
      name,
      cpf,
    });

    return customer;
  }
}

export { CreateCustomerUseCase };
