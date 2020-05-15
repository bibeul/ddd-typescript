import CandidatDto from "../common/dto/CandidatDto";
import Candidats from "../use_case/entretien/candidats.interface";

export default class CandidatsRepository implements Candidats {
    candidats: CandidatDto[];

    findById(id: string): CandidatDto{
        for(const candidat of this.candidats){
            if(candidat.id === id) return candidat;
        }
    };

    addCandidat(candidat: CandidatDto): void {
        this.candidats.push(candidat)
    };
}
