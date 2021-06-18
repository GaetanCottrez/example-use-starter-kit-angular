import { Injectable } from '@angular/core';
import { Manager } from '../mediators/interfaces/manager';
import { Task } from './interfaces/task';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TaskService implements Manager<Task> {
  constructor() {}

  data$ = new BehaviorSubject<Task[]>([]);

  create(target: Omit<Task, 'id'>): void {}

  load(): void {}

  update(target: Task, info: Partial<Omit<Task, 'id'>>): void {}
}
