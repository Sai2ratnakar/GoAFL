export class Team {

    constructor(
    public logo: string,
    public id: number,
    public name: string,
    public abbrev: string) {}


unserialize(stringifiedObj: string){
    const team = JSON.parse(stringifiedObj);
    this.name = team.name;
    this.logo = team.logo;
    this.abbrev = team.abbrev;
    this.id = team.id;
}

toString() {
    return JSON.stringify({
        name: this.name,
        logo: this.logo,
        abbrev: this.abbrev,
        id: this.id
    });
}
}
