import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../core/interfaces/todo';
import { Filter, TodoService } from './todo.service';
import { AppState } from '../../core/store/interfaces/app-state';
import { Store } from '@ngrx/store';
import {
  selectItems,
  selectItemsCount
} from '../../core/store/selectors/todo.selectors';
import {
  addTodo,
  loadTodos,
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
    this.todoService.setFilter(filterValue);
  }

  onAdd(message: string) {
    if (message.trim()) {
      this.store.dispatch(
        addTodo({ completed: false, message, deleted: false, inEdit: false })
      );
    }
  }

  onSave([item, message]: [Todo, string]) {
    if (message.trim()) {
      this.store.dispatch(updateTodo({ item, message }));
    }
  }

  onToggleCompleted([item, completed]: [Todo, boolean]) {
    this.todoService.toggleCompleted(item, completed);
  }

  onDelete(item: Todo) {
    this.todoService.delete(item);
  }
}