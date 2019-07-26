import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PausableTimerComponent } from './pausable-timer.component';

describe('PausableTimerComponent', () => {
  let component: PausableTimerComponent;
  let fixture: ComponentFixture<PausableTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PausableTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PausableTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
