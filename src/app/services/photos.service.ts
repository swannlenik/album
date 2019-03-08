import { IPhoto } from '../models/photos.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8000/index.php?c=index&m=photos&id=';
  }

  public getPhotos(idAlbum: number): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(this.url + idAlbum);
  }
}
