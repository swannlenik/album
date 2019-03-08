import { Injectable } from '@angular/core';
import { Album } from '../models/album.model';
import { isUndefined } from 'util';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { isDefined } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private urlGet: string;
  private urlPost: string;
  private urlDelete: string;

  constructor(private http: HttpClient) {
    this.urlGet = 'http://localhost:8000/index.php?c=index&m=albums&id=';
    this.urlPost = 'http://localhost:8000/index.php?c=index&m=creerAlbum';
    this.urlDelete = 'http://localhost:8000/index.php?c=index&m=supprimerAlbum';
  }

  public getAlbums(idAlbum?: number): Observable<Album[]> {
    let urlComplet = this.urlGet;
    if (isDefined(idAlbum) && idAlbum !== null) {
      urlComplet = urlComplet + idAlbum.toString();
    }
    return this.http.get<Album[]>(urlComplet);
  }

  public enregistrerAlbum(album: Album): boolean {
    return true;
  }

  public saveAlbum(album: Album): Observable<any> {
    return this.http.post<any>(this.urlPost, album);
  }

  public supprimerAlbum(idAlbum: number): Observable<any> {
    const obj = {id: idAlbum};
    return this.http.post<any>(this.urlDelete, obj);
  }
}
