import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: { 
      urls: ['amqp://admin:admin@localhost:5672/local'],
      queue: 'main',
      queueOptions: { 
        durable: false
      },
    },
  });
  await app.listen(() => console.log('Microservice is listening'));
}

bootstrap();