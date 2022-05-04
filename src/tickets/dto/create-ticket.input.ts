import { InputType, Int, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class CreateTicketInput {
  @Field(() => Int)
  price: number;

  @Field(() => Int)
  plane: Prisma.PlaneTicketCreateInput['plane'];

  @Field(() => Int)
  user: Prisma.PlaneTicketCreateInput['user'];
}
