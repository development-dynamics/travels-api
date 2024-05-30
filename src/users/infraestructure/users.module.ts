import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/shared/infraestructure/prisma/prisma.module'
import { UserController } from './adapters/user.controller'
import { UserService } from '../application/services/user.service'
import { UserRepository } from './adapters/user.repository'
import { INJECT } from 'src/constants'

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: INJECT.USER_SERVICE,
      useClass: UserService,
    },
    {
      provide: INJECT.USER_REPOSITORY,
      useClass: UserRepository,
    },
  ],
  imports: [PrismaModule],
  exports: ['UserServiceInterface'],
})
export class UsersModule {}
