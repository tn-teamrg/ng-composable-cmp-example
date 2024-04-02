import { Component } from '@angular/core';
import { CountryComponent } from '../country/country.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-selected',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-selected.component.html',
  styleUrl: './country-selected.component.css'
})
export class CountrySelectedComponent {
  constructor(public country: CountryComponent){}
}
