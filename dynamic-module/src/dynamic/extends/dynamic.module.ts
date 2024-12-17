import { Inject, Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './base.dynamic.module';
import { DynamicService } from '../dynamic.service';

// still define the module configuration here
@Module({
  providers: [DynamicService],
  exports: [DynamicService],
})
export class DynamicModule extends ConfigurableModuleClass {}
