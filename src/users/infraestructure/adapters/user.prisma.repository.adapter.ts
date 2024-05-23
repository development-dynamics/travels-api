import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/infraestructure/prisma/prisma.service';
import { UserRepository } from 'src/users/domain/ports/outbound/i-user.repository';

@Injectable()
export class UserPrismaRepositoryAdapter implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: number) {
    return await this.prisma.user.findUnique({ where: { id } });
  }
}
