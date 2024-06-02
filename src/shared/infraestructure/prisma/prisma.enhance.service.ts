import { Injectable } from '@nestjs/common'
import { enhance } from '@zenstackhq/runtime'
import { ClsService } from 'nestjs-cls'
import { PrismaService } from './prisma.service'

@Injectable()
export class EnhancedPrismaService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly clsService: ClsService,
  ) {}

  public get enhancedPrisma() {
    return enhance(this.prismaService, { user: this.clsService.get('user') })
  }
}
