import { Test, TestingModule } from '@nestjs/testing';
import { TaskModuleController } from './task-module.controller';

describe('TaskModuleController', () => {
  let controller: TaskModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskModuleController],
    }).compile();

    controller = module.get<TaskModuleController>(TaskModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
