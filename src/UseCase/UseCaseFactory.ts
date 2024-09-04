import { Injectable } from '@nestjs/common';
import ServiceFactory from '../ServiceFactory';
import GetAllTasksUseCase from './GetAllTasks/GetAllTasksUseCase';
import SaveTaskUseCase from './SaveTask/SaveTaskUseCase';
import DeleteTaskUseCase from './DeleteTask/DeleteTaskUseCase';

type UseCases = GetAllTasksUseCase | DeleteTaskUseCase | SaveTaskUseCase;

@Injectable()
export default class UseCaseFactory extends ServiceFactory<UseCases> {}
