import { Client } from '../../../domain/models/client.entity'

export interface ClientServiceInterface {
  createClient(client: Client): Promise<Client>
  getClients(): Promise<Client[]>
  getClientById(id: number): Promise<Client>
  updateClient(id: number, client: Client): Promise<Client>
  deleteClient(id: number): Promise<void>
}
