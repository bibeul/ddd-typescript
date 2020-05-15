export default class SalleDto {
    private _id: string;
    private _name: string;
    private _schedules: any[];

    constructor(schedules: any[], name: string) {
        this._id = '_' + Math.random().toString(36).substr(2, 9);
        this._name = name;
        this._schedules = schedules;
    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    get schedules(){
        return this._schedules;
    }
}
