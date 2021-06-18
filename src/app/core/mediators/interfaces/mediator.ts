import {Observable} from 'rxjs';
import { Action } from './action';

export interface Mediator<S> {
  state$: Observable<S>;

  dispatch(action: Action): void;
}
