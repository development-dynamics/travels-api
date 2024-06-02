import { Role } from '@prisma/client'
import { IsBoolean, IsEnum, IsString, Length } from 'class-validator'

export class CreateUserDto {
  @IsString()
  username: string
  @IsString()
  email: string
  @IsString()
  password: string
  @IsString()
  @Length(10)
  dni: string
  @IsString()
  firstName: string
  @IsString()
  lastName: string
  @IsString()
  phone: string
  @IsEnum(Role)
  role: Role
  @IsString()
  userType: string
  @IsBoolean()
  isActive: boolean
}
