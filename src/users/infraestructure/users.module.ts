import { Module } from '@nestjs/common';
import { UserController } from './adapters/user.controller';
import { UserService } from '../application/services/user.service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'UserServiceInterface',
      useClass: UserService,
    },
  ],
})
export class UsersModule {}
