import {Mapper} from "./Mapper.interface";
import Recruteur from "../../model/Recruteur";
import RecruteurDto from "../dto/RecruteurDto";

export class RecruteurMapper implements Mapper<Recruteur, RecruteurDto> {
    toDTO(recruteur: Recruteur): RecruteurDto {
        return new RecruteurDto(
            recruteur.name,
            recruteur.skills,
            recruteur.anneeExperience
        );
    }

    toModel(recruteurDto: RecruteurDto): Recruteur {
        return new Recruteur(
            recruteurDto.name,
            recruteurDto.skills,
            recruteurDto.anneeExperience
        );
    }
}
