import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Todo } from '../../core/interfaces/todo';
import { todos } from './mock-todos';

export type Filter = 'all' | 'completed' | 'active';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private items$ = new BehaviorSubject<Todo[]>(todos);

  load(): Observable<Todo[]> {
    return of(todos);
  }

  add(item: Todo) {
    this.items$.next([...this.items$.getValue(), item]);
  }

  updateMessage(editedItem: Todo, message: string) {
    const newItems: Todo[] = this.items$.getValue().map((item: Todo) => {
      if (item === editedItem) {
        return { ...item, message };
      }
      return item;
    });

    this.items$.next(newItems);
  }

  toggleCompleted(toggledItem: Todo, completed: boolean) {
    const newItems: Todo[] = this.items$.getValue().map((item: Todo) => {
      if (item === toggledItem && item.completed !== completed) {
        return { ...item, completed };
      }
      return item;
    });

    this.items$.next(newItems);
  }

  delete(deletedItem: Todo) {
    const newItems: Todo[] = this.items$.getValue().filter((item: Todo) => {
      return item !== deletedItem;
    });

    this.items$.next(newItems);
  }
}
