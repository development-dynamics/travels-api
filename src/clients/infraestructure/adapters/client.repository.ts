import { Inject, Injectable } from '@nestjs/common'
import { ClientRepositoryInterface } from '../../application/ports/outbound/client.repository.interface'
import { Client } from '../../domain/models/client.entity'
import { PrismaService } from 'src/shared/infraestructure/prisma/prisma.service'
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs'
import { enhance } from '@zenstackhq/runtime'
import { ClsService } from 'nestjs-cls'

@Injectable()
export class ClientRepository implements ClientRepositoryInterface {
  constructor(
    @Inject(ENHANCED_PRISMA)
    private readonly prisma: PrismaService,
    private readonly clsService: ClsService,
  ) {}

  private get enhancedPrisma() {
    return enhance(this.prisma, { user: this.clsService.get('auth') })
  }

  async findAll(): Promise<Client[]> {
    return await this.enhancedPrisma.client.findMany()
  }

  async findById(id: number): Promise<Client> {
    return await this.enhancedPrisma.client.findUniqueOrThrow({ where: { id } })
  }

  async findByEmail(email: string): Promise<Client> {
    return await this.enhancedPrisma.client.findUnique({ where: { email } })
  }

  async save(client: Client): Promise<Client> {
    return await this.enhancedPrisma.client.create({ data: client })
  }

  async update(id: number, client: Client): Promise<Client> {
    return await this.enhancedPrisma.client.update({
      where: { id },
      data: client,
    })
  }

  async delete(id: number): Promise<void> {
    await this.enhancedPrisma.client.delete({ where: { id } })
  }
}
