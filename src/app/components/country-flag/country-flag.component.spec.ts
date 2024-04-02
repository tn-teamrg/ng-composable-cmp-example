import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryFlagComponent } from './country-flag.component';

describe('CountryFlagComponent', () => {
  let component: CountryFlagComponent;
  let fixture: ComponentFixture<CountryFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryFlagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
