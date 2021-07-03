import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../core/interfaces/todo';
import { Filter, TodoService } from './todo.service';
import { AppState } from '../../core/store/interfaces/app-state';
import { Store } from '@ngrx/store';
import {
  selectActiveItems,
  selectActiveItemsCount,
  selectCompletedItems,
  selectCompletedItemsCount,
  selectItems,
  selectItemsCount
} from '../../core/store/selectors/todo.selectors';
import {
  addTodo,
  deleteTodo,
  loadTodos,
  toggleTodo,
  updateTodo
} from '../../core/store/actions/todo.actions';

@Component({
  selector: 'td-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  items$: Observable<Todo[]>;
  itemsNumber$: Observable<number>;

  constructor(public store: Store<AppState>, private todoService: TodoService) {
    this.items$ = this.store.select(selectItems);
    this.itemsNumber$ = this.store.select(selectItemsCount);
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }

  changeFilter(filterValue: Filter) {
    switch (filterValue) {
      case 'active':
        this.items$ = this.store.select(selectActiveItems);
        this.itemsNumber$ = this.store.select(selectActiveItemsCount);
        break;

      case 'all':
        this.items$ = this.store.select(selectItems);
        this.itemsNumber$ = this.store.select(selectItemsCount);
        break;

      case 'completed':
        this.items$ = this.store.select(selectCompletedItems);
        this.itemsNumber$ = this.store.select(selectCompletedItemsCount);
        break;
    }
  }

  onAdd(message: string) {
    if (message.trim()) {
      this.store.dispatch(
        addTodo({ completed: false, message, deleted: false, inEdit: false })
      );
    }
  }

  onSave([originalItem, new_message]: [Todo, string]) {
    if (new_message.trim()) {
      this.store.dispatch(updateTodo({ originalItem, new_message }));
    }
  }

  onToggleCompleted([item, completed]: [Todo, boolean]) {
    this.store.dispatch(toggleTodo({ item, completed }));
  }

  onDelete(item: Todo) {
    this.store.dispatch(deleteTodo({ item }));
  }
}
