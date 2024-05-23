import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserApplicationService } from 'src/users/application/services/user.application.service';
import { CreateUserRequest } from '../dtos/create-user.request';
import { UpdateUserRequest } from '../dtos/update-user.request';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userApplicationService: UserApplicationService,
  ) {}

  @Get()
  async findAll() {
    try {
      return await this.userApplicationService.findAll();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    try {
      return await this.userApplicationService.findById(+id);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Post()
  async create(@Body() createUser: CreateUserRequest) {
    try {
      return await this.userApplicationService.create(createUser);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() createUser: UpdateUserRequest) {
    return await this.userApplicationService.update(+id, createUser);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.userApplicationService.delete(+id);
  }
}
