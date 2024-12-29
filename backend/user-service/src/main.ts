import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';  // Import UserModule

async function bootstrap() {
  const app = await NestFactory.create(UserModule);  // Use UserModule
  await app.listen(process.env.PORT || 3003);  // Use port 3003 or default
}

bootstrap();
