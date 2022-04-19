import { Customer } from '@prisma/client';
import { ICreateCustomerDTO } from '../dtos/ICreateCustomerDTO';

interface ICustomersRepository {
  create({ name, cpf }: ICreateCustomerDTO): Promise<Customer>;
  findByCpf(cpf: string): Promise<Customer>;
}

export { ICustomersRepository };
