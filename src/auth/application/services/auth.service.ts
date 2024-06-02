import {
  HttpStatus,
  Inject,
  Injectable,
  Req,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { CreateUserDto } from 'src/users/application/dto/create-user.dto'
import { UserService } from 'src/users/application/services/user.service'
import { AuthServiceInterface } from '../ports/inbound/auth.service.interface'
import { INJECT } from 'src/constants'
import { Request } from 'express'
import session from 'express-session'

@Injectable()
export class AuthService implements AuthServiceInterface {
  constructor(
    @Inject(INJECT.USER_SERVICE)
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass) {
    const user = await this.userService.getUserByEmail(email)
    if (user?.password !== pass) {
      throw new UnauthorizedException()
    }
    const payload = { sub: user.id, email: user.email }

    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }

  async signUp(payload: CreateUserDto) {
    const user = await this.userService.createUser(payload)
    return user
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.getUserByEmail(email)
    if (user && user.password === pass) {
      return user
    }
    return null
  }

  async logout(@Req() request: Request): Promise<any> {
    console.log('request.session', (request as any)?.session as session)
    ;((request as any)?.session as session).destroy(() => {
      // session.destroy(() => {
      return {
        message: 'Logout successful',
        statusCode: HttpStatus.OK,
      }
    })
  }
}
