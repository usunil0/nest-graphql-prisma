import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AiportsService } from './aiports.service';
import { Aiport } from './entities/aiport.entity';
import { CreateAiportInput } from './dto/create-aiport.input';
import { UpdateAiportInput } from './dto/update-aiport.input';

@Resolver(() => Aiport)
export class AiportsResolver {
  constructor(private readonly aiportsService: AiportsService) {}

  @Mutation(() => Aiport)
  createAiport(@Args('createAiportInput') createAiportInput: CreateAiportInput) {
    return this.aiportsService.create(createAiportInput);
  }

  @Query(() => [Aiport], { name: 'aiports' })
  findAll() {
    return this.aiportsService.findAll();
  }

  @Query(() => Aiport, { name: 'aiport' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.aiportsService.findOne(id);
  }

  @Mutation(() => Aiport)
  updateAiport(@Args('updateAiportInput') updateAiportInput: UpdateAiportInput) {
    return this.aiportsService.update(updateAiportInput.id, updateAiportInput);
  }

  @Mutation(() => Aiport)
  removeAiport(@Args('id', { type: () => Int }) id: number) {
    return this.aiportsService.remove(id);
  }
}
