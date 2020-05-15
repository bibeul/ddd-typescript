import {Entretien} from "../../model/Entretien";
import {EntretienDto} from "../../common/dto/EntretienDto";
import Candidat from "../../model/Candidat";

interface Entretiens{
    findByCandidat(candidat: Candidat): EntretienDto;
    findById(id: string): EntretienDto;
    findAll(): EntretienDto[];
    addEntretien(entretien: EntretienDto): void;
}

export default Entretiens;
