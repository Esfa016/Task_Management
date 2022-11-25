import { Module } from '@nestjs/common';
import { TaskModuleController } from './controllers/task-module.controller';
import { TasksService } from './services/tasks/tasks.service';

@Module({
  controllers: [TaskModuleController],
  providers: [TasksService],
})
export class TaskModuleModule {}
