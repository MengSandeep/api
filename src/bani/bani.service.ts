import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Banis } from '@shabados/database';

@Injectable()
export class BaniService {
  async showAll() {
    console.log('fdawdwa')
    return await Banis.query();
  }

  async read(id: number) {
    const bani = await Banis.query().where('id', id).first();
    if (!bani) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return bani;
  }
}
