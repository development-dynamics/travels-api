import { IsNumber, IsString } from 'class-validator'
import { VehicleStatusEnum } from 'src/vehicles/domain/enums/VehicleStatusEnum'

export class CreateVehicleDto {
  @IsString()
  plate: string
  @IsString()
  model: string
  @IsString()
  brand: string
  @IsNumber()
  weightCapacity: number
  @IsString()
  color: string
  @IsNumber()
  km: number
  @IsNumber()
  volumeCapacity: number
  @IsNumber()
  passengersCapacity: number
  @IsString()
  status: VehicleStatusEnum
}
