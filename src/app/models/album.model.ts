import { IPhoto } from './photos.model';
import { isUndefined } from 'util';
import * as moment from 'moment';
import { FormGroup } from '@angular/forms';

export class Album {
    public id: number;
    public titre: string;
    public dossier: string;
    public listePhotos: IPhoto[];
    public comments: string;
    public dateCreation: string;
    public dateModification: string;
    public visible: number;
    public active: number;

    static getFromGroup(formGroup: FormGroup): Album {
        let album: Album;
        album = new Album();

        album.id = formGroup.value.idAlbum;
        album.titre = formGroup.value.titreAlbum;
        album.dossier = formGroup.value.dossierAlbum;
        album.comments = formGroup.value.commentsAlbum;
        album.dateCreation = album.id === 0 ? moment().format('YYYY-MM-DD') : formGroup.value.dateCreationAlbum;
        album.dateModification = moment().format('YYYY-MM-DD');
        album.visible = formGroup.value.visibleAlbum;
        album.active = formGroup.value.activeAlbum;

        return album;
    }

    constructor(obj?: any) {
        Object.assign(this, obj);
        this.listePhotos = [];
        this.dateCreation = moment(this.dateCreation).format('DD/MM/YYYY');
        this.dateModification = moment(this.dateModification).format('DD/MM/YYYY');
    }

    public getPhotos(): IPhoto[] {
        return this.listePhotos;
    }

    public getNombrePhotos(): number {
        return this.listePhotos.length;
    }

    public getDossierSourcePhotos(): string {
        return 'assets/img/' + this.dossier + '/';
    }

    public estVide(): boolean {
        return isUndefined(this.id) || this.id === null || this.id <= 0 ||
        isUndefined(this.titre) || this.titre === null || this.titre === '' ||
        isUndefined(this.dossier) || this.dossier === null || this.dossier === '';
    }

}
