import { Client } from '../../domain/models/client.entity'
import { Inject, Injectable } from '@nestjs/common'
import { ClientServiceInterface } from '../ports/inbound/client.service.interface'
import { ClientRepositoryInterface } from '../ports/outbound/client.repository.interface'

@Injectable()
export class ClientService implements ClientServiceInterface {
  constructor(
    @Inject('ClientRepositoryInterface')
    private readonly clientRepository: ClientRepositoryInterface,
  ) {}

  async getClients(): Promise<Client[]> {
    return await this.clientRepository.findAll()
  }

  async getClientById(id: number): Promise<Client> {
    return await this.clientRepository.findById(id)
  }

  async getClientByEmail(email: string): Promise<Client> {
    return await this.clientRepository.findByEmail(email)
  }

  async createClient(client: Client): Promise<Client> {
    return await this.clientRepository.save(client)
  }

  async updateClient(id: number, client: Client): Promise<Client> {
    return await this.clientRepository.update(id, client)
  }

  async deleteClient(id: number): Promise<void> {
    return await this.clientRepository.delete(id)
  }
}
