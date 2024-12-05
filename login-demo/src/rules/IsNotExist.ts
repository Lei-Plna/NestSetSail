import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@ValidatorConstraint({ name: 'isNotExist', async: true })
export class IsNotExist implements ValidatorConstraintInterface {
  async validate(value: any, validationArguments?: ValidationArguments) {
    const [tableName] = validationArguments.constraints;
    const result = await prisma[tableName as string].findFirst({
      where: {
        [validationArguments.property]: value,
      },
    });
    return !result;
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return `${validationArguments.property} 已存在`;
  }
}
