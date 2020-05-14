import Entretiens from "../use_case/entretien/entretiens.interface";
import Candidat from "../model/Candidat";
import {Entretien} from "../model/Entretien";

export default class CandidatsRepository implements Entretiens {
    entretiens: Entretien[];

    findByCandidat(candidat: string): Candidat{
        return;
    };

    findById(id: string): Candidat{
        return;
    };

    findEntretiens(): Entretien[]{
        return;
    };

    addEntretien(entretien: Entretien): void {
        this.entretiens.push(entretien)
    };
}
