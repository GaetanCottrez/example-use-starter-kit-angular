import { createFeatureSelector, createSelector } from '@ngrx/store';
import {AppState} from "../interfaces/app-state";
import {TodoState} from "../interfaces/todo-state";

export const selectTodo = (state: AppState) => state.todo;

export const selectItems = createSelector(selectTodo,
  (state: TodoState) => state.items
)

export const selectItemsCount = createSelector(selectTodo,
  (state: TodoState) => state.items.length
)
