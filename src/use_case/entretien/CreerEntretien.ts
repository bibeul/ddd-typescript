import {Entretien} from "../../model/Entretien";
import Entretiens from "./entretiens.interface";
import Recruteurs from "./recruteurs.interface";
import Salles from "./salles.interface";
import {SalleMapper} from "../../common/mapper/Salle.mapper";
import {EntretienMapper} from "../../common/mapper/Entretien.mapper";
import Candidats from "./candidats.interface";

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

        const dtoSalle = this.salleRepository.trouverSalleLibre(demande.getHoraireEntretien());
        if(!dtoSalle){
            throw new Error('Pas de salle disponible');
        }

        const salle = new SalleMapper().toModel(dtoSalle);

        const candidat = this.candidatRepository.findById(demande.getCandidatId());
        if(!candidat){
            throw new Error('Candidat inexistant');
        }

        const recruteur = listRecruteurs[0];
        if(recruteur.anneeExperience <= candidat.anneeExperience){
            throw new Error('Recruteur inexpérimenté');
        }
        // WHEN
        this.entretien = new Entretien(demande.getHoraireEntretien(), recruteur, salle, candidat, false, false);
        const entretienDto = new EntretienMapper().toDTO(this.entretien);

        // THEN
        this.entretienRepository.addEntretien(entretienDto);
    }
}
