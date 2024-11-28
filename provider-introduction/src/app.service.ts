import { Inject, Injectable } from '@nestjs/common';
import { ExternalServiceService } from './external-service.service';

@Injectable()
export class AppService {
  // @Inject(ExternalServiceService)
  // private externalServiceService: ExternalServiceService;

  constructor(
    private readonly externalServiceService: ExternalServiceService,
  ) {}

  getHello(): string {
    return this.externalServiceService.getHello();
  }
}
