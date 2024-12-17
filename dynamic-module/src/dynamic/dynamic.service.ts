import { Injectable } from '@nestjs/common';

@Injectable()
export class DynamicService {
  getHello(): string {
    return 'Hello from dynamic service!';
  }
}
