import {Mapper} from "./Mapper.interface";
import {Entretien} from "../../model/Entretien";
import {EntretienDto} from "../dto/EntretienDto";
import Recruteur from "../../model/Recruteur";
import Salle from "../../model/Salle";
import Candidat from "../../model/Candidat";

export class EntretienMapper implements Mapper<Entretien, EntretienDto> {
    toDTO(entretien: Entretien): EntretienDto {
        return new EntretienDto(
            entretien.horaire,
            entretien.recruteur,
            entretien.salle,
            entretien.candidat,
            entretien.estAnnule,
            entretien.estConfirme
        );
    }

    toModel(entretienDto: EntretienDto): Entretien {
        return new Entretien(
            entretienDto.horaire,
            entretienDto.recruteur,
            entretienDto.salle,
            entretienDto.candidat,
            entretienDto.estAnnule,
            entretienDto.estConfirme,
        );
    }
}
