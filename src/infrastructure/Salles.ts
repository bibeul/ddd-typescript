import Salles from "../use_case/entretien/salles.interface";
import SalleDto from "../common/dto/SalleDto";

export default class SalleRepository implements Salles{
    salles: SalleDto[];

    findById(id: string): SalleDto{
        for(const salle of this.salles){
            if(salle.id === id) return salle;
        }
    };
    findAll(): SalleDto[]{
        return this.salles;
    };
    addSalle(salle: SalleDto): void{
        this.salles.push(salle)
    };

    trouverSalleLibre(horaire: [Date, Date]): SalleDto{
        for(const salle of this.salles){
            let reserve = false
            for(const schedule of salle.schedules){
                if((horaire[0] >= schedule[0] && horaire[0] <= schedule[1]) || (horaire[1] >= schedule[1] && horaire[1] <= schedule[0])){
                    reserve = true
                }
                if((horaire[0] <= schedule[0] && horaire[1] >= schedule[0]) || (horaire[0] <= schedule[1] && horaire[1] >= schedule[1])){
                    reserve = true
                }
            }
            if(reserve === false) return salle;
        }
    };
}

