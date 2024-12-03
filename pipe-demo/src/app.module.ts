import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { AppValidationPipe } from './app.pipe';
import { BadRequestExceptionFilter } from './badRequestException.filter';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: AppValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: BadRequestExceptionFilter,
    },
  ],
})
export class AppModule {}
