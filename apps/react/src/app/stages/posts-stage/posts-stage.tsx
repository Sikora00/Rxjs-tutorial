import React from 'react';

import './posts-stage.css';
import Posts from '../../components/posts/posts';
import NextStageButton from '../../components/next-stage-button/next-stage-button';
import { Post } from '@rxjs-tutorial/data';
import { of } from 'rxjs';
import { posts } from '@rxjs-tutorial/solutions';

/* tslint:disable:no-empty-interface */
export interface PostsStageProps {}
export interface PostsStageState {
  posts?: Post[];
  src: string;
}

export class PostsStage extends React.Component<
  PostsStageProps,
  PostsStageState
> {
  constructor(props: PostsStageProps) {
    super(props);
    this.state = { src: 'https://jsonplaceholder.typicode.com/posts' };
  }
  componentDidMount() {
    // Prepare http request to get posts
    // use it as an Observabel
    // Solution:
    const source$ = posts(this.state.src)

    // const source$ = of([]);
    source$.subscribe((posts: Post[]) => {
      this.setState({ posts });
    });
  }
  render() {
    return (
      <div className="posts-stage__container">
        <h5>Source component: apps/react/src/app/stages/posts-stage</h5>
        <h2>
          Load and display posts from{' '}
          <a href={this.state.src}>{this.state.src}</a>
        </h2>
        <NextStageButton stage={4} />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default PostsStage;
