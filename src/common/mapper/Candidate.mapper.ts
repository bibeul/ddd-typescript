import Candidat from "../../model/Candidat";
import CandidatDto from "../dto/CandidatDto";
import {Mapper} from "./Mapper.interface";

export class CandidateMapper implements Mapper<Candidat, CandidatDto> {
    toDTO(candidat: Candidat): CandidatDto {
        return new CandidatDto(
            candidat.name,
            candidat.skills,
            candidat.anneeExperience
        );
    }

    toModel(candidatDto: CandidatDto): Candidat {
        return new Candidat(
            candidatDto.name,
            candidatDto.skills,
            candidatDto.anneeExperience
        );
    }
}
