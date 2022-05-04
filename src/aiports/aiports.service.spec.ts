import { Test, TestingModule } from '@nestjs/testing';
import { AiportsService } from './aiports.service';

describe('AiportsService', () => {
  let service: AiportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AiportsService],
    }).compile();

    service = module.get<AiportsService>(AiportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
