import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressBarComponent } from './stages/progress-bar/progress-bar.component';
import { WelcomeComponent } from './stages/welcome/welcome.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent, pathMatch: 'full' },
    { path: '1', component: ProgressBarComponent },
    { path: '2', component: ProgressBarComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }