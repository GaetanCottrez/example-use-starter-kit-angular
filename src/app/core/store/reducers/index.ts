import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { AppState } from '../interfaces/app-state';
import { reducer as TodoReducer } from './todo.reducer';

export const appStateFeatureKey = 'appState';

export const reducers: ActionReducerMap<AppState> = {
  todo: TodoReducer
};

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [debug]
  : [];
