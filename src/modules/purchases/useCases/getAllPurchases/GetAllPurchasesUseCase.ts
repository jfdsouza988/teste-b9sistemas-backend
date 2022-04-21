import { inject, injectable } from 'tsyringe';
import { IPurchasesRepository } from '../../repositories/IPurchasesRepository';

@injectable()
class GetAllPurchasesUseCase {
  constructor(
    @inject('PurchasesRepository')
    private purchasesRepository: IPurchasesRepository,
  ) {}
  async execute() {
    const purchases = await this.purchasesRepository.listAllPurchases();

    return purchases;
  }
}

export { GetAllPurchasesUseCase };
