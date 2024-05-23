import { User as UserMapper } from '@prisma/client';
import { CreateUserRequest } from 'src/users/infraestructure/http-server/dtos/create-user.request';
import { UpdateUserRequest } from 'src/users/infraestructure/http-server/dtos/update-user.request';

export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  dni: string;
  firstName: string;
  lastName: string;
  phone: string;
  isActive: boolean;

  static create(data: UserMapper): User {
    const user = new User();
    user.id = data.id;
    user.username = data.username;
    user.email = data.email;
    user.password = data.password;
    user.dni = data.dni;
    user.firstName = data.firstName;
    user.lastName = data.lastName;
    user.phone = data.phone;
    user.isActive = data.isActive;
    return user;
  }

  static prepare(data: CreateUserRequest): User {
    const user = new User();
    user.username = data.username;
    user.email = data.email;
    user.password = data.password;
    user.dni = data.dni;
    user.firstName = data.firstName;
    user.lastName = data.lastName;
    user.phone = data.phone;
    return user;
  }

  static prepareUpdate(data: UpdateUserRequest): User {
    const user = new User();
    user.username = data.username ?? undefined;
    user.email = data.email ?? undefined;
    user.password = data.password ?? undefined;
    user.dni = data.dni ?? undefined;
    user.firstName = data.firstName ?? undefined;
    user.lastName = data.lastName ?? undefined;
    user.phone = data.phone ?? undefined;
    return user;
  }
}
