import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlanesService } from './planes.service';
import { Plane } from './entities/plane.entity';
import { CreatePlaneInput } from './dto/create-plane.input';
import { UpdatePlaneInput } from './dto/update-plane.input';

@Resolver(() => Plane)
export class PlanesResolver {
  constructor(private readonly planesService: PlanesService) {}

  @Mutation(() => Plane)
  createPlane(@Args('createPlaneInput') createPlaneInput: CreatePlaneInput) {
    return this.planesService.createPlane(createPlaneInput);
  }

  @Query(() => [Plane], { name: 'planes' })
  planes() {
    return this.planesService.planes({});
  }

  @Query(() => Plane, { name: 'plane' })
  plane(@Args('id', { type: () => Int }) id: number) {
    return this.planesService.plane({ id });
  }

  @Mutation(() => Plane)
  updatePlane(@Args('updatePlaneInput') updatePlaneInput: UpdatePlaneInput) {
    return this.planesService.updatePlane({
      where: { id: updatePlaneInput.id },
      data: updatePlaneInput,
    });
  }

  @Mutation(() => Plane)
  deletePlane(@Args('id', { type: () => Int }) id: number) {
    return this.planesService.deletePlane({ id });
  }
}
