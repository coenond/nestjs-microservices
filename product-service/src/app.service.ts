import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getProductPrice(id: number): Promise<number> {
    console.log(`message consumed for product ${id}`);
    return 5.95;
  }
}
