import React from 'react';

import './app.scss';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Welcome from './stages/welcome/welcome';
import ProgressBar from './stages/progress-bar/progress-bar';
import PausableTimer from './stages/pausable-timer/pausable-timer';
import PostsStage from './stages/posts-stage/posts-stage';
import PostCommentsStage from './stages/post-comments-stage/post-comments-stage';
import PostCommentAuthor from './stages/post-comment-author/post-comment-author';
import Introduction from './stages/introduction/introduction';

export const App = () => {
  return (
    <div>
      <Route path="/" exact render={() => <Welcome />} />
      <Route path="/0" exact render={() => <Introduction />} />
      <Route path="/1" exact render={() => <ProgressBar />} />
      <Route path="/2" exact render={() => <PausableTimer />} />
      <Route path="/3" exact render={() => <PostsStage />} />
      <Route path="/4" exact render={() => <PostCommentsStage />} />
      <Route path="/5" exact render={() => <PostCommentAuthor />} />
    </div>
  );
};

export default App;
