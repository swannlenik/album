export interface IPhoto {

    nom: string;
    largeur: number;
    hauteur: number;
    extension: string;

    getNom(): string;
}

export class Photo implements IPhoto {

    public nom: string;
    public largeur: number;
    public hauteur: number;
    public extension: string;

    constructor(nom: string, extension: string, largeur: number, hauteur: number) {
        this.nom = nom;
        this.extension = extension;
        this.largeur = largeur;
        this.hauteur = hauteur;
    }

    public getNom(avecExtension: boolean = false) {
        return this.nom + (avecExtension ? '.' + this.extension : '');
    }
}
