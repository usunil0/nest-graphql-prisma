import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePlaneInput {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  arrivalAirportId: number;

  @Field(() => Int)
  departureAirportId: number;

  @Field(() => Int)
  arrivalTime: number;

  @Field(() => Int)
  departureTime: number;
}
