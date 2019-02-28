import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VignetteComponent } from './vignette/vignette.component';
import { AlbumComponent } from './album/album.component';
import { GestionAlbumComponent } from './gestion-album/gestion-album.component';

const routes: Routes = [
  {path: 'album', component: AlbumComponent},
  {path: 'gestion', component: GestionAlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
