import { Injectable } from '@angular/core';
import { Album } from 'src/models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  public getAlbums(): Album[] {
    let albums: Album[] = [];
    albums.push(new Album(1, 'Vienne - week-end du 14 juillet 2016', 'vienne'));
    albums.push(new Album(2, 'New-York City - Avril/mai 2017', 'NYC'));
    return albums;
  }
}
