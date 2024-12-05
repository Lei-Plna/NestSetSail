import { Injectable } from '@nestjs/common';
import { LoginUserDto, RegisterUserDto } from 'src/dto/user';
import { hash } from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(userDto: RegisterUserDto) {
    const encryptedPassword = await hash(userDto.password);
    const user = await this.prisma.user.create({
      data: {
        name: userDto.name,
        password: encryptedPassword,
      },
    });

    // @todo
    delete user.password;
    return user;
  }

  async login(userDto: LoginUserDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        name: userDto.name,
      },
    });

    return !!user;
  }
}
