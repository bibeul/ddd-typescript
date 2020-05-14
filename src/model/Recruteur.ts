export default class Recruteur{
    name: string;
    skills: string[];
    anneeExperience: number;

    constructor(name: string, skills: string[], anneeExperience: number) {
        this.name = name;
        this.skills = skills;
        this.anneeExperience = anneeExperience;
    }
}
