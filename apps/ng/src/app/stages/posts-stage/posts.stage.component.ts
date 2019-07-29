import { Component, OnInit } from '@angular/core';
import { Post } from '@rxjs-tutorial/data';
import { HttpClient } from '@angular/common/http';
import { posts } from '@rxjs-tutorial/solutions';
import { of } from 'rxjs';

@Component({
  selector: 'rxjs-tutorial-posts-stage',
  templateUrl: './posts.stage.component.html',
  styleUrls: ['./posts.stage.component.css']
})
export class PostsStageComponent implements OnInit {
  posts: Post[];
  readonly src = 'https://jsonplaceholder.typicode.com/posts';
  constructor() {}

  ngOnInit() {
    // Prepare http request to get posts
    // use it as an Observabel
    // Solution:
    // const source$ = posts(this.http, this.src)

    const source$ =  of([]);
    source$.subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
}
