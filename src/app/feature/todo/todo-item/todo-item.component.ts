import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { Todo } from '../../../core/interfaces/todo';
import { onEditTodo } from '../../../core/store/actions/todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store/interfaces/app-state';

@Component({
  selector: 'td-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  constructor(public store: Store<AppState>) {}

  @ViewChild('input', { static: false }) input: ElementRef = new ElementRef(
    null
  );
  @HostBinding('class.completed')
  get completed() {
    return this.item.completed;
  }

  @Input() item: Todo = {};
  @Output() save = new EventEmitter<[Todo, string]>();
  @Output() delete = new EventEmitter<Todo>();
  @Output() toggleComplete = new EventEmitter<[Todo, boolean]>();

  onEdit(item: Todo) {
    this.store.dispatch(onEditTodo({ data: item }));
  }

  onSave(item: Todo, message: string) {
    //item.inEdit = false;
    this.save.emit([item, message]);
  }

  onDelete(item: Todo) {
    this.delete.emit(item);
  }

  onToggleComplete(item: Todo, completed: boolean) {
    this.toggleComplete.emit([item, completed]);
  }
}
