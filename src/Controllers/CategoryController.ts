import { Controller, Get } from '@nestjs/common';
import UseCaseFactory from 'src/UseCase/UseCaseFactory';
import GetAllCategoriesUseCase from '../UseCase/GetAllCategories/GetAllCategoriesUseCase';

@Controller()
export default class CategoryController {
  constructor(private readonly useCaseFactory: UseCaseFactory) {}

  @Get('/categories')
  async getAll() {
    return (await this.useCaseFactory.create(GetAllCategoriesUseCase)).handle();
  }
}
