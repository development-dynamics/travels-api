import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Req,
} from '@nestjs/common'
import { AuthService } from '../../application/services/auth.service'
import { CreateUserDto } from 'src/users/application/dto/create-user.dto'
import { Public } from '../../strategies/public.strategy'
import { SignInDto } from '../../application/dto/sign-in.dto'
import { LocalGuard } from 'src/auth/guards/local.guard'
import { Request } from 'express'
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalGuard)
  @Post('login')
  //   @ApiOperation({ summary: "User Login" })
  //   @ApiResponse({
  //     status: 200,
  //     description: "The record found",
  //     type: [BaseUser],
  //   })
  //   @ApiBody({
  //     type: BaseUser,
  //   })
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password)
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signup')
  //   @ApiOperation({ summary: "User Signup" })
  //   @ApiResponse({
  //     status: 200,
  //     description: "The record found",
  //     type: [BaseUser],
  //   })
  //   @ApiBody({
  //     type: BaseUser,
  //   })
  signUp(@Body() signUpDto: CreateUserDto) {
    return this.authService.signUp(signUpDto)
  }

  @Public()
  @Get('logout')
  logout(@Req() request: Request): Promise<any> {
    return this.authService.logout(request)
  }
}
