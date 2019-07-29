import { Component, OnInit, Input } from '@angular/core';
import { Post } from '@rxjs-tutorial/data';

@Component({
  selector: 'rxjs-tutorial-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;
  constructor() { }

  ngOnInit() {
  }

}
