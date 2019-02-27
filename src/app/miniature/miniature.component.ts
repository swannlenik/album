import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';
import { Album } from '../../models/album.model';
import { PhotosService } from '../services/photos.service';
import { isDefined } from '@angular/compiler/src/util';

@Component({
  selector: 'app-miniature',
  templateUrl: './miniature.component.html',
  styleUrls: ['../app.component.less', './miniature.component.less'],
})

export class MiniatureComponent implements OnInit, OnChanges {
  public MAX_VIGNETTE = 0;
  public indiceImage = -1;

  @Input() album: Album;

  constructor(private photosService: PhotosService) {
    this.album = new Album(0, '', '');
  }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    const album: SimpleChange = changes.album;
    this.album = album.currentValue;
    if (isDefined(this.album) && this.album !== null && !this.album.estVide()) {
      this.album.listePhotos = this.photosService.getPhotos(this.album.id);
      this.MAX_VIGNETTE = this.album.getNombrePhotos();
    }
  }

  public zoomerSurImage(index): void {
    this.indiceImage = this.indiceImage === index ? -1 : index;
  }

  onQuitterdiaporama(quitter: boolean): void {
    this.indiceImage = -1;
  }
}
