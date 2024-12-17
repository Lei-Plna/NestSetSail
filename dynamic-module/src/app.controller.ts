import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { DynamicService } from './dynamic/dynamic.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(DynamicService)
  dynamicService: DynamicService;

  @Get()
  getHello(): string {
    return this.dynamicService.getHello();
  }
}
