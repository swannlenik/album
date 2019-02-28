import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from 'src/models/album.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { isDefined } from '@angular/compiler/src/util';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { isUndefined } from 'util';

@Component({
  selector: 'app-gestion-album',
  templateUrl: './gestion-album.component.html',
  styleUrls: ['../app.component.less', './gestion-album.component.less']
})
export class GestionAlbumComponent implements OnInit {

  listeAlbums: Album[];

  public albumSelectionne = false;

  public idAlbum: FormControl;
  public titreAlbum: FormControl;
  public dossierAlbum: FormControl;
  public formGroupAlbum: FormGroup;

  constructor(private albumService: AlbumService) {
    this.idAlbum = new FormControl(0);
    this.titreAlbum = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.dossierAlbum = new FormControl('', [Validators.required]);

    this.listeAlbums = [];
    this.listeAlbums = this.albumService.getAlbums();
    this.listeAlbums.push(new Album(0, 'Nouvel album', ''));
    this.formGroupAlbum = new FormGroup({
      idAlbum: this.idAlbum,
      titreAlbum: this.titreAlbum,
      dossierAlbum: this.dossierAlbum
    });
  }

  ngOnInit() {
  }

  public enregistrerAlbum(): void {
    console.log('Enregistré ! ', this.formGroupAlbum.value);
  }

  public messageErreurTitre(): string {
    let message = '';
    if (isDefined(this.titreAlbum.errors)) {
      if (isDefined(this.titreAlbum.errors.required) &&
          this.titreAlbum.errors.required !== null &&
          this.titreAlbum.errors.required === true) {
        message = 'Champ \'Titre\' requis !';
      } else if (isDefined(this.titreAlbum.errors.minlength) &&
          this.titreAlbum.errors.minlength !== null) {
        message = 'Champ \'Titre\' Trop court ! ' + this.titreAlbum.errors.minlength.requiredLength + ' caractères minimum !';
      }
    }
    return message;
  }

  public messageErreurDossier(): string {
    let message = '';
    if (isDefined(this.dossierAlbum.errors)) {
      if (isDefined(this.dossierAlbum.errors.required) &&
          this.dossierAlbum.errors.required !== null &&
          this.dossierAlbum.errors.required === true) {
        message = 'Champ \'Dossier\' requis !';
      }
    }
    return message;
  }

  public selectionnerAlbum(index: number): void {
    this.albumSelectionne = index >= 0 ? true : false;
    this.idAlbum.setValue(this.listeAlbums[index].id);
    this.titreAlbum.setValue(this.listeAlbums[index].titre);
    this.dossierAlbum.setValue(this.listeAlbums[index].dossier);
  }

}
