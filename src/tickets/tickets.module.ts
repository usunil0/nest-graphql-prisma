import { Module } from '@nestjs/common';
import { PlaneTicketService } from './tickets.service';
import { PlaneTicketsResolver } from './tickets.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PlaneTicketsResolver, PlaneTicketService, PrismaService],
})
export class TicketsModule {}
