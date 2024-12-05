import { IsNotEmpty, IsOptional, Validate } from 'class-validator';
import { IsNotExist } from 'src/rules/IsNotExist';
import { PartialType, PickType } from '@nestjs/swagger';

export class RegisterUserDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @Validate(IsNotExist, ['user'], { message: '用户名已存在' })
  name: string;

  @IsNotEmpty({ message: '密码不能为空' })
  password: string;
}

export class LoginUserDto extends PickType(RegisterUserDto, ['password']) {
  @IsNotEmpty({ message: '用户名不能为空' })
  name: string;
}
