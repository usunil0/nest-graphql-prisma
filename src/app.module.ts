import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AirportsModule } from './airports/airports.module';
import { PlanesModule } from './planes/planes.module';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    AirportsModule,
    PlanesModule,
    TicketsModule,
  ],
})
export class AppModule {}
