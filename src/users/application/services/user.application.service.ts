import { UserService } from 'src/users/domain/ports/inbound/i-user.service';
import { UserApplication } from '../user.application';
import { User } from 'src/users/domain/entities/user.entity';

export class UserApplicationService implements UserApplication {
  constructor(private readonly service: UserService) {}

  async findById(id: number): Promise<User> {
    return await this.service.findById(id);
  }

  async findAll(): Promise<User[]> {
    return await this.service.findAll();
  }

  async update(user: User): Promise<User> {
    return await this.service.update(user);
  }

  async create(user: User): Promise<User> {
    return await this.service.create(user);
  }

  async delete(id: number): Promise<boolean> {
    return await this.service.delete(id);
  }
}
