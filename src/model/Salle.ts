import {SalleMapper} from "../common/mapper/Salle.mapper";

export default class Salle{
    id: string;
    name: string;
    schedules = [];

    constructor(schedules: any[], name: string) {
        this.name = name;
        this.schedules = schedules;
        this.id = '_' + Math.random().toString(36).substr(2, 9);
    }

    reserverSalle(startReservation: Date, endReservation: Date) {
        this.schedules.push([startReservation, endReservation])
    }
}
