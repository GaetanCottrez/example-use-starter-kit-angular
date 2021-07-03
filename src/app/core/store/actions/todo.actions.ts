import { createAction, props } from '@ngrx/store';
import { Todo } from '../../interfaces/todo';

export enum TodoActionTypes {
  TODO_LOAD = '[Todo] Load Todos',
  TODO_LOAD_SUCCESS = '[Todo] Load Todos Success',
  TODO_LOAD_FAILLURE = '[Todo] Load Todos Failure',
  TODO_ADD = '[Todo] Add Todo',
  TODO_ADD_SUCCESS = '[Todo] Add Todo Success',
  TODO_ADD_FAILLURE = '[Todo] Add Todo Failure',
  TODO_TOGGLE = '[Todo] Toggle Todo',
  TODO_TOGGLE_SUCCESS = '[Todo] Toggle Todo Success',
  TODO_TOGGLE_FAILLURE = '[Todo] Toggle Todo Failure',
  TODO_DELETE = '[Todo] Delete Todo',
  TODO_DELETE_SUCCESS = '[Todo] Delete Todo Success',
  TODO_DELETE_FAILLURE = '[Todo] Delete Todo Failure',
  TODO_ON_EDIT = '[Todo] Todo On Edit',
  TODO_ON_EDIT_FAILLURE = '[Todo] Todo On Edit Failure',
  TODO_UPDATE = '[Todo] Update Todo',
  TODO_UPDATE_SUCCESS = '[Todo] Update Todo Success',
  TODO_UPDATE_FAILLURE = '[Todo] Update Todo Failure'
}

export const loadTodos = createAction(TodoActionTypes.TODO_LOAD);

export const loadTodosSuccess = createAction(
  TodoActionTypes.TODO_LOAD_SUCCESS,
  props<{ items: Todo[] }>()
);

export const loadTodosFailure = createAction(
  TodoActionTypes.TODO_LOAD_FAILLURE,
  props<{ error: any }>()
);

export const addTodo = createAction(
  TodoActionTypes.TODO_ADD,
  props<{
    message: string;
    completed: boolean;
    deleted: boolean;
    inEdit: boolean;
  }>()
);

export const addTodoSuccess = createAction(
  TodoActionTypes.TODO_ADD_SUCCESS,
  props<{ data: Todo }>()
);

export const addTodoFailure = createAction(
  TodoActionTypes.TODO_ADD_FAILLURE,
  props<{ error: any }>()
);

export const toggleTodo = createAction(
  TodoActionTypes.TODO_TOGGLE,
  props<{ item: Todo, completed: boolean }>()
);

export const toggleTodoSuccess = createAction(
  TodoActionTypes.TODO_TOGGLE_SUCCESS,
  props<{ originalItem: Todo, completed: boolean }>()
);

export const toggleTodoFailure = createAction(
  TodoActionTypes.TODO_TOGGLE_FAILLURE,
  props<{ error: any }>()
);

export const deleteTodo = createAction(
  TodoActionTypes.TODO_DELETE,
  props<{ item: Todo }>()
);

export const deleteTodoSuccess = createAction(
  TodoActionTypes.TODO_DELETE_SUCCESS,
  props<{ data: Todo }>()
);

export const deleteTodoFailure = createAction(
  TodoActionTypes.TODO_DELETE_FAILLURE,
  props<{ error: any }>()
);

export const updateTodo = createAction(
  TodoActionTypes.TODO_UPDATE,
  props<{ originalItem: Todo; new_message: string }>()
);

export const updateTodoSuccess = createAction(
  TodoActionTypes.TODO_UPDATE_SUCCESS,
  props<{ originalItem: Todo; new_message: string }>()
);

export const updateTodoFailure = createAction(
  TodoActionTypes.TODO_UPDATE_FAILLURE,
  props<{ error: any }>()
);

export const onEditTodo = createAction(
  TodoActionTypes.TODO_ON_EDIT,
  props<{ data: Todo }>()
);

export const onEditTodoFailure = createAction(
  TodoActionTypes.TODO_ON_EDIT_FAILLURE,
  props<{ error: any }>()
);
