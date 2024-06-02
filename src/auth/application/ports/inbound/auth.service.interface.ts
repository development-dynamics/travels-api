import { Request } from 'express'
import { CreateUserDto } from 'src/users/application/dto/create-user.dto'
import { User } from 'src/users/domain/models/user.entity'

export interface AuthServiceInterface {
  signIn(email: string, password: string): Promise<{ access_token: string }>

  signUp(payload: CreateUserDto): Promise<User>

  validateUser(email: string, password: string): Promise<User | null>

  logout(request: Request): Promise<any>
}
