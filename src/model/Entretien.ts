import Candidat from "./Candidat";
import Recruteur from "./Recruteur";
import Salle from "./Salle";

export class Entretien {
    entretienId: string = undefined;
    salle: Salle;
    horaire: any;
    candidat: Candidat;
    listRecruteurs: Recruteur[];

    constructor(horaire: any, listRecrteurs: Recruteur, salle: Salle, candidat: Candidat) {
        this.entretienId = '_' + Math.random().toString(36).substr(2, 9);
        this.salle = salle;
        this.horaire = horaire;
        this.candidat = candidat;
        this.listRecruteurs = listRecrteurs;
    }
}
