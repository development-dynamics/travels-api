import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Inject,
  Patch,
} from '@nestjs/common'
import { Public } from 'src/auth/strategies/public.strategy'
import { INJECT } from 'src/constants'
import { CreateVehicleDto } from 'src/vehicles/application/dto/create-vehicle.dto'
import { VehicleServiceInterface } from 'src/vehicles/application/ports/inbound/user.service.interface'
import { Vehicle } from 'src/vehicles/domain/models/vehicle.entity'

@Controller('vehicles')
export class VehicleController {
  constructor(
    @Inject(INJECT.VEHICLE_SERVICE)
    private readonly vehicleService: VehicleServiceInterface,
  ) {}

  @Public()
  @Get()
  async findAll(): Promise<Vehicle[]> {
    return this.vehicleService.getVehicles()
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Vehicle> {
    return this.vehicleService.getVehicleById(+id)
  }

  @Post()
  @Public()
  async create(@Body() vehicle: CreateVehicleDto): Promise<Vehicle> {
    return this.vehicleService.createVehicle(vehicle)
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() vehicle: CreateVehicleDto,
  ): Promise<Vehicle> {
    return this.vehicleService.updateVehicle(+id, vehicle)
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.vehicleService.deleteVehicle(+id)
  }
}
