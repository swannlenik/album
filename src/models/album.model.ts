import { IPhoto } from './photos.model';

export class Album {
    public titre: string;
    public dossier: string;
    public listePhotos: IPhoto[];

    constructor(titre: string, dossier: string) {
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
}
