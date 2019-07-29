import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressBarStageComponent } from './stages/progress-bar/progress-bar.stage.component';
import { WelcomeComponent } from './stages/welcome/welcome.component';
import { PausableTimerStageComponent } from './stages/pausable-timer/pausable-timer.stage.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsStageComponent } from './stages/posts-stage/posts.stage.component';
import { PostCommentsStageComponent } from './stages/post-comments/post-comments.stage.component';
import { PostCommentAuthorComponent } from './stages/post-comment-author/post-comment-author.component';
import { IntroductionComponent } from './stages/introduction/introduction.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: '0', component: IntroductionComponent },
  { path: '1', component: ProgressBarStageComponent },
  { path: '2', component: PausableTimerStageComponent },
  { path: '3', component: PostsStageComponent },
  { path: '4', component: PostCommentsStageComponent },
  { path: '5', component: PostCommentAuthorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
