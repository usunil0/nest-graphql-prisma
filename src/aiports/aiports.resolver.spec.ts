import { Test, TestingModule } from '@nestjs/testing';
import { AiportsResolver } from './aiports.resolver';
import { AiportsService } from './aiports.service';

describe('AiportsResolver', () => {
  let resolver: AiportsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AiportsResolver, AiportsService],
    }).compile();

    resolver = module.get<AiportsResolver>(AiportsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
