import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend URL
  app.enableCors({
    origin: 'http://localhost:3000', // React app runs on this port
  });

  await app.listen(3003); // Your backend runs on this port
}
bootstrap();
