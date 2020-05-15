import {Mapper} from "./Mapper.interface";
import SalleDto from "../dto/SalleDto";
import CandidatDto from "../dto/CandidatDto";
import Salle from "../../model/Salle";

export class SalleMapper implements Mapper<Salle, SalleDto> {
    toDTO(salle: Salle): SalleDto {
        return new SalleDto(
            salle.schedules,
            salle.name
        );
    }

    toModel(salleDto: SalleDto): Salle {
        return new Salle(
            salleDto.schedules,
            salleDto.name,
        );
    }
}
