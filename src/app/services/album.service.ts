import { Injectable } from '@angular/core';
import { Album } from 'src/models/album.model';
import { isUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  public getAlbums(idAlbum?: number): Album[] {
    let albums: Album[] = [];
    if (isUndefined(idAlbum) || idAlbum === null || idAlbum <= 1) {
      albums.push(new Album(1, 'Vienne - week-end du 14 juillet 2016', 'vienne'));
    }
    if (isUndefined(idAlbum) || idAlbum === null || idAlbum !== 1) {
      albums.push(new Album(2, 'New-York City - Avril/mai 2017', 'NYC'));
    }
    return albums;
  }

  public enregistrerAlbum(album: Album): boolean {
    return true;
  }
}
