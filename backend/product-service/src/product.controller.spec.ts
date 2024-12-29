import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

describe('ProductController', () => {
  let productController: ProductController;
  let productService: ProductService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    productController = app.get<ProductController>(ProductController);
    productService = app.get<ProductService>(ProductService);
  });

  describe('create', () => {
    it('should create a product', async () => {
      const product = { name: 'Test Product', price: 100 };
      jest.spyOn(productService, 'createProduct').mockResolvedValue(product);

      expect(await productController.create(product)).toBe(product);
    });
  });

  describe('findAll', () => {
    it('should return all products', async () => {
      const products = [{ name: 'Test Product 1', price: 100 }];
      jest.spyOn(productService, 'getAllProducts').mockResolvedValue(products);

      expect(await productController.findAll()).toBe(products);
    });
  });
});
