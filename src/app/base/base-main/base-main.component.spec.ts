import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseMainComponent } from './base-main.component';

describe('BaseMainComponent', () => {
  let component: BaseMainComponent;
  let fixture: ComponentFixture<BaseMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseMainComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
