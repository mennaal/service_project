import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.schema';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() order: Order) {
    return this.orderService.createOrder(order);
  }

  @Get()
  findAll() {
    return this.orderService.getAllOrders();
  }
}
