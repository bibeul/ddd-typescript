export default class Candidat{
    name: string;
    skills: string[];
    anneeExperience: number;

    constructor(name: string, skills: string[], anneeExperience: number) {
        this.name = name;
        this.skills = skills;
        this.anneeExperience = anneeExperience;
    }
}
