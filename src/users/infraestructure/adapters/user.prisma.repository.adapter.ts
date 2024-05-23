import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/infraestructure/prisma/prisma.service';
import { User } from 'src/users/domain/entities/user.entity';
import { UserRepository } from 'src/users/domain/ports/outbound/i-user.repository';

@Injectable()
export class UserPrismaRepositoryAdapter implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: number): Promise<User> {
    const userFound = await this.prisma.user.findUnique({ where: { id } });
    if (!userFound) {
      return null;
    }
    return User.create(userFound);
  }

  async findAll(): Promise<User[]> {
    return (await this.prisma.user.findMany()).map(User.create);
  }

  async update(id: number, user: User): Promise<User> {
    return User.create(
      await this.prisma.user.update({
        where: { id },
        data: {
          username: user.username,
          email: user.email,
          password: user.password,
          dni: user.dni,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
          isActive: user.isActive,
        },
      }),
    );
  }

  async create(user: User): Promise<User> {
    return User.create(await this.prisma.user.create({ data: user }));
  }

  async delete(id: number): Promise<boolean> {
    await this.prisma.user.delete({ where: { id } });
    return true;
  }
}
