import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isConfirmed', async: false })
export class IsConfirmedRule implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments) {
    const propertyKey = args.property;
    const confirmedValue = args.object[`${propertyKey}_confirm`];

    return value === confirmedValue;
  }
}
