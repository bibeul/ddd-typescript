import Salle from "../../model/Salle";
import Candidat from "../../model/Candidat";
import Recruteur from "../../model/Recruteur";

export class EntretienDto {
    private _entretienId: string = undefined;
    private _salle: Salle;
    private _horaire: any;
    private _candidat: Candidat;
    private _recruteur: Recruteur;

    constructor(horaire: any, recruteur: Recruteur, salle: Salle, candidat: Candidat) {
        this._entretienId = '_' + Math.random().toString(36).substr(2, 9);
        this._salle = salle;
        this._horaire = horaire;
        this._candidat = candidat;
        this._recruteur = recruteur;
    }


    get entretienId(): string {
        return this._entretienId;
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
}
