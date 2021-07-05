import { TodoInterface } from '../../../feature/todo/todo.interface';

export interface TodoState {
  items: TodoInterface[];
  error?: any
}
