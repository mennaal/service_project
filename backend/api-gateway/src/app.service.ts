import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'E-commerce API Gateway Service is running!';
  }
}
