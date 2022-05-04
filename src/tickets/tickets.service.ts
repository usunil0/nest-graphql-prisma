import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PlaneTicket, Prisma } from '@prisma/client';

@Injectable()
export class PlaneTicketService {
  constructor(private prisma: PrismaService) {}

  async plane(
    planeWhereUniqueInput: Prisma.PlaneWhereUniqueInput,
  ): Promise<PlaneTicket | null> {
    return this.prisma.planeTicket.findUnique({
      where: planeWhereUniqueInput,
    });
  }

  async planes(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PlaneWhereUniqueInput;
    where?: Prisma.PlaneWhereInput;
    orderBy?: Prisma.PlaneOrderByWithRelationInput;
  }): Promise<PlaneTicket[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.planeTicket.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPlane(data: Prisma.PlaneTicketCreateInput): Promise<PlaneTicket> {
    return this.prisma.planeTicket.create({
      data,
    });
  }

  async updatePlane(params: {
    where: Prisma.PlaneTicketWhereUniqueInput;
    data: Prisma.PlaneTicketUpdateInput;
  }): Promise<PlaneTicket> {
    const { where, data } = params;
    return this.prisma.planeTicket.update({
      data,
      where,
    });
  }

  async deletePlane(
    where: Prisma.AirportWhereUniqueInput,
  ): Promise<PlaneTicket> {
    return this.prisma.planeTicket.delete({
      where,
    });
  }
}
