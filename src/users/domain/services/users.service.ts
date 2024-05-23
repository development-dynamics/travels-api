import { Inject } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserService } from '../ports/inbound/i-user.service';
import { UserRepository } from '../ports/outbound/i-user.repository';

export class UserDomainService implements UserService {
  constructor(
    @Inject('UserRepository')
    private readonly repository: UserRepository,
  ) {}

  async findById(id: number): Promise<User> {
    return await this.repository.findById(id);
  }

  async findAll(): Promise<User[]> {
    return await this.repository.findAll();
  }
  async update(id: number, user: User): Promise<User> {
    return await this.repository.update(id, user);
  }
  async create(user: User): Promise<User> {
    return await this.repository.create(user);
  }
  async delete(id: number): Promise<boolean> {
    return await this.repository.delete(id);
  }

  // Validations goes here
}
