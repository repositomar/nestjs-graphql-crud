import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';

export const DataBaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  async useFactory(configService: ConfigService) {
    const dbConfig = {
      type: 'mysql',
      host: configService.get<string>('db.mysql.host'),
      port: configService.get<string>('db.mysql.port'),
      username: configService.get<string>('db.mysql.username'),
      password: configService.get<string>('db.mysql.password'),
      database: configService.get<string>('db.mysql.database'),
      autoLoadEntities: true,
      synchronize: true,
    } as ConnectOptions;

    return dbConfig;
  },
});
