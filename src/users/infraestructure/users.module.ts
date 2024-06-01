import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/shared/infraestructure/prisma/prisma.module'
import { UserController } from './adapters/user.controller'
import { UserService } from '../application/services/user.service'
import { UserRepository } from './adapters/user.repository'

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'UserServiceInterface',
      useClass: UserService,
    },
    {
      provide: 'UserRepositoryInterface',
      useClass: UserRepository,
    },
  ],
  imports: [PrismaModule],
  exports: ['UserServiceInterface'],
})
export class UsersModule {}
