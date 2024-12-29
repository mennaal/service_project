import { Controller, Get } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';  // Correct import for HttpService

@Controller('gateway')
export class GatewayController {
  constructor(private readonly httpService: HttpService) {}

  @Get('products')
  async getProducts() {
    return this.httpService.get('http://localhost:3001/products').toPromise();  // Example product service endpoint
  }

  @Get('orders')
  async getOrders() {
    return this.httpService.get('http://localhost:3002/orders').toPromise();  // Example order service endpoint
  }

  @Get('users')
  async getUsers() {
    return this.httpService.get('http://localhost:3003/users').toPromise();  // Example user service endpoint
  }
}
