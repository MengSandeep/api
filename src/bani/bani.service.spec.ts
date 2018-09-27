import { Test, TestingModule } from '@nestjs/testing';
import { BaniService } from './bani.service';

describe('BaniService', () => {
  let service: BaniService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaniService],
    }).compile();
    service = module.get<BaniService>(BaniService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
