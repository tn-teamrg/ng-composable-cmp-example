import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {
  selected$: Subject<string> = new Subject<string>();

  countries$ = this.countryService.getCountries();

  constructor(private countryService: CountryService){}

  changed(value: string) {
    this.selected$.next(value);
  }

}
