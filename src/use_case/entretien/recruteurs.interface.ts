import RecruteurDto from "../../common/dto/RecruteurDto";

interface Recruteurs{
    findById(id: string): RecruteurDto;
    findRecruteurs(): RecruteurDto[];
    addRecruteur(recruteur: RecruteurDto): void;
    trouveRecruteursDisponible(horaire): RecruteurDto[];
}

export default Recruteurs;
