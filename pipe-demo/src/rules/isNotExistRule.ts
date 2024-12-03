import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function IsNotExistRule(
  table: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'isNotExistRule',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [table],
      options: validationOptions,
      validator: {
        async validate(value: any, args: ValidationArguments) {
          // get table name from constraints to avoid closure performance lost
          const table: string = args.constraints[0];
          const found = await prisma[table].findFirst({
            where: {
              [propertyName]: value,
            },
          });
          return !found;
        },
      },
    });
  };
}
