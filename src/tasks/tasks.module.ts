import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskRepository } from './task.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TaskRepository])],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {
  constructor(private tasksService: TasksService) {}
}
