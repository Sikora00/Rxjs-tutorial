import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgressBarStageComponent } from './stages/progress-bar/progress-bar.stage.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './stages/welcome/welcome.component';
import { MatProgressBarModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PausableTimerStageComponent } from './stages/pausable-timer/pausable-timer.stage.component';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostCommentsStageComponent } from './stages/post-comments/post-comments.stage.component';
import { PostComponent } from './components/post/post.component';
import { PostsStageComponent } from './stages/posts-stage/posts.stage.component';
@NgModule({
  declarations: [
    AppComponent,
    ProgressBarStageComponent,
    WelcomeComponent,
    PausableTimerStageComponent,
    PostsComponent,
    PostCommentsStageComponent,
    PostComponent,
    PostsStageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
