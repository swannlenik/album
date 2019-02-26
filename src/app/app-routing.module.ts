import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VignetteComponent } from './vignette/vignette.component';

const routes: Routes = [
  { path: 'vignette', component: VignetteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
