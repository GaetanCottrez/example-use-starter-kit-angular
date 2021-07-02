import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addTodoFailure,
  addTodoSuccess,
  loadTodosFailure,
  loadTodosSuccess, onEditTodo, onEditTodoFailure,
  TodoActionTypes, updateTodoFailure, updateTodoSuccess
} from '../actions/todo.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TodoService } from '../../../feature/todo/todo.service';
import {Store} from "@ngrx/store";
import {AppState} from "../interfaces/app-state";
import {Todo} from "../../interfaces/todo";

@Injectable()
export class TodoEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActionTypes.TODO_LOAD),
      mergeMap(() => this.todoService.load()
        .pipe(
          map(items => (loadTodosSuccess({items : items, itemsNumber: items.length}))),
          catchError(error => of(loadTodosFailure({error})))
        )
      )
    )
  );

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActionTypes.TODO_ADD),
      tap((item: Todo) => this.todoService.add(item)),
      map((item: Todo) => addTodoSuccess({data: item})),
      catchError(error => of(addTodoFailure({error})))
    ),
  );

  onEditItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActionTypes.TODO_ON_EDIT),
      tap(console.log),
      tap((item: Todo) => onEditTodo({data: item})),
      catchError(error => of(onEditTodoFailure({error})))
    ),
    {dispatch: false}
  );

  updateItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActionTypes.TODO_UPDATE),
      tap(console.log),
      tap((payload) => this.todoService.updateMessage(payload.item, payload.message)),
      map((payload) => updateTodoSuccess({item: payload.item, new_message: payload.message})),
      catchError(error => of(updateTodoFailure({error})))
    ),
  );

  constructor(private actions$: Actions, private todoService: TodoService, private store: Store<AppState>) {}
}
