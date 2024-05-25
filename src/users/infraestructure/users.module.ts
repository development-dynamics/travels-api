import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/infraestructure/prisma/prisma.module';
import { UserController } from './adapters/user.controller';
import { UserService } from '../application/services/user.service';
import { UserRepository } from './adapters/user.repository';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'UserServiceInterface',
      useClass: UserService,
    },
  ],
  imports: [PrismaModule],
})
export class UsersModule {}
