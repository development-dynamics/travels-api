import { Module } from '@nestjs/common';
import { UserService } from '../domain/services/users.service';
import { UsersController } from './http-server/controllers/users.controller';
import { PrismaModule } from 'src/shared/infraestructure/prisma/prisma.module';

@Module({
  controllers: [UsersController],
  providers: [UserService],
  exports: [UserService],
  imports: [PrismaModule],
})
export class UsersModule {}
