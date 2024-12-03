import { ValidationError, ValidationPipe } from '@nestjs/common';

export class AppValidationPipe extends ValidationPipe {
  protected mapChildrenToValidationErrors(
    error: ValidationError,
    parentPath?: string,
  ): ValidationError[] {
    const errors = super.mapChildrenToValidationErrors(error, parentPath);

    // console.log(errors);

    return errors.map((error) => {
      const constraints = error.constraints;

      if (constraints) {
        Object.keys(constraints).forEach((key) => {
          constraints[key] = `${key}: ${constraints[key]}`;
        });
      }

      return error;
    });
  }
}
