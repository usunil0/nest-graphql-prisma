import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AirportsService } from './airports.service';
import { Airport } from './entities/airport.entity';
import { CreateAirportInput } from './dto/create-airport.input';
import { UpdateAirportInput } from './dto/update-airport.input';

@Resolver(() => Airport)
export class AirportsResolver {
  constructor(private readonly airportsService: AirportsService) {}

  @Mutation(() => Airport)
  createAirport(
    @Args('createAirportInput') createAirportInput: CreateAirportInput,
  ) {
    return this.airportsService.createAirport(createAirportInput);
  }

  @Query(() => [Airport], { name: 'airports' })
  airports() {
    return this.airportsService.airports({});
  }

  @Query(() => Airport, { name: 'airport' })
  airport(@Args('id', { type: () => Int }) id: number) {
    return this.airportsService.airport({ id });
  }

  @Mutation(() => Airport)
  updateAirport(
    @Args('updateAirportInput') updateAirportInput: UpdateAirportInput,
  ) {
    return this.airportsService.updateAirport({
      where: { id: updateAirportInput.id },
      data: updateAirportInput,
    });
  }

  @Mutation(() => Airport)
  deleteAirport(@Args('id', { type: () => Int }) id: number) {
    return this.airportsService.deleteAirport({ id });
  }
}
