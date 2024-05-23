import { UserService } from 'src/users/domain/ports/inbound/i-user.service';
import { UserApplication } from '../user.application';
import { User } from 'src/users/domain/entities/user.entity';
import { CreateUserRequest } from 'src/users/infraestructure/http-server/dtos/create-user.request';
import { UpdateUserRequest } from 'src/users/infraestructure/http-server/dtos/update-user.request';

export class UserApplicationService implements UserApplication {
  constructor(private readonly service: UserService) {}

  async findById(id: number): Promise<User> {
    return await this.service.findById(id);
  }

  async findAll(): Promise<User[]> {
    return await this.service.findAll();
  }

  async update(id: number, user: UpdateUserRequest): Promise<User> {
    return await this.service.update(id, User.prepareUpdate(user));
  }

  async create(user: CreateUserRequest): Promise<User> {
    return await this.service.create(User.prepare(user));
  }

  async delete(id: number): Promise<boolean> {
    return await this.service.delete(id);
  }
}
