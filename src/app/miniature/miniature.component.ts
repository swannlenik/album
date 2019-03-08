import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';
import { Album } from '../models/album.model';
import { IPhoto, Photo } from '../models/photos.model';
import { PhotosService } from '../services/photos.service';
import { isDefined } from '@angular/compiler/src/util';
import * as moment from 'moment';

@Component({
  selector: 'app-miniature',
  templateUrl: './miniature.component.html',
  styleUrls: ['../app.component.less', './miniature.component.less'],
})

export class MiniatureComponent implements OnInit, OnChanges {
  public MAX_VIGNETTE = 0;
  public indiceImage = -1;
  public afficherInformations = false;
  public afficherBlocInformations = true;

  @Input() album: Album;

  constructor(private photosService: PhotosService) {
    this.album = new Album();
  }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    const album: SimpleChange = changes.album;
    this.album = album.currentValue;
    if (isDefined(this.album) && this.album !== null && !this.album.estVide()) {
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

  public zoomerSurImage(index): void {
    this.indiceImage = this.indiceImage === index ? -1 : index;
    this.afficherBlocInformations = false;
  }

  public onQuitterdiaporama(quitter: boolean): void {
    this.indiceImage = -1;
    this.afficherBlocInformations = true;
  }

  public modifierAffichageInformations(): void {
    this.afficherInformations = !this.afficherInformations;
  }
}
