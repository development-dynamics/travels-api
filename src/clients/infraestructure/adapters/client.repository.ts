import { Inject, Injectable } from '@nestjs/common'
import { ClientRepositoryInterface } from '../../application/ports/outbound/client.repository.interface'
import { Client } from '../../domain/models/client.entity'
import { EnhancedPrismaService } from 'src/shared/infraestructure/prisma/prisma.enhance.service'

@Injectable()
export class ClientRepository implements ClientRepositoryInterface {
  constructor(
    @Inject('EnhancedPrismaService')
    private readonly db: EnhancedPrismaService,
  ) {}

  async findAll(): Promise<Client[]> {
    return await this.db.enhancedPrisma.client.findMany()
  }

  async findById(id: number): Promise<Client> {
    return await this.db.enhancedPrisma.client.findUniqueOrThrow({
      where: { id },
    })
  }

  async findByEmail(email: string): Promise<Client> {
    return await this.db.enhancedPrisma.client.findUnique({ where: { email } })
  }

  async save(client: Client): Promise<Client> {
    return await this.db.enhancedPrisma.client.create({ data: client })
  }

  async update(id: number, client: Client): Promise<Client> {
    return await this.db.enhancedPrisma.client.update({
      where: { id },
      data: client,
    })
  }

  async delete(id: number): Promise<void> {
    await this.db.enhancedPrisma.client.delete({ where: { id } })
  }
}
