import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './stages/progress-bar/progress-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './stages/welcome/welcome.component';
import { MatProgressBarModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PausableTimerComponent } from './stages/pausable-timer/pausable-timer.component';
@NgModule({
  declarations: [AppComponent, ProgressBarComponent, WelcomeComponent, PausableTimerComponent],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule, MatProgressBarModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
