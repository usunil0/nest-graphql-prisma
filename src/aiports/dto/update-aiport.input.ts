import { CreateAiportInput } from './create-aiport.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAiportInput extends PartialType(CreateAiportInput) {
  @Field(() => Int)
  id: number;
}
