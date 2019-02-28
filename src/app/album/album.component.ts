import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../../models/album.model';

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
    this.albums = this.albumService.getAlbums();
    this.idAlbumSelectionne = 0;
  }

  ngOnInit() {
  }

  public selectionnerAlbum(album: Album): void {
    this.idAlbumSelectionne = album.id;
    this.albumSelectionne = album;
  }

}
