import Entretiens from "../../../use_case/entretien/entretiens.interface";

export default class EntretienRepositoryMock implements Entretiens {
    findByCandidat = jest.fn();

    findById = jest.fn();

    findAll = jest.fn();

    addEntretien = jest.fn();
}
