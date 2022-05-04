import { Test, TestingModule } from '@nestjs/testing';
import { AirportsResolver } from './airports.resolver';
import { AirportsService } from './airports.service';

describe('AirportsResolver', () => {
  let resolver: AirportsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirportsResolver, AirportsService],
    }).compile();

    resolver = module.get<AirportsResolver>(AirportsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
