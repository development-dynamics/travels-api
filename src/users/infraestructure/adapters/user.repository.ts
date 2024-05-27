import { Inject, Injectable } from '@nestjs/common'
import { UserRepositoryInterface } from '../../application/ports/outbound/user.repository.interface'
import { User } from '../../domain/models/user.entity'
import { PrismaService } from 'src/shared/infraestructure/prisma/prisma.service'
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs'
import { enhance } from '@zenstackhq/runtime'

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(
    @Inject(ENHANCED_PRISMA)
    private readonly prisma: PrismaService,
  ) {}

  db = enhance(this.prisma, { 'user' }, { kinds: ['delegate'] })

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany()
  }

  async findById(id: number): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id } })
  }

  async findByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { email } })
  }

  async save(user: any): Promise<User> {
    return await this.prisma.user.create({ data: user })
  }

  async update(id: number, user: User): Promise<User> {
    return await this.prisma.user.update({ where: { id }, data: user })
  }

  async delete(id: number): Promise<void> {
    await this.prisma.user.delete({ where: { id } })
  }
}
