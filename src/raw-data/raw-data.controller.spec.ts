import { Test, TestingModule } from '@nestjs/testing';
import { RawDataController } from './raw-data.controller';
import { RawDataService } from './raw-data.service';

describe('RawDataController', () => {
  let controller: RawDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RawDataController],
      providers: [RawDataService],
    }).compile();

    controller = module.get<RawDataController>(RawDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
