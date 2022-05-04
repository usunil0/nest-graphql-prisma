import { Injectable } from '@nestjs/common';
import { CreatePlaneInput } from './dto/create-plane.input';
import { UpdatePlaneInput } from './dto/update-plane.input';

@Injectable()
export class PlanesService {
  create(createPlaneInput: CreatePlaneInput) {
    return 'This action adds a new plane';
  }

  findAll() {
    return `This action returns all planes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plane`;
  }

  update(id: number, updatePlaneInput: UpdatePlaneInput) {
    return `This action updates a #${id} plane`;
  }

  remove(id: number) {
    return `This action removes a #${id} plane`;
  }
}
