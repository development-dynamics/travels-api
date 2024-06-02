import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/shared/infraestructure/prisma/prisma.module'
import { VehicleController } from './adapters/vehicles.controller'
import { VehicleService } from '../application/services/vehicles.service'
import { VehicleRepository } from './adapters/vehicles.repository'
import { INJECT } from 'src/constants'

@Module({
  controllers: [VehicleController],
  providers: [
    {
      provide: INJECT.VEHICLE_SERVICE,
      useClass: VehicleService,
    },
    {
      provide: INJECT.VEHICLE_REPOSITORY,
      useClass: VehicleRepository,
    },
  ],
  imports: [PrismaModule],
  exports: [INJECT.VEHICLE_SERVICE],
})
export class VehiclesModule {}
