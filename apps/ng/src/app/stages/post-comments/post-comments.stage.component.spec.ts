import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommentsStageComponent } from './post-comments.stage.component';

describe('PostCommentsComponent', () => {
  let component: PostCommentsStageComponent;
  let fixture: ComponentFixture<PostCommentsStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCommentsStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCommentsStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
