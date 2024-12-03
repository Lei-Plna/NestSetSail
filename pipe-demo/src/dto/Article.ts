import { IsNotEmpty, Length } from 'class-validator';

export class ArticleDto {}

export class CreateArticleDto {
  @IsNotEmpty({ message: '标题不能为空' })
  title: string;

  @IsNotEmpty({ message: '内容不能为空' })
  @Length(10, 20, { message: '内容长度必须在10到20之间' })
  content: string;
}
