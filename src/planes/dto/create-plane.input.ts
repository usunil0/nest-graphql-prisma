import { InputType, Int, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class CreatePlaneInput {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  arrivalAirport: Prisma.PlaneCreateInput['arrivalAirport'];

  @Field(() => Int)
  departureAirport: Prisma.PlaneCreateInput['departureAirport'];

  @Field(() => Date)
  arrivalTime: Date;

  @Field(() => Date)
  departureTime: Date;
}
