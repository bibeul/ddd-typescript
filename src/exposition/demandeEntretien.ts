export default class demandeEntretien{
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
