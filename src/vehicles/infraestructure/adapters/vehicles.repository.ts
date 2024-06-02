import { Inject, Injectable } from '@nestjs/common'
import { enhance } from '@zenstackhq/runtime'
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs'
import { ClsService } from 'nestjs-cls'
import { PrismaService } from 'src/shared/infraestructure/prisma/prisma.service'
import { CreateVehicleDto } from 'src/vehicles/application/dto/create-vehicle.dto'
import { UpdateVehicleDto } from 'src/vehicles/application/dto/update-vehicle.dto'
import { VehicleRepositoryInterface } from 'src/vehicles/application/ports/outbound/user.repository.interface'
import { Vehicle } from 'src/vehicles/domain/models/vehicle.entity'

@Injectable()
export class VehicleRepository implements VehicleRepositoryInterface {
  constructor(
    @Inject(ENHANCED_PRISMA)
    private readonly prisma: PrismaService,
    private readonly clsService: ClsService,
  ) {}

  private get enhancedPrisma() {
    return enhance(this.prisma, { user: this.clsService.get('auth') })
  }

  async findAll(): Promise<Vehicle[]> {
    return await this.enhancedPrisma.vehicle.findMany()
  }

  async findById(id: number): Promise<Vehicle> {
    return await this.enhancedPrisma.vehicle.findUniqueOrThrow({
      where: { id },
    })
  }

  async save(vehicle: CreateVehicleDto): Promise<Vehicle> {
    return await this.enhancedPrisma.vehicle.create({ data: vehicle })
  }

  async update(id: number, vehicle: UpdateVehicleDto): Promise<Vehicle> {
    return await this.enhancedPrisma.vehicle.update({
      where: { id },
      data: vehicle,
    })
  }

  async delete(id: number): Promise<void> {
    await this.prisma.vehicle.delete({ where: { id } })
  }
}
