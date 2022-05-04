import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Ticket {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  planeId: number;

  @Field(() => Int)
  userId: number;
}
