import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

type Falsy = '' | undefined | null | false | 0;

@Injectable()
export class LoginGuard implements CanActivate {
  @Inject(Reflector)
  private reflector: Reflector;

  canActivate(context: ExecutionContext) {
    const controller = context.getClass();
    const roles = this.reflector.get<string[] | Falsy>('roles', controller);

    const request: Request = context.switchToHttp().getRequest();
    const user = request.header['Authorization'];

    return !!roles ? roles.includes(user) : true;
  }
}
