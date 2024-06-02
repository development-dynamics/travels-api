import { Vehicle } from '../../domain/models/vehicle.entity'
import { Inject, Injectable } from '@nestjs/common'
import { CreateVehicleDto } from '../dto/create-vehicle.dto'
import { INJECT } from 'src/constants'
import { VehicleServiceInterface } from '../ports/inbound/user.service.interface'
import { VehicleRepositoryInterface } from '../ports/outbound/user.repository.interface'

@Injectable()
export class VehicleService implements VehicleServiceInterface {
  constructor(
    @Inject(INJECT.VEHICLE_REPOSITORY)
    private readonly vehicleRepository: VehicleRepositoryInterface,
  ) {}

  async getVehicles(): Promise<Vehicle[]> {
    return await this.vehicleRepository.findAll()
  }

  async getVehicleById(id: number): Promise<Vehicle> {
    return await this.vehicleRepository.findById(id)
  }

  async createVehicle(vehicle: CreateVehicleDto): Promise<Vehicle> {
    return await this.vehicleRepository.save(vehicle)
  }

  async updateVehicle(id: number, vehicle: CreateVehicleDto): Promise<Vehicle> {
    return await this.vehicleRepository.update(id, vehicle)
  }

  async deleteVehicle(id: number): Promise<void> {
    return await this.vehicleRepository.delete(id)
  }
}
