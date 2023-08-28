import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService){}
    //get products
    @Get()
  getProduct(): string {
    return this.productService.allProduct();
  }

  // get single product

  @Get(':id')
  getSingleProduct(@Param('id') id:String){
    return id
  }
    
}

