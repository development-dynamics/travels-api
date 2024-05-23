import { User } from '../../entities/user.entity';

export interface UserService {
  findById(id: number): Promise<User>;
  findAll(): Promise<User[]>;
  update(id: number, user: User): Promise<User>;
  create(user: User): Promise<User>;
  delete(id: number): Promise<boolean>;
}
