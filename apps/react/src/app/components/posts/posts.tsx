import React from 'react';

import './posts.css';
import { Post as PostI } from '@rxjs-tutorial/data';
import Post from '../post/post';
import { CircularProgress } from '@material-ui/core';

/* tslint:disable:no-empty-interface */
export interface PostsProps {
  posts: PostI[] | undefined;
}

export const Posts = (props: PostsProps) => {
  const posts = props.posts ? (
    props.posts.map((post: PostI) => <Post post={post} />)
  ) : (
    <CircularProgress />
  );
  return <div className="posts">{posts}</div>;
};

export default Posts;
