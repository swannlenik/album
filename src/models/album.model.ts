import { IPhoto } from './photos.model';
<<<<<<< HEAD
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { isUndefined } from 'util';

export class Album {
    public id: number;
=======

export class Album {
>>>>>>> ca04ec6d7e7f93275c01593c4aa1b655533e766c
    public titre: string;
    public dossier: string;
    public listePhotos: IPhoto[];

<<<<<<< HEAD
    constructor(id: number, titre: string, dossier: string) {
        this.id = id;
=======
    constructor(titre: string, dossier: string) {
>>>>>>> ca04ec6d7e7f93275c01593c4aa1b655533e766c
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
<<<<<<< HEAD

    public estVide(): boolean {
        return isUndefined(this.id) || this.id === null || this.id <= 0 ||
        isUndefined(this.titre) || this.titre === null || this.titre === '' ||
        isUndefined(this.dossier) || this.dossier === null || this.dossier === '';
    }
=======
>>>>>>> ca04ec6d7e7f93275c01593c4aa1b655533e766c
}
