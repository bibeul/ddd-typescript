import CandidatDto from "../../common/dto/CandidatDto";

export default interface Candidats {
    findById(id: string): CandidatDto;
    addCandidat(entretien: CandidatDto): void;
}
