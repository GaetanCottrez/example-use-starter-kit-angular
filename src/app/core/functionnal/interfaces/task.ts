import { Entity } from './entity';
import { TaskPriority } from './enums/task-priority';

export interface Task extends Entity {
  date: {
    creation: number;
    due: number;
  };
  priority: TaskPriority;
  label: string;
}
