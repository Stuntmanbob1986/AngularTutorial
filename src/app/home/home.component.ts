import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
    <app-housing-location 
      *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation">
    </app-housing-location>
  `,
  styleUrl: './home.component.css'

})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  
  constructor() {
    this.housingLocationList = 
    this.housingService.getAllHousingLocations();
  }
}
