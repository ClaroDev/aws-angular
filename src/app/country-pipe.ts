import { PipeTransform, Pipe } from "@angular/core";
import { CountryModel } from './country-model';

@Pipe({
    name: 'countryFilter'
})
export class CountryFilterPipe implements PipeTransform {
    transform(displayDatas: CountryModel[], searchTerm: string) : CountryModel[]{
        if (!displayDatas || !searchTerm) {
            return displayDatas;
        }
        return displayDatas.filter(displayData => 
            displayData.name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
    }
}