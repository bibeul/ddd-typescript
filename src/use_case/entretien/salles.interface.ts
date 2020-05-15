import Salle from "../../model/Salle";
import SalleDto from "../../common/dto/SalleDto";

interface Salles{
    findById(id: string): SalleDto;
    findAll(): SalleDto[];
    addSalle(salle: SalleDto): void;
    trouverSalleLibre(horaire): SalleDto;
}

export default Salles;
