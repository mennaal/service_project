import { NestFactory } from '@nestjs/core';
import { OrderModule } from './order.module';  // Import OrderModule

async function bootstrap() {
  const app = await NestFactory.create(OrderModule);  // Use OrderModule
  await app.listen(process.env.PORT || 3002);  // Use port 3002 or default
}

bootstrap();
