import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { GetProductPrice } from './messages/get-product-price.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get_product_price')
  async getProductPrice(@Payload() data: GetProductPrice): Promise<number> {
    return await this.appService.getProductPrice(data.productId);
  }
}
