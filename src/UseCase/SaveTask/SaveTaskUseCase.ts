import { BadRequestException, HttpCode, Injectable, NotFoundException } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import SaveTaskDto from './SaveTaskDto';
import TaskRepository from 'src/Repositories/TaskRepository';

@Injectable()
export default class SaveTaskUseCase
  implements UseCase<Promise<Task>, [dto: SaveTaskDto]>
{
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(dto: SaveTaskDto) {
    //  @todo IMPLEMENT HERE : VALIDATION DTO, DATA SAVING, ERROR CATCHING
    try {
      if (!dto.id && dto.name) {
        const task = this.taskRepository.save(dto);
        if (!task) {
          throw new NotFoundException('Task not saved');
        }
        return task;
      } else {
        throw new BadRequestException('Invalid data : Missing name');
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
