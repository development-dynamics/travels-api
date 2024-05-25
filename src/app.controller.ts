import { Controller, Get } from '@nestjs/common'
import { Public } from './auth/strategies/public.strategy'

@Controller()
export class AppController {
  @Public()
  @Get()
  getHello(): string {
    return 'Hello World!'
  }
}
