import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextStageButtonComponent } from './next-stage-button.component';

describe('NextStageButtonComponent', () => {
  let component: NextStageButtonComponent;
  let fixture: ComponentFixture<NextStageButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextStageButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextStageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
