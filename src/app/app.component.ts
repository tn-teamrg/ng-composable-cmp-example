import { Component } from '@angular/core';
import { CountryComponent } from './components/country/country.component';
import { CountrySelectedComponent } from './components/country-selected/country-selected.component';
import { BannerComponent } from './components/banner/banner.component';
import { CountryFlagComponent } from './components/country-flag/country-flag.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CountryComponent, CountrySelectedComponent, BannerComponent, CountryFlagComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Composable Angular Components';
}
