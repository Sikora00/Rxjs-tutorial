import React, { Component } from 'react';

import './post-comment-author.css';
import { Post, Comment } from '@rxjs-tutorial/data';
import Posts from '../../components/posts/posts';
import { of, from, Subject } from 'rxjs';
import { postCommentAuthor } from '@rxjs-tutorial/solutions';
import { LinearProgress } from '@material-ui/core';

/* tslint:disable:no-empty-interface */
export interface PostCommentAuthorProps {}
export interface PostCommentAuthorState {
  authorSrc: string;
  commentsSrc: string;
  posts?: Post[];
  postsSrc: string;
  progress: number;
  progress$: Subject<number>;
  selectedPost: Subject<Post>;
}

export class PostCommentAuthor extends Component<
  PostCommentAuthorProps,
  PostCommentAuthorState
> {
  constructor(props: PostCommentAuthorProps) {
    super(props);
    this.state = {
      authorSrc: 'https://jsonplaceholder.typicode.com/users', // /id
      commentsSrc: 'https://jsonplaceholder.typicode.com/comments', //?postId=1
      postsSrc: 'https://jsonplaceholder.typicode.com/posts',
      progress: 0,
      progress$: new Subject<number>(),
      selectedPost: new Subject<Post>()
    };
    this.onCommentsOpen = this.onCommentsOpen.bind(this);
  }

  componentDidMount() {
    // Prepare http request to get posts
    // Load athor of each post
    // Display progres of loading
    // Fix bug in onCommentsOpen
    // Solution:
    const source$ = postCommentAuthor.bind(this)(
      this.state.postsSrc,
      this.state.commentsSrc,
      this.state.authorSrc,
      this.state.progress$
    );

    // const source$ = of();
    source$.subscribe((posts: Post[]) => {
      this.setState({ posts });
    });
    this.state.progress$.subscribe((value: number) => {
      this.setState({ progress: value });
    });
  }

  onCommentsOpen(post: Post) {
    // It's not a best solution.
    // Just add one operator to avoid multiplying requests
    this.state.selectedPost.subscribe((post: Post) => {
      from(
        fetch(this.state.commentsSrc + '?postId=' + post.id).then(res =>
          res.json()
        )
      ).subscribe((comments: Comment[]) => {
        const posts = this.state.posts.map((p: Post) => {
          if (p.id === post.id) {
            p.comments = comments;
          }
          return p;
        });
        this.setState({ posts });
      });
    });
    this.state.selectedPost.next(post);
  }
  render() {
    return (
      <div className="posts-stage__container">
        <h5>Source component: apps/react/src/app/stages/post-comment-author</h5>
        <h2>
          Load and display posts from{' '}
          <a href={this.state.postsSrc}>{this.state.postsSrc}</a> with comments
          from{' '}
          <a href={this.state.commentsSrc}>{this.state.commentsSrc}?postId=</a>
          <ul>
            <li>loaded all together</li>
            <li>loaded one by one</li>
          </ul>
        </h2>
        <LinearProgress variant="determinate" value={this.state.progress} />
        <Posts onCommentsOpen={this.onCommentsOpen} posts={this.state.posts} />
      </div>
    );
  }
}

export default PostCommentAuthor;
