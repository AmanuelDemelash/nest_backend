import { Global, Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Global()
@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
