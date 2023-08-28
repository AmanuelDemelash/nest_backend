import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AppService } from 'src/app.service';
import { ProductModule } from 'src/product/product.module';
import { ProductService } from 'src/product/product.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
}
