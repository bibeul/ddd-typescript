import Candidat from '../../model/Candidat'
import {Entretien} from "../../model/Entretien";

interface Entretiens{
    findByCandidat(candidat: string): Candidat;
    findById(id: string): Candidat;
    findEntretiens(): Entretien[];
    addEntretien(entretien: Entretien): void;
}

export default Entretiens;
