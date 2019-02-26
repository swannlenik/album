import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Browser } from 'protractor';
import { PhotosService } from '../photos.service';
import { Photo } from '../../models/photos.model';
import { Album } from 'src/models/album.model';

@Component({
  selector: 'app-vignette',
  templateUrl: './vignette.component.html',
  styleUrls: ['./vignette.component.less'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        opacity: 0
      })),
      transition('open => closed', [
        animate('1.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class VignetteComponent implements OnInit {
  private indice: number;

  public MAX_VIGNETTE = 0;

  public album: Album;

  constructor(private photosService: PhotosService) {
    this.indice = 0;
    this.album = new Album('New York City - avril/mai 2017', 'NYC');
    this.album.listePhotos = this.photosService.getPhotos(this.album.dossier);
    this.MAX_VIGNETTE = this.album.getNombrePhotos();
   }

  ngOnInit() {  }

  public right(): void {
    this.indice < this.MAX_VIGNETTE - 1 ? this.indice ++ : this.indice = 0;
  }

  public left(): void {
    this.indice > 0 ? this.indice -- : this.indice = this.MAX_VIGNETTE - 1;
  }

  public getIndice(): number {
    return this.indice;
  }

}
