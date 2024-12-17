import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamicService } from './dynamic/dynamic.service';
import { StaticDynamicModule } from './dynamic/staticRegisterModule';
import { DynamicModule } from './dynamic/extends/dynamic.module';

@Module({
  imports: [
    /* StaticDynamicModule.register() */ DynamicModule.forRoot({
      username: 'admin',
      baseurl: 'localhost',
      host: '3000',
      password: 'password$',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
