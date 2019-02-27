import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VignetteComponent } from './vignette/vignette.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  {path: 'vignette', component: VignetteComponent},
  {path: 'album', component: AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
