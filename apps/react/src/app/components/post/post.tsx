import React from 'react';

import './post.css';
import {
  Card,
  CardContent,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core';
import { Post as PostI, Comment } from '@rxjs-tutorial/data';

/* tslint:disable:no-empty-interface */
export interface PostProps {
  post: PostI;
}

export const Post = (props: PostProps) => {
  const comments: JSX.Element = props.post.comments ? (
    <ol>
      {props.post.comments.map((comment: Comment) => {
        return <li>{comment.body}</li>;
      })}
    </ol>
  ) : null;
  return (
    <div className="container">
      <Card>
        <CardContent>
          <h2>{props.post.title}</h2>
          <p>{props.post.body}</p>
          <ExpansionPanel>
            <ExpansionPanelSummary>Comments</ExpansionPanelSummary>
            <ExpansionPanelDetails>{comments}</ExpansionPanelDetails>
          </ExpansionPanel>
        </CardContent>
      </Card>
    </div>
  );
};

export default Post;
