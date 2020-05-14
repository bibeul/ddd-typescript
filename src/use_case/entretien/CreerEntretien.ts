import {Entretien} from "../../model/Entretien";
import Candidats from "../../infrastructure/Candidats";
import Entretiens from "./entretiens.interface";
import Recruteurs from "./recruteurs.interface";
import Salles from "./salles.interface";

export class CreerEntretien {
    entretien: Entretien;
    recruteurRepository: Recruteurs;
    salleRepository: Salles;
    entretienRepository: Entretiens;
    candidatRepository: Candidats;

    constructor(recruteurRepository: Recruteurs, salleRepository: Salles, entretienRepository: Entretiens, candidatRepository: Candidats) {
        this.recruteurRepository = recruteurRepository;
        this.salleRepository = salleRepository;
        this.entretienRepository = entretienRepository;
        this.candidatRepository = candidatRepository;
        this.entretien = undefined;
    }

    creerEntretien(demande): void {
        // GIVEN
        const listRecruteurs = this.recruteurRepository.trouveRecruteursDisponible(demande.getHoraireEntretien());
        if(listRecruteurs.length <= 0 ){
            throw new Error('Pas de recruteurs disponible');
        }

        // faire un agrégat salle côté entretien
        const salle = this.salleRepository.trouverSalleLibre(demande.getHoraireEntretien());
        const candidat = this.candidatRepository.findById(demande.getCandidatId());

        // WHEN
        this.entretien = new Entretien(demande.getHoraireEntretien(), listRecruteurs[0], salle, candidat);
        // THEN
        this.entretienRepository.addEntretien(this.entretien);
    }
}
