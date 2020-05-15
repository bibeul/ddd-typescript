import Candidat from "./Candidat";
import Recruteur from "./Recruteur";
import Salle from "./Salle";
import {EntretienMapper} from "../common/mapper/Entretien.mapper";

export class Entretien {
    entretienId: string = undefined;
    salle: Salle;
    horaire: any;
    candidat: Candidat;
    recruteur: Recruteur;
    estConfirme: boolean;
    estAnnule: boolean;

    constructor(horaire: any, recruteur: Recruteur, salle: Salle, candidat: Candidat, estAnnule, estConfirme) {
        this.entretienId = '_' + Math.random().toString(36).substr(2, 9);
        this.horaire = horaire;
        this.candidat = candidat;
        this.recruteur = recruteur;
        this.salle = salle;
        this.estAnnule = estAnnule;
        this.estConfirme = estConfirme;
    }

    confirmerEntretien(){
        this.estConfirme = true;
    }

    annulerEntretien(){
        this.estAnnule = true;
    }
}
