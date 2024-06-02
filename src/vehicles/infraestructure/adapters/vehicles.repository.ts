import { Injectable } from '@nestjs/common'
import { EnhancedPrismaService } from 'src/shared/infraestructure/prisma/prisma.enhance.service'
import { CreateVehicleDto } from 'src/vehicles/application/dto/create-vehicle.dto'
import { UpdateVehicleDto } from 'src/vehicles/application/dto/update-vehicle.dto'
import { VehicleRepositoryInterface } from 'src/vehicles/application/ports/outbound/user.repository.interface'
import { Vehicle } from 'src/vehicles/domain/models/vehicle.entity'

@Injectable()
export class VehicleRepository implements VehicleRepositoryInterface {
  constructor(private readonly db: EnhancedPrismaService) {}

  async findAll(): Promise<Vehicle[]> {
    console.log(await this.db.enhancedPrisma.vehicle.findMany())
    return await this.db.enhancedPrisma.vehicle.findMany()
  }

  async findById(id: number): Promise<Vehicle> {
    return await this.db.enhancedPrisma.vehicle.findUniqueOrThrow({
      where: { id },
    })
  }

  async save(vehicle: CreateVehicleDto): Promise<Vehicle> {
    return await this.db.enhancedPrisma.vehicle.create({ data: vehicle })
  }

  async update(id: number, vehicle: UpdateVehicleDto): Promise<Vehicle> {
    return await this.db.enhancedPrisma.vehicle.update({
      where: { id },
      data: vehicle,
    })
  }

  async delete(id: number): Promise<void> {
    await this.db.enhancedPrisma.vehicle.delete({ where: { id } })
  }
}
