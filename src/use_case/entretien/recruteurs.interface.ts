import Recruteur from "../../model/Recruteur";

interface Recruteurs{
    findBySkill(skill: string): Recruteur;
    findById(id: string): Recruteur;
    findRecruteurs(): Recruteur[];
    addRecruteur(recruteur: Recruteur): void;
    trouveRecruteursDisponible(horaire): Recruteur[];
}

export default Recruteurs;
