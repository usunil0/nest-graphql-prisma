import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Aiport {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
