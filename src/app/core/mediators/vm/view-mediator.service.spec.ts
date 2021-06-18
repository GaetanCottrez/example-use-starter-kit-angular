import { TestBed } from '@angular/core/testing';

import { ViewMediatorService } from './view-mediator.service';

describe('ViewMediatorService', () => {
  let service: ViewMediatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewMediatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
