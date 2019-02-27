import { Component, OnInit, Input, SimpleChange, SimpleChanges, Output, EventEmitter, OnChanges } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Browser } from 'protractor';
import { PhotosService } from '../services/photos.service';
import { Album } from 'src/models/album.model';
import { isDefined } from '@angular/compiler/src/util';

@Component({
  selector: 'app-vignette',
  templateUrl: './vignette.component.html',
  styleUrls: ['../app.component.less', './vignette.component.less'],
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

export class VignetteComponent implements OnChanges, OnInit {

  public MAX_VIGNETTE = 0;

  @Input() album: Album;
  @Input() indice: number;

  @Output() quitterDiaporama = new EventEmitter<boolean>();

  constructor(private photosService: PhotosService) {
    this.album = new Album(0, '', '');
  }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    const album: SimpleChange = changes.album;
    const indice: SimpleChange = changes.indice;

    if (isDefined(indice) && indice !== null) {
      this.indice = indice.currentValue;
    } else {
      this.indice = 0;
    }

    if (isDefined(album) && album !== null) {
      this.album = album.currentValue;
    }

    if (!this.album.estVide()) {
      this.album.listePhotos = this.photosService.getPhotos(this.album.id);
      this.MAX_VIGNETTE = this.album.getNombrePhotos();
    }
   }

  public right(): void {
    this.indice < this.MAX_VIGNETTE - 1 ? this.indice ++ : this.indice = 0;
  }

  public left(): void {
    this.indice > 0 ? this.indice -- : this.indice = this.MAX_VIGNETTE - 1;
  }

  public getIndice(): number {
    return this.indice;
  }

  public quitter(): void {
    this.quitterDiaporama.emit(true);
  }
}
