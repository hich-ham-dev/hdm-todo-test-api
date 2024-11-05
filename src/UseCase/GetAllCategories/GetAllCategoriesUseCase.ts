import { CategoryRepository } from '../../Repositories/CategoryRepository';
import { Category } from '@prisma/client';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UseCase } from '../../index';

@Injectable()
export default class GetAllCategoriesUseCase
  implements UseCase<Promise<Category[]>, []>
{
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(): Promise<Category[]> {
    return await this.categoryRepository.findAll();
  }

  async handle(): Promise<Category[]> {
    try {
      return await this.categoryRepository.findAll();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
