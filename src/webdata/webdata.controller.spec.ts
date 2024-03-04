import { Test, TestingModule } from '@nestjs/testing';
import { WebdataController } from './webdata.controller';

describe('WebdataController', () => {
  let controller: WebdataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebdataController],
    }).compile();

    controller = module.get<WebdataController>(WebdataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
