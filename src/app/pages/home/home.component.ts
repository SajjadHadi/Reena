import { Component } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Home } from '../../interfaces/home';

import mockData from '../../mock-data';

@Component({
  selector: 'app-home',
  imports: [
    SectionComponent,
    CarouselComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  homes: Home[] = mockData as Home[];
}
