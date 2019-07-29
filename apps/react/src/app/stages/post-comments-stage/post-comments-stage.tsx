import React from 'react';

import './post-comments-stage.css';
import Posts from '../../components/posts/posts';
import { Post } from '@rxjs-tutorial/data';
import { postsWithComments } from '@rxjs-tutorial/solutions';

/* tslint:disable:no-empty-interface */
export interface PostCommentsStageProps {}
export interface PostCommentsStageState {
  commentsSrc: string;
  posts?: Post[];
  postsSrc: string;
}

export class PostCommentsStage extends React.Component<
  PostCommentsStageProps,
  PostCommentsStageState
> {
  posts: Post[];

  constructor(props: PostCommentsStageProps) {
    super(props);
    this.state = {
      commentsSrc: 'https://jsonplaceholder.typicode.com/comments', //?postId=1
      postsSrc: 'https://jsonplaceholder.typicode.com/posts'
    };
  }

  componentDidMount() {
    // Prepare http request to get posts
    // then map received posts to requests for comments
    // and merge all together
    // Solution:
    const source$ = postsWithComments(
      this.state.postsSrc,
      this.state.commentsSrc
    );

    // const source$ = of();
    source$.subscribe((posts: Post[]) => {
      this.setState({ posts });
    });
  }
  render() {
    return (
      <div className="posts-stage__container">
        <h2>
          Load and display posts from{' '}
          <a href={this.state.postsSrc}>{this.state.postsSrc}</a> with comments
          from <a href={this.state.commentsSrc}>{this.state.commentsSrc}?postId=</a>
          <ul>
            <li>loaded all together</li>
            <li>loaded one by one</li>
          </ul>
        </h2>
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default PostCommentsStage;
