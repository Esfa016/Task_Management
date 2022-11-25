import { Controller, Get } from '@nestjs/common';
import { TasksService } from '../services/tasks/tasks.service';

@Controller('task-module')
export class TaskModuleController {
    taskService :TasksService;
  constructor(taskService: TasksService) {
    
    this.taskService= taskService;
  }
  @Get()
  getHello() {
      return this.taskService.helloWorld()
  }
}
