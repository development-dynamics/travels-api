import { Injectable } from '@nestjs/common'
import { MapperService } from 'src/shared/application/services/mapper.service'
import { PrismaService } from 'src/shared/infraestructure/prisma/prisma.service'
import { VehicleRepositoryInterface } from 'src/vehicles/application/ports/outbound/user.repository.interface'
import { Vehicle } from 'src/vehicles/domain/models/vehicle.entity'

@Injectable()
export class VehicleRepository implements VehicleRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Vehicle[]> {
    return (await this.prisma.vehicle.findMany()).map((vehicle) =>
      MapperService.mapPrismaToDomain(vehicle, Vehicle),
    )
  }

  async findById(id: number): Promise<Vehicle> {
    return MapperService.mapPrismaToDomain(
      await this.prisma.vehicle.findUniqueOrThrow({ where: { id } }),
      Vehicle,
    )
  }

  async save(vehicle: Vehicle): Promise<Vehicle> {
    return MapperService.mapPrismaToDomain(
      await this.prisma.vehicle.create({ data: vehicle }),
      Vehicle,
    )
  }

  async update(id: number, vehicle: Vehicle): Promise<Vehicle> {
    return MapperService.mapPrismaToDomain(
      await this.prisma.vehicle.update({ where: { id }, data: vehicle }),
      Vehicle,
    )
  }

  async delete(id: number): Promise<void> {
    await await this.prisma.vehicle.delete({ where: { id } })
  }
}
