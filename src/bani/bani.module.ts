import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BaniController } from './bani.controller';
import { BaniEntity } from './bani.entity';
import { BaniService } from './bani.service';

@Module({
  imports: [TypeOrmModule.forFeature([BaniEntity])],
  controllers: [BaniController],
  providers: [BaniService],
})
export class BaniModule {}
