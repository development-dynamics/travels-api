import { Vehicle } from 'src/vehicles/domain/models/vehicle.entity'
import { CreateVehicleDto } from '../../dto/create-vehicle.dto'

export interface VehicleServiceInterface {
  createVehicle(vehicle: CreateVehicleDto): Promise<Vehicle>
  getVehicleById(id: number): Promise<Vehicle>
  getVehicles(): Promise<Vehicle[]>
  updateVehicle(id: number, vehicle: CreateVehicleDto): Promise<Vehicle>
  deleteVehicle(id: number): Promise<void>
}
