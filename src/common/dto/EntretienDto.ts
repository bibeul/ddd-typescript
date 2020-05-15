import Salle from "../../model/Salle";
import Candidat from "../../model/Candidat";
import Recruteur from "../../model/Recruteur";

export class EntretienDto {
    private _id: string;
    private _salle: Salle;
    private _horaire: any;
    private _candidat: Candidat;
    private _recruteur: Recruteur;
    private _estAnnule: boolean;
    private _estConfirme: boolean;

    constructor(horaire: any, recruteur: Recruteur, salle: Salle, candidat: Candidat, estAnnule: boolean, estConfirme: boolean) {
        this._id = '_' + Math.random().toString(36).substr(2, 9);
        this._salle = salle;
        this._horaire = horaire;
        this._candidat = candidat;
        this._recruteur = recruteur;
        this._estAnnule = estAnnule;
        this._estConfirme = estConfirme;
    }

    get id(): string{
        return this._id;
    }

    get salle(): Salle {
        return this._salle;
    }

    get horaire(): any {
        return this._horaire;
    }

    get candidat(): Candidat {
        return this._candidat;
    }

    get recruteur(): Recruteur {
        return this._recruteur;
    }

    get estConfirme(): boolean{
        return this._estConfirme
    }

    get estAnnule(): boolean{
        return this._estAnnule;
    }
}
