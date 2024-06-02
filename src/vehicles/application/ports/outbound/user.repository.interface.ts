import { Vehicle } from 'src/vehicles/domain/models/vehicle.entity'
import { CreateVehicleDto } from '../../dto/create-vehicle.dto'

export interface VehicleRepositoryInterface {
  findAll(): Promise<Vehicle[]>
  findById(id: number): Promise<Vehicle>
  save(vehicle: CreateVehicleDto): Promise<Vehicle>
  update(id: number, vehicle: CreateVehicleDto): Promise<Vehicle>
  delete(id: number): Promise<void>
}
