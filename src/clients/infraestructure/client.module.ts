import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/shared/infraestructure/prisma/prisma.module'
import { ClientController } from './adapters/client.controller'
import { ClientService } from '../application/services/client.service'
import { ClientRepository } from './adapters/client.repository'
import { EnhancedPrismaService } from 'src/shared/infraestructure/prisma/prisma.enhance.service'

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
    {
      provide: 'EnhancedPrismaService',
      useClass: EnhancedPrismaService,
    },
  ],
  imports: [PrismaModule],
  exports: ['ClientServiceInterface'],
})
export class ClientsModule {}
