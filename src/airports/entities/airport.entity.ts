import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Airport {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  name: string;
}
