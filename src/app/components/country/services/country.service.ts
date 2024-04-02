import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Country {
  name: string;
  code: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countries: Country[] = [
    // https://flagsapi.com/AU/shiny/64.png
    {name: 'Australia', code: 'AU'},
    // https://flagsapi.com/AT/shiny/64.png
    {name: 'Austria', code: 'AT'},
    // https://flagsapi.com/AZ/shiny/64.png
    {name: 'Azerbaijan', code: 'AZ'},
    // https://flagsapi.com/BS/shiny/64.png
    {name: 'Bahamas', code: 'BS'},
  ]

  constructor() { }

  getCountries(): Observable<Country[]> {
    return of(this.countries);
  }
}
