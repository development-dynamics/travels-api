import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/shared/infraestructure/prisma/prisma.module'
import { UserController } from './adapters/user.controller'
import { UserService } from '../application/services/user.service'
import { UserRepository } from './adapters/user.repository'
import { ZenStackModule } from '@zenstackhq/server/nestjs'

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
  imports: [PrismaModule, ZenStackModule],
  exports: ['UserServiceInterface'],
})
export class UsersModule {}
