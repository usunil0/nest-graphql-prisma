import { Module } from '@nestjs/common';
import { PlanesService } from './planes.service';
import { PlanesResolver } from './planes.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PlanesResolver, PlanesService, PrismaService],
})
export class PlanesModule {}
