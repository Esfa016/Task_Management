import { Module } from '@nestjs/common';
import { TaskModuleModule } from './task-module/task-module.module';

@Module({
  imports: [TaskModuleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
