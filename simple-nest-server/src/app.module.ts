import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginGuardModule } from './login-guard.module';
import { ConfigModule } from './config/config.module';
import { resolve } from 'path';

@Module({
  imports: [
    LoginGuardModule,
    ConfigModule.register(resolve(__dirname, './configuration/')),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
