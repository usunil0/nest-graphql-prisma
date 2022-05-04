import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Plane, Prisma } from '@prisma/client';

@Injectable()
export class PlanesService {
  constructor(private prisma: PrismaService) {}

  async plane(
    planeWhereUniqueInput: Prisma.PlaneWhereUniqueInput,
  ): Promise<Plane | null> {
    return this.prisma.plane.findUnique({
      where: planeWhereUniqueInput,
    });
  }

  async planes(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PlaneWhereUniqueInput;
    where?: Prisma.PlaneWhereInput;
    orderBy?: Prisma.PlaneOrderByWithRelationInput;
  }): Promise<Plane[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.plane.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPlane(data: Prisma.PlaneUncheckedCreateInput): Promise<Plane> {
    return this.prisma.plane.create({
      data,
    });
  }

  async updatePlane(params: {
    where: Prisma.AirportWhereUniqueInput;
    data: Prisma.AirportUpdateInput;
  }): Promise<Plane> {
    const { where, data } = params;
    return this.prisma.plane.update({
      data,
      where,
    });
  }

  async deletePlane(where: Prisma.AirportWhereUniqueInput): Promise<Plane> {
    return this.prisma.plane.delete({
      where,
    });
  }
}
