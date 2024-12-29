import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as path from 'path';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductSchema } from './product.schema';

@Module({
  imports: [
    // Load environment variables from .env file
    ConfigModule.forRoot({
      isGlobal: true,  // Makes the config globally available
      envFilePath: path.resolve(__dirname, '..', '.env'),  // Path to the .env file
    }),
    // Connect to MongoDB using MONGO_URI from .env
    MongooseModule.forRoot(process.env.MONGO_URI),  // Using the MONGO_URI from the environment
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
