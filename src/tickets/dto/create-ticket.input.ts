import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTicketInput {
  @Field(() => Int)
  price: number;

  @Field(() => Int)
  planeId: number;

  @Field(() => Int)
  userId: number;
}
