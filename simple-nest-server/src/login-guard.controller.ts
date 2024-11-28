import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LoginGuardService } from './login-guard.service';
import { User } from './dtos/User';
import { LoginGuard } from './login-guard.guard';

@Controller('user')
export class LoginGuardController {
  constructor(private readonly loginGuardService: LoginGuardService) {}

  @Post('login')
  @UseGuards(LoginGuard)
  login(@Body() userInfo: User) {}
}
