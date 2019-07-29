import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommentAuthorComponent } from './post-comment-author.component';

describe('PostCommentAuthorComponent', () => {
  let component: PostCommentAuthorComponent;
  let fixture: ComponentFixture<PostCommentAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCommentAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCommentAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
