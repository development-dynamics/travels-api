import { Controller } from '@nestjs/common';
import { UserService } from '../../../domain/services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}
}
