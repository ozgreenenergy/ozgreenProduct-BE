import { Test, TestingModule } from '@nestjs/testing';
import { NavitemService } from './navitem.service';

describe('NavitemService', () => {
  let service: NavitemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NavitemService],
    }).compile();

    service = module.get<NavitemService>(NavitemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
