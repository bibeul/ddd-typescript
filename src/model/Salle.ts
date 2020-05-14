export default class Salle{
    id: string;
    schedules = [];
    constructor(id: string, ) {
        this.id = id;
    }

    setReservation(startReservation: Date, endReservation: Date) {
        this.schedules.push([startReservation, endReservation])
    }
}
