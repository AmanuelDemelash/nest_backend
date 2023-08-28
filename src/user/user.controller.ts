import { Controller, Get, Post, Body, Patch, Param, Delete, Query, NotFoundException, ParseIntPipe, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ProductService } from 'src/product/product.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    
     this.userService.create(createUserDto);
     return "created"
  }

  @Get()
  @UseGuards(BeltGuard)
  findAll(@Query("name") name:string) {
  //  return this.userService.findAll(name);
  return new ProductService().allProduct;
    
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    try{
      return this.userService.findOne(id);

    }catch(err){
     throw new NotFoundException();

    }
   
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
