import Candidats from "../../../use_case/entretien/candidats.interface";
import CandidatDto from "../../../common/dto/CandidatDto";

export default class CandidatsRepositoryMock implements Candidats {
    findById = jest.fn();

    addCandidat = jest.fn();
}
