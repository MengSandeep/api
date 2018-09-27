import { Test, TestingModule } from '@nestjs/testing';
import { BaniController } from './bani.controller';

describe('Bani Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [BaniController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: BaniController = module.get<BaniController>(
      BaniController,
    );
    expect(controller).toBeDefined();
  });
});
