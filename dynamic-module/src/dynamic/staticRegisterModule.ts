import { DynamicModule, Module } from '@nestjs/common';
import { DynamicService } from './dynamic.service';

// symbol to stand for the module itself
@Module({})
export class StaticDynamicModule {
  /**
   * static function to register the module
   * you can define the providers and exports here
   * also you can define the module whether it is global or not
   * @returns
   */
  static register(): DynamicModule {
    return {
      module: StaticDynamicModule,
      providers: [DynamicService],
      exports: [DynamicService],
      global: true,
    };
  }
}
