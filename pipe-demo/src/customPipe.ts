import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class customPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;
    const instance = plainToInstance(metatype, value);

    const errors = await validate(instance);

    if (errors.length) {
      const errorInfo = errors.map((error) => {
        return {
          property: error.property,
          constraints: Object.values(error.constraints),
        };
      });

      throw new BadRequestException(errorInfo);
    }
  }
}
