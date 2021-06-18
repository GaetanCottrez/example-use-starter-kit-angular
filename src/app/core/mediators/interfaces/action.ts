import { ActionTypes } from '../action-types';

export interface Action {
  type: ActionTypes;
  payload: any;
}
