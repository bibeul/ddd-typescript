import Salle from "../../model/Salle";

interface Salles{
    findById(id: string): Salle;
    findSalles(): Salle[];
    addSalle(salle: Salle): void;
    trouverSalleLibre(horaire): Salle;
}

export default Salles;
