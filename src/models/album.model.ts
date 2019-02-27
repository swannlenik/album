import { IPhoto } from './photos.model';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { isUndefined } from 'util';

export class Album {
    public id: number;
    public titre: string;
    public dossier: string;
    public listePhotos: IPhoto[];

    constructor(id: number, titre: string, dossier: string) {
        this.id = id;
        this.titre = titre;
        this.dossier = dossier;
        this.listePhotos = [];
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
