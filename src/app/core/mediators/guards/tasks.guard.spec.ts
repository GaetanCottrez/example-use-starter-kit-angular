import { TestBed } from '@angular/core/testing';

import { TaskGuards } from './task.guards';

describe('TaskGuard', () => {
  let guard: TaskGuards;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TaskGuards);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
