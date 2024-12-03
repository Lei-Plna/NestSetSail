import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateArticleDto } from './dto/Article';
import { CreateUserDto } from './dto/User';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('article')
  createArticle(@Body() articleDto: CreateArticleDto) {
    return this.appService.createArticle(articleDto);
  }

  @Post('user')
  createUser(@Body() user: CreateUserDto) {
    return this.appService.createUser(user);
  }
}
