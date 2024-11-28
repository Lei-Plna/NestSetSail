import { Module } from '@nestjs/common';
import { LoginGuardController } from './login-guard.controller';
import { LoginGuardService } from './login-guard.service';

@Module({
  controllers: [LoginGuardController],
  providers: [LoginGuardService],
})
export class LoginGuardModule {}
