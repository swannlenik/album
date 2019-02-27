import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VignetteComponent } from './vignette/vignette.component';
import { AlbumComponent } from './album/album.component';
import { MiniatureComponent } from './miniature/miniature.component';

@NgModule({
  declarations: [
    AppComponent,
    VignetteComponent,
    AlbumComponent,
    MiniatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
