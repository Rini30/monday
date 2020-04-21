import { CountriesService } from './countries.service';

export class Country {
    countryId:number;
    countryName:string;
    constructor(countryID:number,countryName:string){
        this.countryId=countryID;
        this.countryName=countryName;
    }
}
