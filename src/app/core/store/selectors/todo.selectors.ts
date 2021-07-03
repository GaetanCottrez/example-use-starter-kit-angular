import { createSelector } from '@ngrx/store';
import { AppState } from '../interfaces/app-state';
import { TodoState } from '../interfaces/todo-state';
import { Todo } from '../../interfaces/todo';

export const selectTodo = (state: AppState) => state.todo;

export const selectItems = createSelector(
  selectTodo,
  (state: TodoState) => state.items
);

export const selectActiveItems = createSelector(
  selectTodo,
  (state: TodoState) => state.items.filter((item: Todo) => !item.completed)
);

export const selectCompletedItems = createSelector(
  selectTodo,
  (state: TodoState) => state.items.filter((item: Todo) => item.completed)
);

export const selectItemsCount = createSelector(
  selectTodo,
  (state: TodoState) => state.items.length
);

export const selectActiveItemsCount = createSelector(
  selectTodo,
  (state: TodoState) =>
    state.items.filter((item: Todo) => !item.completed).length
);

export const selectCompletedItemsCount = createSelector(
  selectTodo,
  (state: TodoState) =>
    state.items.filter((item: Todo) => item.completed).length
);
