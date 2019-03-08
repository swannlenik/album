export interface IPhoto {
    id: number;
    titre: string;
    description: string;
    extension: string;
    nom: string;
    largeur: number;
    hauteur: number;
    dateCreation: string;
    dateModification: string;

    getNom(avecExtension?: boolean): string;
}

export class Photo implements IPhoto {

    public id: number;
    public titre: string;
    public description: string;
    public extension: string;
    public nom: string;
    public largeur: number;
    public hauteur: number;
    public dateCreation: string;
    public dateModification: string;

    constructor(obj?: any) {
        Object.assign(this, obj);
    }

    public getNom(avecExtension: boolean = false): string {
        return this.nom + (avecExtension ? '.' + this.extension : '');
    }
}
