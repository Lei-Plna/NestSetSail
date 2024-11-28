import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { GLOBAL_APP_SERVICE } from './global';

@Controller()
export class AppController {
  constructor(
    @Inject(GLOBAL_APP_SERVICE) private readonly appService: AppService,
  ) {}

  @Inject('DATABASE_CONNECTION') databaseConnection: string;

  @Inject('inject') inject: string;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('database')
  getDatabaseConnection(): string {
    return this.databaseConnection;
  }

  @Get('inject')
  getInject(): string {
    return this.inject;
  }
}
