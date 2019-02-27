import { Injectable } from '@angular/core';
import { IPhoto, Photo } from '../models/photos.model';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private listePhotos: IPhoto[];

  constructor() { }

  public getPhotos(nomAlbum: string): IPhoto[] {
    this.listePhotos = [];

    if (nomAlbum === 'vienne') {
      this.listePhotos.push(new Photo('coin_coin_001', 'JPG', 2736, 3648));
      this.listePhotos.push(new Photo('coin_coin_002', 'JPG', 2736, 3648));
      this.listePhotos.push(new Photo('coin_coin_003', 'JPG', 3648, 2736));
      this.listePhotos.push(new Photo('coin_coin_004', 'JPG', 3648, 2736));
      this.listePhotos.push(new Photo('coin_coin_005', 'JPG', 3648, 2736));
    } else if (nomAlbum === 'NYC') {
      this.listePhotos.push(new Photo('20180426-001', 'JPG', 2736, 3648));
      this.listePhotos.push(new Photo('20180426-002', 'JPG', 2736, 3648));
      this.listePhotos.push(new Photo('20180426-003', 'JPG', 2736, 3648));
      this.listePhotos.push(new Photo('20180426-004', 'JPG', 2736, 3648));
      this.listePhotos.push(new Photo('20180426-005', 'JPG', 2736, 3648));
      this.listePhotos.push(new Photo('20180426-006', 'JPG', 2736, 3648));
      this.listePhotos.push(new Photo('20180426-007', 'JPG', 3648, 2736));
    }

    return this.listePhotos;
  }
}
