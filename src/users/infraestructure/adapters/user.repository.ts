import { Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '../../application/ports/outbound/user.repository.interface';
import { User } from '../../domain/models/user.entity';
import { PrismaService } from 'src/shared/infraestructure/prisma/prisma.service';

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findById(id: number): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async save(user: User): Promise<User> {
    return await this.prisma.user.create({ data: user });
  }

  async update(id: number, user: User): Promise<User> {
    return await this.prisma.user.update({ where: { id }, data: user });
  }

  async delete(id: number): Promise<void> {
    await await this.prisma.user.delete({ where: { id } });
  }
}
