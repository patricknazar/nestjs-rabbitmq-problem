import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from 'user.resolver';
import { clientProvider } from 'clientProvider';
import * as GraphQLJSON from 'graphql-type-json';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: true,
      debug: true,
      installSubscriptionHandlers: true,
      resolvers: { JSON: GraphQLJSON },
    }),
  ],
  controllers: [],
  providers: [
    clientProvider,
    UserResolver,
  ],
})
export class AppModule {}
