import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PlaneTicket, Prisma } from '@prisma/client';

@Injectable()
export class PlaneTicketService {
  constructor(private prisma: PrismaService) {}

  async planeTicket(
    planeWhereUniqueInput: Prisma.PlaneWhereUniqueInput,
  ): Promise<PlaneTicket | null> {
    return this.prisma.planeTicket.findUnique({
      where: planeWhereUniqueInput,
    });
  }

  async planeTickets(params: {
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

  async createPlaneTicket(
    data: Prisma.PlaneTicketUncheckedCreateInput,
  ): Promise<PlaneTicket> {
    return this.prisma.planeTicket.create({
      data,
    });
  }

  async updatePlaneTicket(params: {
    where: Prisma.PlaneTicketWhereUniqueInput;
    data: Prisma.PlaneTicketUpdateInput;
  }): Promise<PlaneTicket> {
    const { where, data } = params;
    return this.prisma.planeTicket.update({
      data,
      where,
    });
  }

  async deletePlaneTicket(
    where: Prisma.AirportWhereUniqueInput,
  ): Promise<PlaneTicket> {
    return this.prisma.planeTicket.delete({
      where,
    });
  }
}
