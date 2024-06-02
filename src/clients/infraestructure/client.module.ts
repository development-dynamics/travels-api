import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/shared/infraestructure/prisma/prisma.module'
import { ClientController } from './adapters/client.controller'
import { ClientService } from '../application/services/client.service'
import { ClientRepository } from './adapters/client.repository'

@Module({
  controllers: [ClientController],
  providers: [
    {
      provide: 'ClientServiceInterface',
      useClass: ClientService,
    },
    {
      provide: 'ClientRepositoryInterface',
      useClass: ClientRepository,
    },
  ],
  imports: [PrismaModule],
  exports: ['ClientServiceInterface'],
})
export class ClientsModule {}
