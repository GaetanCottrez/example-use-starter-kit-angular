import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addTodoFailure,
  addTodoSuccess,
  deleteTodoFailure,
  deleteTodoSuccess,
  loadTodosFailure,
  loadTodosSuccess,
  onEditTodo,
  onEditTodoFailure,
  TodoActionTypes,
  toggleTodoFailure,
  toggleTodoSuccess,
  updateTodoFailure,
  updateTodoSuccess
} from '../actions/todo.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TodoService } from '../../../feature/todo/todo.service';
import { Store } from '@ngrx/store';
import { AppState } from '../interfaces/app-state';
import { TodoInterface } from '../../../feature/todo/todo.interface';

@Injectable()
export class TodoEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActionTypes.TODO_LOAD),
      mergeMap(() =>
        this.todoService.load().pipe(
          map(items => loadTodosSuccess({ items: items })),
          catchError(error => of(loadTodosFailure({ error: error.message })))
        )
      )
    )
  );

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActionTypes.TODO_ADD),
      tap((item: TodoInterface) => this.todoService.add(item)),
      map((item: TodoInterface) => addTodoSuccess({ data: item })),
      catchError(error => of(addTodoFailure({ error: error.message })))
    )
  );

  onEditItem$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodoActionTypes.TODO_ON_EDIT),
        tap(console.log),
        tap((item: TodoInterface) => onEditTodo({ data: item })),
        catchError(error => of(onEditTodoFailure({ error: error.message })))
      ),
    { dispatch: false }
  );

  updateItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActionTypes.TODO_UPDATE),
      tap(console.log),
      tap(payload =>
        this.todoService.updateMessage(
          payload.originalItem,
          payload.new_message
        )
      ),
      map(payload =>
        updateTodoSuccess({
          originalItem: payload.originalItem,
          new_message: payload.new_message
        })
      ),
      catchError(error => of(updateTodoFailure({ error: error.message })))
    )
  );

  deleteItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActionTypes.TODO_DELETE),
      tap(console.log),
      tap(payload => this.todoService.delete(payload.item)),
      map(payload => deleteTodoSuccess({ data: payload.item })),
      catchError(error => of(deleteTodoFailure({ error: error.message })))
    )
  );

  toggleItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActionTypes.TODO_TOGGLE),
      tap(console.log),
      tap(payload =>
        this.todoService.toggleCompleted(payload.item, payload.completed)
      ),
      map(payload =>
        toggleTodoSuccess({
          originalItem: payload.item,
          completed: payload.completed
        })
      ),
      catchError(error => of(toggleTodoFailure({ error: error.message })))
    )
  );

  constructor(
    private actions$: Actions,
    private todoService: TodoService,
    private store: Store<AppState>
  ) {}
}
