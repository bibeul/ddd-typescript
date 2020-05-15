import {CreerEntretien} from "../../../../use_case/entretien/CreerEntretien";
import demandeEntretien from "../../../../exposition/demandeEntretien";
import RecruteursRepositoryMock from "../../mocks/Recruteurs.mock";
import CandidatsRepositoryMock from "../../mocks/Candidats.mock";
import EntretienRepositoryMock from "../../mocks/Entretiens.mock";
import SallesRepositoryMock from "../../mocks/Salles.mock";
import Salle from "../../../../model/Salle";
import Recruteur from "../../../../model/Recruteur";
import Candidat from "../../../../model/Candidat";
import {EntretienMapper} from "../../../../common/mapper/Entretien.mapper";

describe('CreerEntretien', () => {
    let creerEntretien;
    let demande;
    let recruteursMock: RecruteursRepositoryMock;
    let candidatsMock: CandidatsRepositoryMock;
    let sallesMock: SallesRepositoryMock;
    let entretiensMock: EntretienRepositoryMock;
    let salle: Salle;
    let recruteur: Recruteur;
    let candidat: Candidat;

    beforeAll(() => {
        recruteursMock = new RecruteursRepositoryMock();
        candidatsMock = new CandidatsRepositoryMock();
        sallesMock = new SallesRepositoryMock();
        entretiensMock = new EntretienRepositoryMock();
        salle = new Salle([], 'reunion01');
        recruteur = new Recruteur('Baby Shark', ['C#'], 10);
        candidat = new Candidat('Jean Neymar', ['C#'], 5);
        const horaire = ['18h30', '19h00'];

        creerEntretien = new CreerEntretien(recruteursMock, sallesMock, entretiensMock, candidatsMock);
        demande = new demandeEntretien(horaire, '123');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('devrait appeler toute les fonctions des repositories', () => {
        recruteursMock.trouveRecruteursDisponible.mockReturnValue([recruteur]);
        candidatsMock.findById.mockReturnValue(candidat);
        sallesMock.trouverSalleLibre.mockReturnValue([salle]);
        creerEntretien.creerEntretien(demande);

        expect(recruteursMock.trouveRecruteursDisponible).toBeCalledTimes(1);
        expect(sallesMock.trouverSalleLibre).toBeCalledTimes(1);
        expect(candidatsMock.findById).toBeCalledTimes(1);
        expect(entretiensMock.addEntretien).toBeCalledTimes(1);
    });

    it('devrait renvoyer une erreur car pas de recruteur', () => {
        recruteursMock.trouveRecruteursDisponible.mockReturnValue([]);
        try {
            creerEntretien.creerEntretien(demande)
        }catch(e){
            expect(e).toStrictEqual(new Error('Pas de recruteurs disponible'));
        }
        expect(recruteursMock.trouveRecruteursDisponible).toBeCalledTimes(1);
    });

    it('devrait renvoyer une erreur car pas de salle disponible', () => {
        recruteursMock.trouveRecruteursDisponible.mockReturnValue([recruteur]);
        sallesMock.trouverSalleLibre.mockReturnValue(null);

        try {
            creerEntretien.creerEntretien(demande)
        }catch(e){
            expect(e).toStrictEqual(Error('Pas de salle disponible'));
        }
        expect(recruteursMock.trouveRecruteursDisponible).toBeCalledTimes(1);
        expect(sallesMock.trouverSalleLibre).toBeCalledTimes(1);
    });

    it('devrait renvoyer une erreur car pas de candidat disponible', () => {
        recruteursMock.trouveRecruteursDisponible.mockReturnValue([recruteur]);
        candidatsMock.findById.mockReturnValue(null);
        sallesMock.trouverSalleLibre.mockReturnValue([salle]);

        try {
            creerEntretien.creerEntretien(demande)
        }catch(e){
            expect(e).toStrictEqual(Error('Candidat inexistant'));
        }
        expect(recruteursMock.trouveRecruteursDisponible).toBeCalledTimes(1);
        expect(sallesMock.trouverSalleLibre).toBeCalledTimes(1);

        expect(candidatsMock.findById).toBeCalledTimes(1);
    });

    it('devrait renvoyer une erreur si le recruteur est moins experimente que le candidat', () => {
        const recruteurNonExperimente = new Recruteur('Baby Shark', ['C#'], 2);
        recruteursMock.trouveRecruteursDisponible.mockReturnValue([recruteurNonExperimente]);
        candidatsMock.findById.mockReturnValue(candidat);
        sallesMock.trouverSalleLibre.mockReturnValue([salle]);
        try {
            creerEntretien.creerEntretien(demande)
        }catch(e){
            expect(e).toStrictEqual(new Error('Recruteur inexpérimenté'));
        }

        expect(recruteursMock.trouveRecruteursDisponible).toBeCalledTimes(1);
        expect(sallesMock.trouverSalleLibre).toBeCalledTimes(1);
        expect(candidatsMock.findById).toBeCalledTimes(1);
    });
});
