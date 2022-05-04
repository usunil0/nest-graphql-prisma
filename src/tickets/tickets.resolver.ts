import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlaneTicketService } from './tickets.service';
import { Ticket } from './entities/ticket.entity';
import { CreateTicketInput } from './dto/create-ticket.input';
import { UpdateTicketInput } from './dto/update-ticket.input';

@Resolver(() => Ticket)
export class PlaneTicketsResolver {
  constructor(private readonly planeTicketService: PlaneTicketService) {}

  @Mutation(() => Ticket)
  createTicket(@Args('createTicketInput') createPlaneInput: CreateTicketInput) {
    return this.planeTicketService.createPlaneTicket(createPlaneInput);
  }

  @Query(() => [Ticket], { name: 'tickets' })
  planeTickets() {
    return this.planeTicketService.planeTickets({});
  }

  @Query(() => Ticket, { name: 'ticket' })
  plane(@Args('id', { type: () => Int }) id: number) {
    return this.planeTicketService.planeTicket({ id });
  }

  @Mutation(() => Ticket)
  updatePlane(@Args('updateTicketInput') updatePlaneInput: UpdateTicketInput) {
    return this.planeTicketService.updatePlaneTicket({
      where: { id: updatePlaneInput.id },
      data: updatePlaneInput,
    });
  }

  @Mutation(() => Ticket)
  deletePlane(@Args('id', { type: () => Int }) id: number) {
    return this.planeTicketService.deletePlaneTicket({ id });
  }
}
