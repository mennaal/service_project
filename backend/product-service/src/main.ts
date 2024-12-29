import { NestFactory } from '@nestjs/core';
import { ProductModule } from './product.module';  // Import ProductModule

async function bootstrap() {
  const app = await NestFactory.create(ProductModule);  // Use ProductModule
  await app.listen(process.env.PORT || 3001);  // Use port 3001 or default
}

bootstrap();
