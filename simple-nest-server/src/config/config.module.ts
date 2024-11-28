import { Logger, Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({})
export class ConfigModule {
  static register(configPath: string) {
    return {
      global: true,
      module: ConfigModule,
      providers: [
        Logger,
        {
          provide: 'CONFIG_PATH',
          useValue: configPath,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}
