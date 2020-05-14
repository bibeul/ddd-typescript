export default class CandidatDto{
    private _name: string;
    private _skills: string[];

    constructor(name: string, skills: string[]) {
        this._name = name;
        this._skills = skills;
    }

    get name(): string {
        return this._name;
    }

    get skills(): string[] {
        return this._skills;
    }
}
