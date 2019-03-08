import { Component, OnInit, Input, SimpleChange, SimpleChanges, Output, EventEmitter, OnChanges } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { PhotosService } from '../services/photos.service';
import { IPhoto, Photo } from '../models/photos.model';
import { Album } from '../models/album.model';
import { isDefined } from '@angular/compiler/src/util';
import * as moment from 'moment';

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

  public afficherInformations: boolean;

  constructor(private photosService: PhotosService) {
    this.album = new Album();
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
      this.photosService.getPhotos(this.album.id).subscribe((photos: IPhoto[]) => {
        this.album.listePhotos = [];
        photos.map(item => {
          let photo: IPhoto;
          photo = new Photo();
          photo.nom = item.nom;
          photo.extension = item.extension;
          photo.largeur = item.largeur;
          photo.hauteur = item.hauteur;
          photo.description = item.description;
          photo.titre = item.titre;
          photo.dateCreation = moment(item.dateCreation).format('DD/MM/YYYY');
          photo.dateModification = moment(item.dateModification).format('DD/MM/YYYY');
          this.album.listePhotos.push(photo);
        });
        this.MAX_VIGNETTE = this.album.getNombrePhotos();
      });
    }
   }

  public right(): void {
    this.indice < this.MAX_VIGNETTE - 1 ? this.indice ++ : this.indice = 0;
    this.afficherInformations = false;
  }

  public left(): void {
    this.indice > 0 ? this.indice -- : this.indice = this.MAX_VIGNETTE - 1;
    this.afficherInformations = false;
  }

  public getIndice(): number {
    return this.indice;
  }

  public quitter(): void {
    this.quitterDiaporama.emit(true);
  }

  public modifierAffichageInformations(): void {
    this.afficherInformations = !this.afficherInformations;
  }
}
