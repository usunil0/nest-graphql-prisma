import { Module } from '@nestjs/common';
import { AirportsService } from './airports.service';
import { AirportsResolver } from './airports.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [AirportsResolver, AirportsService, PrismaService],
})
export class AirportsModule {}
