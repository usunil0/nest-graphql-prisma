import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Airport, Prisma } from '@prisma/client';

@Injectable()
export class AirportsService {
  constructor(private prisma: PrismaService) {}

  async airport(
    airportWhereUniqueInput: Prisma.AirportWhereUniqueInput,
  ): Promise<Airport | null> {
    return this.prisma.airport.findUnique({
      where: airportWhereUniqueInput,
    });
  }

  async airports(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AirportWhereUniqueInput;
    where?: Prisma.AirportWhereInput;
    orderBy?: Prisma.AirportOrderByWithRelationInput;
  }): Promise<Airport[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.airport.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createAirport(data: Prisma.AirportCreateInput): Promise<Airport> {
    return this.prisma.airport.create({
      data,
    });
  }

  async updateAirport(params: {
    where: Prisma.AirportWhereUniqueInput;
    data: Prisma.AirportUpdateInput;
  }): Promise<Airport> {
    const { where, data } = params;
    return this.prisma.airport.update({
      data,
      where,
    });
  }

  async deleteAirport(where: Prisma.AirportWhereUniqueInput): Promise<Airport> {
    return this.prisma.airport.delete({
      where,
    });
  }
}
