# Dynamic Module Definition

## Introduction

Sometime we want to define a module dynamically with different options for different environments or modules. This is where dynamic module definition comes in. We can define a module dynamically based on the environment or module.

## How to define a Dynamic Module

We can define a dynamic module with two ways here

### 1. Using `Static` method

```ts
import { Module, type DynamicModule } from '@nestjs/common';

@Module({})
export class DynamicModule {
  static forRoot(options: unknown): DynamicModule {
    return {
      module: DynamicModule,
      providers: [
        {
          provide: 'OPTIONS',
          useValue: options,
        },
      ],
      // isGlobal: true,
      // ...other options
    };
  }
}
```

### 2. Using `ConfigurableModuleBuilder` builder

```ts
import { ConfigurableModuleBuilder } from '@nestjs/common';
interface DynamicModuleOptions {
  // ... some options
}

const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } =
  new ConfigurableModuleBuilder<DynamicModuleOptions>()
    // define the register function name
    .setClassMethodName('forRoot')
    .setExtras(
      {
        // ... some extra options with default values
      },
      (definition, extras) => {
        // do something
        return definition;
      },
    )
    .build();

export class DynamicModule extends ConfigurableModuleClass {}
```
