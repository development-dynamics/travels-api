import { VehicleStatusEnum } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime/library'

export class Vehicle {
  id: number

  plate: string

  model: string

  brand: string

  weightCapacity: Decimal

  color: string

  km: number

  volumeCapacity: Decimal

  passengersCapacity: number

  status: VehicleStatusEnum
}
