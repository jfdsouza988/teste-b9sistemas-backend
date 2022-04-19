import { Customer } from '@prisma/client';
import { prisma } from '../../../../database/prismaClients';

import { ICreateCustomerDTO } from '../../dtos/ICreateCustomerDTO';
import { ICustomersRepository } from '../ICustomersRepository';

class CustomersRepository implements ICustomersRepository {
  async create({ name, cpf }: ICreateCustomerDTO): Promise<Customer> {
    const customer = await prisma.customer.create({
      data: { name, cpf },
    });

    return customer;
  }
  async findByCpf(cpf: string): Promise<Customer> {
    const customer = await prisma.customer.findUnique({
      where: {
        cpf,
      },
    });

    return customer;
  }
}

export { CustomersRepository };
