import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto, RegisterUserDto } from 'src/dto/user';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() userDto: RegisterUserDto) {
    return this.authService.register(userDto);
  }

  @Post('login')
  async login(@Body() userDto: LoginUserDto) {
    return this.authService.login(userDto);
  }
}
