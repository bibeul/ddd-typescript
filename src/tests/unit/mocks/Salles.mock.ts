import Salles from "../../../use_case/entretien/salles.interface";

export default class SallesRepositoryMock implements Salles{
    findById = jest.fn();

    findAll = jest.fn();

    addSalle = jest.fn();

    trouverSalleLibre = jest.fn();
}

