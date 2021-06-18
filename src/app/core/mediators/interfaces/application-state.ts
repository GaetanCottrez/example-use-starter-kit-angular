import { Message } from '../../functionnal/interfaces/message';
import { Task } from '../../functionnal/interfaces/task';

export interface ApplicationState {
  messages: Array<Message>;
  tasks: Task[];
}
