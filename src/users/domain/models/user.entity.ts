import { Role } from '@prisma/client'

export class User {
  id: number

  username: string

  email: string

  password: string

  dni: string

  firstName: string

  lastName: string

  phone: string

  userType: string

  role: Role

  isActive: boolean
}
