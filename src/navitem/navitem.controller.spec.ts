import { Test, TestingModule } from '@nestjs/testing';
import { NavitemController } from './navitem.controller';
import { NavitemService } from './navitem.service';

describe('NavitemController', () => {
  let controller: NavitemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NavitemController],
      providers: [NavitemService],
    }).compile();

    controller = module.get<NavitemController>(NavitemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
