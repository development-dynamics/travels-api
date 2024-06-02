import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Inject,
  Patch,
} from '@nestjs/common'
import { Public } from 'src/auth/strategies/public.strategy'
import { Client } from 'src/clients/domain/models//client.entity'
import { ClientServiceInterface } from 'src/clients/application/ports/inbound/client.service.interface'

@Controller('clients')
export class ClientController {
  constructor(
    @Inject('ClientServiceInterface')
    private readonly clientService: ClientServiceInterface,
  ) {}

  @Public()
  @Get()
  async findAll(): Promise<Client[]> {
    return this.clientService.getClients()
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Client> {
    return this.clientService.getClientById(+id)
  }

  @Public()
  @Post()
  async create(@Body() client: Client): Promise<Client> {
    try{
      return this.clientService.createClient(client)
    } catch(error){
      console.log(error)
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() client: Client,
  ): Promise<Client> {
    return this.clientService.updateClient(+id, client)
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.clientService.deleteClient(+id)
  }
}
