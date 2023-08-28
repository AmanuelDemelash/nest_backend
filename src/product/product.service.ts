import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {


     allProduct():string{
        return "all products"
        
    }

}
