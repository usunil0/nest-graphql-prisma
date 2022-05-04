import { ObjectType, Field, Int } from '@nestjs/graphql';

import { Airport } from 'src/airports/entities/airport.entity';

@ObjectType()
export class Plane {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Airport)
  arrivalAirport: Airport;

  @Field(() => Airport)
  departureAirport: Airport;

  @Field(() => Int)
  arrivalTime: number;

  @Field(() => Int)
  departureTime: number;
}
