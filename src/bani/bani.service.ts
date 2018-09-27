import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaniEntity } from './bani.entity';

@Injectable()
export class BaniService {
  constructor(
    @InjectRepository(BaniEntity)
    private baniRepository: Repository<BaniEntity>,
  ) {}

  async showAll() {
    return await this.baniRepository.find();
  }

  async read(id: string) {
    const bani = await this.baniRepository.findOne({ where: { id } });
    if (!bani) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return bani;
  }
}
