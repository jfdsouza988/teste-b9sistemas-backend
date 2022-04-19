import { inject, injectable } from 'tsyringe';
import { ICustomersRepository } from '../../repositories/ICustomersRepository';

@injectable()
class GetAllCustomersUseCase {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}
  async execute() {
    const customers = await this.customersRepository.listAllCustomers();

    return customers;
  }
}

export { GetAllCustomersUseCase };
