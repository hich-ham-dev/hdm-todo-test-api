import { Injectable } from '@nestjs/common';
import ServiceFactory from '../ServiceFactory';
import GetAllTasksUseCase from './GetAllTasks/GetAllTasksUseCase';
import SaveTaskUseCase from './SaveTask/SaveTaskUseCase';
import DeleteTaskUseCase from './DeleteTask/DeleteTaskUseCase';
import UpdateTaskUseCase from './UpdateTask/UpdateTaskUseCase';
import GetAllCategoriesUseCase from './GetAllCategories/GetAllCategoriesUseCase';

type UseCases =
  | GetAllTasksUseCase
  | DeleteTaskUseCase
  | SaveTaskUseCase
  | UpdateTaskUseCase
  | GetAllCategoriesUseCase;

@Injectable()
export default class UseCaseFactory extends ServiceFactory<UseCases> {}
