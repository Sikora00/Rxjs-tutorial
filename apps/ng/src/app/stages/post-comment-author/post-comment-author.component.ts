import { Component, OnInit } from '@angular/core';
import { Post, Comment } from '@rxjs-tutorial/data';
import { postCommentAuthor } from '@rxjs-tutorial/solutions';
import { Subject, from, of } from 'rxjs';

@Component({
  selector: 'rxjs-tutorial-post-comment-author',
  templateUrl: './post-comment-author.component.html',
  styleUrls: ['./post-comment-author.component.css']
})
export class PostCommentAuthorComponent implements OnInit {
  posts: Post[];
  progress = new Subject<number>();
  selectedPost = new Subject<Post>();
  readonly authorSrc = 'https://jsonplaceholder.typicode.com/users'; // /id
  readonly commentsSrc = 'https://jsonplaceholder.typicode.com/comments'; //?postId=1
  readonly postsSrc = 'https://jsonplaceholder.typicode.com/posts';

  constructor() {}

  ngOnInit() {
    // Prepare http request to get posts
    // Load athor of each post
    // Display progres of loading
    // Fix bug in onCommentsOpen
    // Solution:
    // const source$ = postCommentAuthor.bind(this)(
    //   this.postsSrc,
    //   this.commentsSrc,
    //   this.authorSrc,
    //   this.progress
    // );

    const source$ = of();
    source$.subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  onCommentsOpen(post: Post) {
    // It's not a best solution.
    // Just add one operator to avoid multiplying requests
    this.selectedPost.subscribe((post: Post) => {
      from(
        fetch(this.commentsSrc + '?postId=' + post.id).then(res => res.json())
      ).subscribe((comments: Comment[]) => {
        this.posts.forEach((p: Post) => {
          if (p.id === post.id) {
            p.comments = comments;
          }
        });
      });
    });
    this.selectedPost.next(post);
  }
}
