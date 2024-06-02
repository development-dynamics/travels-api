import { Module } from '@nestjs/common'
import { AuthController } from './adapters/auth.controller'
import { AuthService } from '../application/services/auth.service'
import { JwtModule } from '@nestjs/jwt'
import { APP_GUARD } from '@nestjs/core'
import { AuthGuard } from '../guards/auth.guard'
import { UsersModule } from 'src/users/infraestructure/users.module'
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from '../strategies/local.strategy'
import { Session } from '../sessions'

@Module({
  imports: [
    PassportModule.register({ session: true }),
    UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRATION },
    }),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AuthService,
    LocalStrategy,
    Session,
  ],
  exports: [AuthService],
})
export class AuthModule {}
