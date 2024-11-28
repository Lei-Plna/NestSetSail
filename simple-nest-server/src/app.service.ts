import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  formatMessage(message: string): string {
    return `You sent the message: ${message}`;
  }
}
