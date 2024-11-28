import { ExistingProvider, FactoryProvider, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExternalServiceService } from './external-service.service';
import { GLOBAL_APP_SERVICE } from './global';

const configProvider: FactoryProvider = {
  provide: 'config',
  useFactory: () => ({ apiUrl: 'http://localhost:3000', timeout: 3000 }),
};

const dataBaseDiffByEnvProvider: FactoryProvider = {
  provide: 'DATABASE_CONNECTION',
  useFactory: async () => {
    const mockConnectDatabase = () =>
      new Promise((resolve) => setTimeout(resolve, 3000));

    await mockConnectDatabase();

    if (process.env.NODE_ENV === 'development') {
      return 'DATABASE_CONNECTION_DEVELOPMENT';
    }
    return 'DATABASE_CONNECTION_PRODUCTION';
  },
};

const injectProvider: FactoryProvider = {
  provide: 'inject',
  useFactory: (appService: AppService) => {
    return appService.getHello();
  },
  inject: [GLOBAL_APP_SERVICE],
};

const existingProvider: ExistingProvider = {
  provide: 'APP_SERVICE',
  useExisting: 'GLOBAL_APP_SERVICE',
};

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: GLOBAL_APP_SERVICE,
      useClass: AppService,
    },
    {
      provide: 'GLOBAL_APP_KEY',
      useValue: 'This is a global app key',
    },
    configProvider,
    dataBaseDiffByEnvProvider,
    injectProvider,
    existingProvider,
    ExternalServiceService,
  ],
})
export class AppModule {}
