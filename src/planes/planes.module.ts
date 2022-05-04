import { Module } from '@nestjs/common';
import { PlanesService } from './planes.service';
import { PlanesResolver } from './planes.resolver';

@Module({
  providers: [PlanesResolver, PlanesService]
})
export class PlanesModule {}
