import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, Comment } from '@rxjs-tutorial/data';
import { from, of } from 'rxjs';
import { switchMap, mergeMap, map, reduce, concatMap } from 'rxjs/operators';
import { postsWithComments } from '@rxjs-tutorial/solutions';

@Component({
  selector: 'rxjs-tutorial-post-comments',
  templateUrl: './post-comments.stage.component.html',
  styleUrls: ['./post-comments.stage.component.css']
})
export class PostCommentsStageComponent implements OnInit {
  posts: Post[];
  readonly commentsSrc = 'https://jsonplaceholder.typicode.com/comments'; //?postId=1
  readonly postsSrc = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    // Prepare http request to get posts
    // then map received posts to requests for comments
    // and merge all together
    // Solution:
    const source$ = postsWithComments(this.postsSrc, this.commentsSrc);

    // const source$ = of();
    source$.subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
}
