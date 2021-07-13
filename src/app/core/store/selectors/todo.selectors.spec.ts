import {
  selectActiveItems,
  selectActiveItemsCount,
  selectCompletedItems,
  selectCompletedItemsCount,
  selectItems,
  selectItemsCount,
  selectErrorTodo,
} from './todo.selectors';
import { AppState } from '../interfaces/app-state';

describe('Selectors', () => {
  const initialState: AppState = {
    todo: {
      items: [
        {
          message: 'Create Nebular TODO demo application',
          completed: true,
          deleted: false,
          inEdit: false
        },
        {
          message: 'Deploy to GitHub',
          completed: true,
          deleted: false,
          inEdit: false
        },
        {
          message: 'Add Firebase integration example',
          completed: false,
          deleted: false,
          inEdit: false
        },
        {
          message: 'Add Dark Theme mode',
          completed: true,
          deleted: false,
          inEdit: false
        },
        {
          message: 'Start working on Nebular 5',
          completed: false,
          deleted: false,
          inEdit: false
        }
      ]
    }
  };

  const initialStateError: AppState = {
    todo: {
      items: [],
      error: 'An unknown error occured in load Todos'
    }
  };

  it('should select all items', () => {
    const result = selectItems.projector(initialState.todo);
    expect(result.length).toEqual(5);
    expect(result[0].message).toEqual('Create Nebular TODO demo application');
    expect(result[4].message).toEqual('Start working on Nebular 5');
  });

  it('should select count items', () => {
    const result = selectItemsCount.projector(initialState.todo);
    expect(result).toEqual(5);
  });

  it('should select active items', () => {
    const result = selectActiveItems.projector(initialState.todo);
    expect(result.length).toEqual(2);
    expect(result[0].message).toEqual('Add Firebase integration example');
    expect(result[1].message).toEqual('Start working on Nebular 5');
  });

  it('should select count active items', () => {
    const result = selectActiveItemsCount.projector(initialState.todo);
    expect(result).toEqual(2);
  });

  it('should select completed items', () => {
    const result = selectCompletedItems.projector(initialState.todo);
    expect(result.length).toEqual(3);
    expect(result[0].message).toEqual('Create Nebular TODO demo application');
    expect(result[1].message).toEqual('Deploy to GitHub');
    expect(result[2].message).toEqual('Add Dark Theme mode');
  });

  it('should select count completed items', () => {
    const result = selectCompletedItemsCount.projector(initialState.todo);
    expect(result).toEqual(3);
  });

  it('should select error todos - not error', () => {
    const result = selectErrorTodo.projector(initialState);
    expect(result).toEqual(undefined);
  });

  it('should select error todos', () => {
    const result = selectErrorTodo.projector(initialStateError.todo);
    expect(result).toEqual('An unknown error occured in load Todos');
  });

});
