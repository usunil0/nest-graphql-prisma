import { Test, TestingModule } from '@nestjs/testing';
import { PlaneTicketService } from './tickets.service';

describe('TicketsService', () => {
  let service: PlaneTicketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaneTicketService],
    }).compile();

    service = module.get<PlaneTicketService>(PlaneTicketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
