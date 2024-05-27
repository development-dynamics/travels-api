import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { enhance } from '@zenstackhq/runtime'
import { PrismaService } from './prisma.service'

@Injectable()
export class EnhancedPrismaService {
  constructor(private readonly prismaService: PrismaService) {}

  private get enhancedPrisma() {
    return enhance(this.prismaService) as unknown as PrismaClient
  }

  get user(): PrismaClient['user'] {
    return this.enhancedPrisma.user
  }
}
