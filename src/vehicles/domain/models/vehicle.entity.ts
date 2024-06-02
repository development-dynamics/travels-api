import { VehicleStatusEnum } from '../enums/VehicleStatusEnum'

export class Vehicle {
  id: number

  plate: string

  model: string

  brand: string

  weightCapacity: number

  color: string

  km: number

  volumeCapacity: number

  passengersCapacity: number

  status: VehicleStatusEnum
}
