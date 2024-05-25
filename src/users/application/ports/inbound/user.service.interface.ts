import { User } from '../../../domain/models/user.entity'
import { CreateUserDto } from '../../dto/create-user.dto'
import { UpdateUserDto } from '../../dto/update-user.dto'

export interface UserServiceInterface {
  createUser(user: CreateUserDto): Promise<User>
  getUserById(id: number): Promise<User>
  getUsers(): Promise<User[]>
  updateUser(id: number, user: UpdateUserDto): Promise<User>
  deleteUser(id: number): Promise<void>
}
