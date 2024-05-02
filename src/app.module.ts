import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import configuration from './config/configuration';
import { UsersModule } from './users/users.module';
import { DataBaseModule } from './database/data-base.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      cache: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      formatError: (err) => ({
        message: err.message,
        status: err.extensions.code,
      }),
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    DataBaseModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
