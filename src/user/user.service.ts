import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return this.users.push(createUserDto);
  }

    private readonly users:CreateUserDto[]=[
      {
        id:1,
        name:"Aman",

      },
      {
        id:2,
        name:"kiru",
        
      }
    ]

  findAll(name:string) {
    if(name){
      const user=this.users.find((user)=>user.name===name);
      if(!user){
        return {
          "error":"user not found"
        };
      }
      return user;
    }
    return this.users;
  }

  findOne(id: number) {
    const user=this.users.find((user)=>user.id==id)
    if(!user){
      throw new Error("user not found");
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return "removed";
  }
}
