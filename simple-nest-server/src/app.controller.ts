import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('params/:message')
  getParams(@Param('message') message: string) {
    return this.appService.formatMessage(message);
  }

  @Get('query')
  // It can directly get the exact query parameter from the URL
  getQuery(@Query('message') message: string) {
    return this.appService.formatMessage(message);
  }

  @Get('config/:path')
  getConfig(@Param('path') path: string) {
    return this.configService.get(path);
  }
}
