import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { ClsService } from 'nestjs-cls'

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor(private readonly cls: ClsService) {}

  async intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest()
    const userRole = request.headers['x-user-role']
    const userId = request.headers['x-user-id']
    if (userId) {
      this.cls.set('user', { id: +userId, role: userRole })
    }

    // this.cls.set('user', { id: 1, role: 'USER' })
    return next.handle()
  }
}
