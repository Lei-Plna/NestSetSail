import { Inject, Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/Article';
import { PrismaService } from './prisma/prisma.service';
import { CreateUserDto } from './dto/User';
import { omit } from './util/object-operation';

@Injectable()
export class AppService {
  @Inject(PrismaService)
  prisma: PrismaService;

  getHello(): string {
    return 'Hello World!';
  }

  async createArticle(articleDto: CreateArticleDto) {
    const article = await this.prisma.article.create({
      data: articleDto,
    });

    return article;
  }

  async createUser(user: CreateUserDto) {
    const createUserDto = omit(user, 'password_confirm');
    const newUser = await this.prisma.user.create({
      data: createUserDto,
    });

    return newUser;
  }
}
