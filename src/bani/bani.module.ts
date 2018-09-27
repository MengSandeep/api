import { Module } from '@nestjs/common';

import { BaniController } from './bani.controller';
import database from '@shabados/database';
import { BaniService } from './bani.service';

@Module({
  controllers: [BaniController],
  providers: [BaniService],
})
export class BaniModule {}
