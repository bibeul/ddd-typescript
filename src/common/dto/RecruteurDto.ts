export default class RecruteurDto{
    private _id: string;
    private _name: string;
    private _skills: string[];
    private _anneeExperience: number;

    constructor(name: string, skills: string[], anneeExperience: number) {
        this._name = name;
        this._skills = skills;
        this._anneeExperience = anneeExperience;
    }

    get name(): string {
        return this._name;
    }

    get skills(): string[] {
        return this._skills;
    }

    get id(): string {
        return this._id;
    }

    get anneeExperience(): number {
        return this._anneeExperience;
    }
}
