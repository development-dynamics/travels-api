import { UserServiceInterface } from '../ports/inbound/user.service.interface'
import { User } from '../../domain/models/user.entity'
import { Inject, Injectable } from '@nestjs/common'
import { UserRepositoryInterface } from '../ports/outbound/user.repository.interface'
import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserDto } from '../dto/update-user.dto'

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.findAll()
  }

  async getUserById(id: number): Promise<User> {
    return await this.userRepository.findById(id)
  }

  async getUserByEmail(email: string): Promise<User> {
    return await this.userRepository.findByEmail(email)
  }

  async createUser(user: CreateUserDto): Promise<User> {
    return await this.userRepository.save(user)
  }

  async updateUser(id: number, user: UpdateUserDto): Promise<User> {
    return await this.userRepository.update(id, user)
  }

  async deleteUser(id: number): Promise<void> {
    return await this.userRepository.delete(id)
  }
}
