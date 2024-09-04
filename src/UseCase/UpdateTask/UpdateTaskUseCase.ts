import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import SaveTaskDto from '../SaveTask/SaveTaskDto';
import TaskRepository from '../../Repositories/TaskRepository';

@Injectable()
export default class UpdateTaskUseCase
  implements UseCase<Promise<Task>, [dto: SaveTaskDto]>
{
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(dto: SaveTaskDto) {
    try {
      if (!dto.id) {
        throw new BadRequestException('Invalid data: Missing id');
      }
      if (!dto.name) {
        throw new BadRequestException('Invalid data: Missing name');
      }

      // Update existing task
      const task = await this.taskRepository.update(dto.id, dto);
      if (!task) {
        throw new NotFoundException('Task not found');
      }

      return task;
    } catch (error) {
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }
      throw new BadRequestException(error.message);
    }
  }
}
