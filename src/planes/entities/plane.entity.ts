import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Plane {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  arrivalAirportId: number;

  @Field(() => Int)
  departureAirportId: number;

  @Field(() => Date)
  arrivalTime: Date;

  @Field(() => Date)
  departureTime: Date;
}
