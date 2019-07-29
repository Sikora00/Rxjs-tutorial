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
  onCommentsOpen?: (post: PostI) => void;
}

export class Post extends React.Component<PostProps> {
  constructor(props: PostProps) {
    super(props);
    this.handlePanelChange = this.handlePanelChange.bind(this);
  }

  handlePanelChange(e: React.ChangeEvent<{}>, expanded: boolean) {
    if (expanded && this.props.onCommentsOpen) {
      this.props.onCommentsOpen(this.props.post);
    }
  }
  render() {
    const comments: JSX.Element = this.props.post.comments ? (
      <ol>
        {this.props.post.comments.map((comment: Comment) => {
          return <li>{comment.body}</li>;
        })}
      </ol>
    ) : (<div></div>);
    return (
      <div className="container">
        <Card>
          <CardContent>
            <h2>{this.props.post.title}</h2>
            <p>{this.props.post.body}</p>
            <ExpansionPanel onChange={this.handlePanelChange}>
              <ExpansionPanelSummary>Comments</ExpansionPanelSummary>
              <ExpansionPanelDetails>{comments}</ExpansionPanelDetails>
            </ExpansionPanel>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Post;
