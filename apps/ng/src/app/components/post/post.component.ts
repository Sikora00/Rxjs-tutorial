import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '@rxjs-tutorial/data';

@Component({
  selector: 'rxjs-tutorial-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;

  @Output()
  commentsOpen = new EventEmitter<Post>();

  constructor() {}

  ngOnInit() {}

  onCommentsOpen() {
    this.commentsOpen.emit(this.post);
  }
}
