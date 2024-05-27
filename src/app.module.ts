import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/infraestructure/users.module'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/infraestructure/auth.module'

@Module({
  imports: [UsersModule, ConfigModule.forRoot(), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
