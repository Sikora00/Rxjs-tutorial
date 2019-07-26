import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './stages/progress-bar/progress-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './stages/welcome/welcome.component';
import { MatProgressBarModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent, ProgressBarComponent, WelcomeComponent],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule, MatProgressBarModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
