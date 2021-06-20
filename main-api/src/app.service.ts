import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { GetProductPrice } from './messages/get-product-price.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('WEBSHOP_SERVICE') private readonly client: ClientProxy,
  ) { }

  getProduct(id: number): Observable<number> {
    return this.client.send<number>('get_product_price', new GetProductPrice(id));
  }

  scheduleHeavyTask(amount: Number): void {
    for (let i = 1; i <= amount; i++){
      this.client.emit<string>('a_heavy_event', i);
    }
  }
}
