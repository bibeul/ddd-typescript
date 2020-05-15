import Entretiens from "../use_case/entretien/entretiens.interface";
import {EntretienDto} from "../common/dto/EntretienDto";
import Candidat from "../model/Candidat";

export default class EntretienRepository implements Entretiens {
    entretiens: EntretienDto[];

    findByCandidat(candidat: Candidat): EntretienDto{
        for(const entretien of this.entretiens){
            if(entretien.candidat === candidat) return entretien;
        }
    };

    findById(id: string): EntretienDto{
        for(const entretien of this.entretiens){
            if(entretien.id === id) return entretien;
        }
    };

    findAll(): EntretienDto[]{
        return this.entretiens;
    };

    addEntretien(entretien: EntretienDto): void {
        this.entretiens.push(entretien)
    };
}
