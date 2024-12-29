import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order } from './order.schema';  // Ensure Order is imported correctly

describe('OrderController', () => {
  let orderController: OrderController;
  let orderService: OrderService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [OrderService],
    }).compile();

    orderController = app.get<OrderController>(OrderController);
    orderService = app.get<OrderService>(OrderService);
  });

  describe('create', () => {
    it('should create an order', async () => {
      const order = { productId: '123', quantity: 2 }; // Match the expected input format
      jest.spyOn(orderService, 'createOrder').mockResolvedValue(order); // Mock the service

      expect(await orderController.create(order)).toBe(order); // Ensure the output matches the mock
    });
  });

  describe('findAll', () => {
    it('should return all orders', async () => {
      const orders: Order[] = [{ productId: '123', quantity: 2 }]; // Define a correct structure for your orders
      jest.spyOn(orderService, 'getAllOrders').mockResolvedValue(orders); // Mock the service

      const result = await orderController.findAll();
      expect(result).toEqual(orders); // Use `toEqual` for deep equality check
    });
  });
});
