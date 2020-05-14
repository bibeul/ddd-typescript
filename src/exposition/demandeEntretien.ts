export default class defaultEntretien{
    horaire;
    candidatId;
    constructor(horaire, candidatId) {
        this.horaire = horaire;
        this.candidatId = candidatId;
    }

    getHoraireEntretien(){
        return this.horaire;
    }

    getCandidatId(){
        return this.candidatId;
    }
}
