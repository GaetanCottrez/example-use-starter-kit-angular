import { createReducer, on } from '@ngrx/store';
import { TodoState } from '../interfaces/todo-state';
import {
  addTodo,
  addTodoSuccess,
  deleteTodo,
  deleteTodoSuccess,
  loadTodos, loadTodosFailure,
  loadTodosSuccess,
  onEditTodo,
  toggleTodo,
  toggleTodoSuccess,
  updateTodoSuccess
} from '../actions/todo.actions';
import { TodoInterface } from '../../../feature/todo/todo.interface';

export const todoFeatureKey = 'todo';

export const initialState: TodoState = {
  items: [],
  error: false
};

export const reducer = createReducer(
  initialState,
  on(loadTodos, state => ({ ...state })),
  on(loadTodosSuccess, (state, payload) => ({
    ...state,
    items: payload.items
  })),
  on(loadTodosFailure, (state, payload) => {
    console.log(payload)
    return {
      ...state,
      error: payload.error
    };
  }),
  on(addTodo, state => ({ ...state })),
  on(addTodoSuccess, (state, payload) => ({
    ...state,
    items: [...state.items, payload.data]
  })),
  on(onEditTodo, (state, payload) => {
    const items: TodoInterface[] = [];
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
    const items: TodoInterface[] = [];
    state.items.forEach(item => {
      if (item === payload.originalItem) {
        items.push({ ...item, inEdit: false, message: payload.new_message });
      } else {
        items.push(item);
      }
    });
    return { ...state, items };
  }),
  on(toggleTodo, state => ({ ...state })),
  on(toggleTodoSuccess, (state, payload) => {
    const items: TodoInterface[] = [];
    state.items.forEach(item => {
      if (item === payload.originalItem) {
        items.push({ ...item, completed: payload.completed });
      } else {
        items.push(item);
      }
    });
    return { ...state, items };
  }),
  on(deleteTodo, state => ({ ...state })),
  on(deleteTodoSuccess, (state, payload) => {
    const items: TodoInterface[] = [];
    state.items.forEach(item => {
      if (item !== payload.data) {
        items.push(item);
      }
    });
    return { ...state, items };
  })
);
