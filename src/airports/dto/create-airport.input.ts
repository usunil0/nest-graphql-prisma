import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAirportInput {
  @Field(() => String)
  name: string;
}
