import { User } from '../../../domain/models/user.entity';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';

export interface UserRepositoryInterface {
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User>;
  save(user: CreateUserDto): Promise<User>;
  update(id: number, user: UpdateUserDto): Promise<User>;
  delete(id: number): Promise<void>;
}
