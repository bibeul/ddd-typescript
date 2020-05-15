import Recruteurs from "../../../use_case/entretien/recruteurs.interface";

export default class RecruteursRepositoryMock implements Recruteurs {
    findById = jest.fn();

    addRecruteur = jest.fn();

    findBySkill = jest.fn();

    findRecruteurs = jest.fn();

    trouveRecruteursDisponible = jest.fn();
}
