import { Action, createReducer, on } from '@ngrx/store';
import { TodoState } from '../interfaces/todo-state';
import {
  addTodo,
  addTodoSuccess,
  loadTodos,
  loadTodosSuccess,
  onEditTodo,
  updateTodoSuccess
} from '../actions/todo.actions';
import { tap } from 'rxjs/operators';
import { Todo } from '../../interfaces/todo';

export const todoFeatureKey = 'todo';

export const initialState: TodoState = {
  items: []
};

export const reducer = createReducer(
  initialState,
  on(loadTodos, state => ({ ...state })),
  on(loadTodosSuccess, (state, payload) => ({
    ...state,
    items: payload.items,
    itemsNumber: payload.itemsNumber
  })),
  on(addTodo, state => ({ ...state })),
  on(addTodoSuccess, (state, payload) => ({
    ...state,
    items: [...state.items, payload.data],
    itemsNumber: [...state.items, payload.data].length
  })),
  on(onEditTodo, (state, payload) => {
    const items: Todo[] = [];
    state.items.forEach(item => {
      if (item === payload.data) {
        items.push({ ...item, inEdit: true });
      } else {
        items.push(item);
      }
    });
    return { ...state, items };
  }),
  on(updateTodoSuccess, (state, payload) => {
    const items: Todo[] = [];
    state.items.forEach(item => {
      if (item === payload.originalItem) {
        items.push({ ...item, inEdit: false, message: payload.new_message });
      } else {
        items.push(item);
      }
    });
    return { ...state, items };
  })
);
