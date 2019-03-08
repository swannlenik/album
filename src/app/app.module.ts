import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VignetteComponent } from './vignette/vignette.component';
import { AlbumComponent } from './album/album.component';
import { MiniatureComponent } from './miniature/miniature.component';
import { GestionAlbumComponent } from './gestion-album/gestion-album.component';

@NgModule({
  declarations: [
    AppComponent,
    VignetteComponent,
    AlbumComponent,
    MiniatureComponent,
    GestionAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
