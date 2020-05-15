import Recruteurs from "../use_case/entretien/recruteurs.interface";
import RecruteurDto from "../common/dto/RecruteurDto";

export default class RecruteursRepository implements Recruteurs {
    recruteurs: RecruteurDto[];

    findById(id: string): RecruteurDto{
        for(const recruteur of this.recruteurs){
            if(recruteur.id === id) return recruteur;
        }
    };

    addRecruteur(recruteur: RecruteurDto): void {
        this.recruteurs.push(recruteur)
    }

    findRecruteurs(): RecruteurDto[] {
        return [];
    }

    trouveRecruteursDisponible(horaire): RecruteurDto[] {
        return [];
    }
}
