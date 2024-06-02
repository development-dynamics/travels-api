import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs'
import { MapperService } from 'src/shared/application/services/mapper.service'
import { EnhancedPrismaService } from './prisma.enhance.service'

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
    MapperService,
    EnhancedPrismaService,
  ],
  exports: [
    PrismaService,
    ENHANCED_PRISMA,
    MapperService,
    EnhancedPrismaService,
  ],
})
export class PrismaModule {}
