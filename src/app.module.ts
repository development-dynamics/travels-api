import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/infraestructure/users.module'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/infraestructure/auth.module'
import { ClsModule, ClsService } from 'nestjs-cls'
import { ZenStackModule } from '@zenstackhq/server/nestjs'
import { PrismaService } from './shared/infraestructure/prisma/prisma.service'
import { enhance } from '@zenstackhq/runtime'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { AuthInterceptor } from './auth/infraestructure/interceptors/auth.interceptors'
import { ClientsModule } from './clients/infraestructure/client.module'

@Module({
  imports: [
    UsersModule,
    ClientsModule,
    ConfigModule.forRoot(),
    AuthModule,
    ClsModule.forRoot({
      global: true,
      middleware: {
        mount: true,
      },
    }),
    ZenStackModule.registerAsync({
      useFactory: (prisma: PrismaService, cls: ClsService) => {
        return {
          getEnhancedPrisma: () =>
            enhance(prisma, { user: cls.get('auth') }, { kinds: ['delegate'] }),
        }
      },
      inject: [PrismaService, ClsService],
      extraProviders: [PrismaService],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    { provide: APP_INTERCEPTOR, useClass: AuthInterceptor },
  ],
  exports: [PrismaService],
})
export class AppModule {}
