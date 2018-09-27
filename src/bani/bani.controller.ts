import { Controller, Get, Logger } from '@nestjs/common';

import { BaniService } from './bani.service';

@Controller('api/banis')
export class BaniController {
  private logger = new Logger('BaniController');

  constructor(private baniService: BaniService) {}

  @Get()
  showAllBanis() {
    return this.baniService.showAll();
  }
}
