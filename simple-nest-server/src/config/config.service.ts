import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { readdir } from 'fs/promises';
import { resolve } from 'path';

@Injectable()
export class ConfigService implements OnModuleInit {
  private config: Record<string, any>;

  constructor(
    @Inject('CONFIG_PATH') private readonly path: string,
    private readonly logger: Logger,
  ) {}

  async onModuleInit() {
    try {
      const files = await readdir(this.path, { encoding: 'utf-8' });
      const matchRegex = /^(?!.*\.d\.ts$).*\.(j|mj|t|cj)s$/;

      const importPromises = files
        .filter((file) => matchRegex.test(file))
        .map((file) => import(resolve(this.path, file)));

      const modules = await Promise.all(importPromises);

      this.config = modules.reduce((config, module) => {
        // 如果模块是默认导出，使用 module.default
        return { ...config, ...(module.default || module) };
      }, {});
    } catch (error) {
      this.logger.error('配置文件加载失败:', error);
    }
  }

  get<T extends Record<any, any>>(keys: string, splitFlag = '.'): T {
    return keys
      .split(splitFlag)
      .reduce((config, key) => config[key], this.config);
  }
}
