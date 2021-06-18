import { Injectable } from '@angular/core';
import { Mediator } from '../interfaces/mediator';
import { ApplicationState } from '../interfaces/application-state';
import { combineLatest } from 'rxjs';
import { Action } from '../interfaces/action';
import { TaskService } from '../../functionnal/task.service';
import { MessageService } from '../../functionnal/message.service';
import { map, tap } from 'rxjs/operators';
import {ActionTypes} from "../action-types";

@Injectable()
export class ViewMediatorService implements Mediator<ApplicationState> {
  constructor(public task: TaskService, public message: MessageService) {}

  state$ = combineLatest([this.message.data$, this.task.data$]).pipe(
    tap(console.log),
    map(obs$ => ({ messages: obs$[0], tasks: obs$[1] }))
  );

  dispatch(action: Action): void {
    console.groupCollapsed('Mediation');
    console.table(action);
    console.groupEnd();
    switch (action.type) {
      case ActionTypes.MESSAGE_LOAD_FAILURE:
        break;
      case ActionTypes.MESSAGE_LOAD_REQUEST:
        break;
      case ActionTypes.MESSAGE_LOAD_SUCCESS:
        break;
      case ActionTypes.TASK_LOAD_FAILURE:
        break;
      case ActionTypes.TASK_LOAD_REQUEST:
        break;
      case ActionTypes.TASK_LOAD_SUCCESS:
        break;
    }
  }
}
