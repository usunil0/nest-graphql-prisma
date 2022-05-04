import { Module } from '@nestjs/common';
import { AiportsService } from './aiports.service';
import { AiportsResolver } from './aiports.resolver';

@Module({
  providers: [AiportsResolver, AiportsService]
})
export class AiportsModule {}
