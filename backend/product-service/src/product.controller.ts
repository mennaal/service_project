import { Controller, Get, Post, Param ,Body , Delete , Put} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.schema';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() product: Product) {
    return this.productService.createProduct(product);
  }

  @Get()
  async findAll() {
    return this.productService.getAllProducts();
  }
  
  @Get(':id')
async findOne(@Param('id') id: string): Promise<Product> {
  return this.productService.findById(id);
}

@Delete(':id')
async delete(@Param('id') id: string): Promise<{ message: string }> {
  await this.productService.delete(id);
  return { message: 'Product deleted successfully' };
}

@Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: CreateProductDto, // Use CreateProductDto
  ) {
    return this.productService.update(id, updateProductDto);
  }


}
