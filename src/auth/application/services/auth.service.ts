import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { CreateUserDto } from 'src/users/application/dto/create-user.dto'
import { UserService } from 'src/users/application/services/user.service'
import { AuthServiceInterface } from '../ports/inbound/auth.service.interface'

@Injectable()
export class AuthService implements AuthServiceInterface {
  constructor(
    @Inject('UserServiceInterface')
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
}
