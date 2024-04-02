import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySelectedComponent } from './country-selected.component';

describe('CountrySelectedComponent', () => {
  let component: CountrySelectedComponent;
  let fixture: ComponentFixture<CountrySelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountrySelectedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountrySelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
