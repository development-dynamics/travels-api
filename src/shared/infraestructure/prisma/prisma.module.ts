import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs'

@Module({
  providers: [
    PrismaService,
    {
      provide: ENHANCED_PRISMA,
      useFactory: (prisma: PrismaService) => {
        return prisma
      },
      inject: [PrismaService],
    },
  ],
  exports: [PrismaService, ENHANCED_PRISMA],
})
export class PrismaModule {}
