import { IsNotEmpty, Validate } from 'class-validator';
import { IsConfirmedRule } from 'src/rules/isNotConfirmedRule';
import { IsNotExistRule } from 'src/rules/isNotExistRule';

export class CreateUserDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsNotExistRule('user', { message: '用户名已存在' })
  name: string;
  @IsNotEmpty({ message: '密码不能为空' })
  @Validate(IsConfirmedRule, { message: '两次密码不一致' })
  password: string;
}
