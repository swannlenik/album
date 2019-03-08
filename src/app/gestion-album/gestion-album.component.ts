import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { isDefined } from '@angular/compiler/src/util';
import { timer } from 'rxjs';

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
  public commentsAlbum: FormControl;
  public visibleAlbum: FormControl;
  public activeAlbum: FormControl;

  public formGroupAlbum: FormGroup;

  public afficherMessageService: boolean;
  public messageService: string;
  private delaiAffichageMessage = 3000;

  constructor(private albumService: AlbumService) {
    this.afficherMessageService = false;
    this.messageService = '';

    this.idAlbum = new FormControl(0);
    this.titreAlbum = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.dossierAlbum = new FormControl('', [Validators.required]);
    this.commentsAlbum = new FormControl('');
    this.visibleAlbum = new FormControl(true);
    this.activeAlbum = new FormControl(true);

    this.listeAlbums = [];
    this.listeAlbums.push(new Album({id: 0, titre: 'Nouvel Album'}));
    this.albumService.getAlbums().subscribe((albums: Album[]) => {
      albums.map(item => {
        let album: Album;
        album = new Album();

        album.id = item.id;
        album.titre = item.titre;
        album.dossier = item.dossier;
        album.comments = item.comments;
        album.dateCreation = item.dateCreation;
        album.dateModification = item.dateModification;
        album.visible = item.visible;
        album.active = item.active;
        album.listePhotos = [];
        this.listeAlbums.push(album);

        console.log('albums : ', this.listeAlbums);
      });
    });

    this.formGroupAlbum = new FormGroup({
      idAlbum: this.idAlbum,
      titreAlbum: this.titreAlbum,
      dossierAlbum: this.dossierAlbum,
      commentsAlbum: this.commentsAlbum,
      activeAlbum: this.activeAlbum,
      visibleAlbum: this.visibleAlbum
    });
  }

  ngOnInit() {
  }

  public enregistrerAlbum(): void {
    console.log('Enregistré ! ', this.formGroupAlbum.value);
    console.log(this.formGroupAlbum.value.idAlbum > 0 ? 'Modifier existant' : 'Crééer nouveau');

    let album: Album;
    album = Album.getFromGroup(this.formGroupAlbum);
    this.albumService.saveAlbum(album).subscribe((resultat: any) => {
      // console.log(resultat.result ? 'OK' : 'KO');
      if (album.id === 0) {
        album.id = resultat.id;
        this.listeAlbums.push(album);
        this.afficherMessageServiceDansAlert('Album ajouté !');
      } else {
        let idElement: number;
        idElement = this.listeAlbums.findIndex((element) => {
          return element.id === this.idAlbum.value;
        });
        this.listeAlbums[idElement].titre = this.titreAlbum.value;
        this.listeAlbums[idElement].dossier = this.dossierAlbum.value;
        this.listeAlbums[idElement].comments = this.commentsAlbum.value;
        this.listeAlbums[idElement].active = this.activeAlbum.value ? 1 : 0;
        this.listeAlbums[idElement].visible = this.visibleAlbum.value ? 1 : 0;
        this.afficherMessageServiceDansAlert('Album modifié !');
      }
    });
  }

  private afficherMessageServiceDansAlert(message: string): void {
    this.messageService = message;
    this.afficherMessageService = true;
    const decompte = timer(this.delaiAffichageMessage);
    decompte.subscribe(() => {
      this.messageService = '';
      this.afficherMessageService = false;
    });
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
    this.commentsAlbum.setValue(this.listeAlbums[index].comments);
    this.activeAlbum.setValue(this.listeAlbums[index].active === 1 ? true : false);
    this.visibleAlbum.setValue(this.listeAlbums[index].visible === 1 ? true : false);
  }

  public supprimerAlbum(): void {
    if (confirm('Voulez-vous supprimer définitivement cet album ?')) {
      console.log('idAlbum : ', this.idAlbum.value);
      let idElement: number;
      idElement = this.listeAlbums.findIndex((element) => {
        return element.id === this.idAlbum.value;
      });
      this.listeAlbums.splice(idElement, 1);
      this.albumService.supprimerAlbum(this.idAlbum.value).subscribe(() => {
        this.afficherMessageServiceDansAlert('Album supprimé !');
        this.selectionnerAlbum(0);
      });
    }
  }
}
