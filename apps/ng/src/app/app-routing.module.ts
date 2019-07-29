import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressBarStageComponent } from './stages/progress-bar/progress-bar.stage.component';
import { WelcomeComponent } from './stages/welcome/welcome.component';
import { PausableTimerStageComponent } from './stages/pausable-timer/pausable-timer.stage.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsStageComponent } from './stages/posts-stage/posts.stage.component';
import { PostCommentsStageComponent } from './stages/post-comments/post-comments.stage.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: '1', component: ProgressBarStageComponent },
  { path: '2', component: PausableTimerStageComponent },
  { path: '3', component: PostsStageComponent },
  { path: '4', component: PostCommentsStageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
