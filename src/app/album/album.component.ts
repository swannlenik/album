import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';
import * as moment from 'moment';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['../app.component.less', './album.component.less'],
})
export class AlbumComponent implements OnInit {

  public albums: Album[];
  public idAlbumSelectionne: number;
  public albumSelectionne: Album;

  constructor(private albumService: AlbumService) {
    this.albums = [];
    this.albumService.getAlbums().subscribe((albums: Album[]) => {
      albums.map(item => {
        let album: Album;
        album = new Album();

        album.id = item.id;
        album.titre = item.titre;
        album.dossier = item.dossier;
        album.comments = item.comments;
        album.dateCreation = moment(item.dateCreation).format('DD/MM/YYYY');
        album.dateModification = moment(item.dateModification).format('DD/MM/YYYY');
        album.visible = item.visible;
        album.active = item.active;
        album.listePhotos = [];
        this.albums.push(album);
      });
      console.log('Retour HTTP : ', albums);
      this.idAlbumSelectionne = 0;
    });
  }

  ngOnInit() {
  }

  public selectionnerAlbum(album: Album): void {
    this.idAlbumSelectionne = album.id;
    this.albumSelectionne = album;
  }

}
