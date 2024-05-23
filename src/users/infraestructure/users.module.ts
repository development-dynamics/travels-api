import { Module } from '@nestjs/common';
import { UserDomainService } from '../domain/services/users.service';
import { UsersController } from './http-server/controllers/users.controller';
import { PrismaModule } from 'src/shared/infraestructure/prisma/prisma.module';
import { UserPrismaRepositoryAdapter } from './adapters/user.prisma.repository.adapter';
import { UserApplicationService } from '../application/services/user.application.service';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: 'UserService',
      useFactory: (repository) => new UserDomainService(repository),
      inject: [UserPrismaRepositoryAdapter],
    },
    UserPrismaRepositoryAdapter,
    UserApplicationService,
  ],
  exports: [UserApplicationService],
  imports: [PrismaModule],
})
export class UsersModule {}
