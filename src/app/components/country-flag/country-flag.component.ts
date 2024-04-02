import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountryComponent } from '../country/country.component';

@Component({
  selector: 'app-country-flag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-flag.component.html',
  styleUrl: './country-flag.component.css'
})
export class CountryFlagComponent {
  constructor(public country: CountryComponent){}
}
