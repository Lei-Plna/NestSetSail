import { ConfigurableModuleBuilder } from '@nestjs/common';

// basic options for the module
interface BaseDynamicModuleOptions {
  baseurl: string;
  host: string;
  username: string;
  password: string;
}

const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } =
  new ConfigurableModuleBuilder<BaseDynamicModuleOptions>()
    .setClassMethodName('forRoot')
    .setExtras(
      {
        isGlobal: true,
      }, // the default value of custom options
      (definition, extras) => ({
        // the custom options will be passed to this function's second argument
        ...definition,
        global: extras.isGlobal,
      }),
    )
    .build();

// the type include the options type and the module class type
type ConfigurableOptionsType = typeof OPTIONS_TYPE;

export {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  ConfigurableOptionsType,
};
