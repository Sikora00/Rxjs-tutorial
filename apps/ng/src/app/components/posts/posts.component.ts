import { Component, OnInit, Input } from '@angular/core';
import { Post } from '@rxjs-tutorial/data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'rxjs-tutorial-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input()
  posts: Post[];
}
