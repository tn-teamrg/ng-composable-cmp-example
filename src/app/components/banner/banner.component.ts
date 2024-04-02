import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountryComponent } from '../country/country.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  constructor(public country: CountryComponent){}
}
