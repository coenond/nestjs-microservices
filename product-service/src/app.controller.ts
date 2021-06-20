import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { GetProductPrice } from './messages/get-product-price.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get_product_price')
  async getProductPrice(@Payload() data: GetProductPrice): Promise<number> {
    return await this.appService.getProductPrice(data.productId);
  }

  @EventPattern('a_heavy_event')
  async processHeavyWork(@Payload() taskNumber: number): Promise<string> {
    console.log(`Start processing task #${taskNumber}.`);
    await this.appService.heavyStuff();
    console.log(`Task #${taskNumber} done.`);
    return 'done';
  }
}
