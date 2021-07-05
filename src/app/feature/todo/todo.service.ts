import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { TodoInterface } from './todo.interface';
import {
  APP_NET_PROVIDER,
  NetProvider
} from '../../core/interfaces/net-provider';

export type Filter = 'all' | 'completed' | 'active';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private items$ = new BehaviorSubject<TodoInterface[]>([]);

  constructor(@Inject(APP_NET_PROVIDER) private net: NetProvider) {}

  load(): Observable<TodoInterface[]> {
    const todos = this.net.get<TodoInterface>('http://127.0.0.1:5050/todos');
    todos.subscribe(data => this.items$.next(data));
    return todos;
  }

  add(item: TodoInterface) {
    this.items$.next([...this.items$.getValue(), item]);
  }

  updateMessage(editedItem: TodoInterface, message: string) {
    const newItems: TodoInterface[] = this.items$
      .getValue()
      .map((item: TodoInterface) => {
        if (item === editedItem) {
          return { ...item, message };
        }
        return item;
      });

    this.items$.next(newItems);
  }

  toggleCompleted(toggledItem: TodoInterface, completed: boolean) {
    const newItems: TodoInterface[] = this.items$
      .getValue()
      .map((item: TodoInterface) => {
        if (item === toggledItem && item.completed !== completed) {
          return { ...item, completed };
        }
        return item;
      });

    this.items$.next(newItems);
  }

  delete(deletedItem: TodoInterface) {
    const newItems: TodoInterface[] = this.items$
      .getValue()
      .filter((item: TodoInterface) => {
        return item !== deletedItem;
      });

    this.items$.next(newItems);
  }
}
