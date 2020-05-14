import Candidat from './Candidat'

interface entretiens{
    findByCandidat(candidat: string): Candidat;
    save(entretien: Entretien): void;
}
