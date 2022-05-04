import { Injectable } from '@nestjs/common';
import { CreateAiportInput } from './dto/create-aiport.input';
import { UpdateAiportInput } from './dto/update-aiport.input';

@Injectable()
export class AiportsService {
  create(createAiportInput: CreateAiportInput) {
    return 'This action adds a new aiport';
  }

  findAll() {
    return `This action returns all aiports`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aiport`;
  }

  update(id: number, updateAiportInput: UpdateAiportInput) {
    return `This action updates a #${id} aiport`;
  }

  remove(id: number) {
    return `This action removes a #${id} aiport`;
  }
}
