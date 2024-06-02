import { Client } from '../../../domain/models/client.entity'

export interface ClientRepositoryInterface {
  findAll(): Promise<Client[]>
  findById(id: number): Promise<Client>
  findByEmail(email: string): Promise<Client>
  save(user: Client): Promise<Client>
  update(id: number, client: Client): Promise<Client>
  delete(id: number): Promise<void>
}
