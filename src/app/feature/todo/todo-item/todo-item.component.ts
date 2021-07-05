import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { TodoInterface } from '../todo.interface';
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

  @Input() item: TodoInterface = {};
  @Output() save = new EventEmitter<[TodoInterface, string]>();
  @Output() delete = new EventEmitter<TodoInterface>();
  @Output() toggleComplete = new EventEmitter<[TodoInterface, boolean]>();

  onEdit(item: TodoInterface) {
    this.store.dispatch(onEditTodo({ data: item }));
  }

  onSave(item: TodoInterface, message: string) {
    //item.inEdit = false;
    this.save.emit([item, message]);
  }

  onDelete(item: TodoInterface) {
    this.delete.emit(item);
  }

  onToggleComplete(item: TodoInterface, completed: boolean) {
    this.toggleComplete.emit([item, completed]);
  }
}
