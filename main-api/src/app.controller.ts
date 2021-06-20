import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/products/:id')
  async getProduct(@Param('id') id: number): Promise<number> {
    const result: Observable<number> = this.appService.getProduct(id);
    return await result.toPromise();
  }

  @Get('/heavy-task/:amount')
  async doHeavyTask(@Param('amount') amount: number): Promise<string> {
    this.appService.scheduleHeavyTask(amount);
    return `Number of heavy tasks scheduled: ${amount}`;
  }
}
