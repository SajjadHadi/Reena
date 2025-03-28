import { Component } from '@angular/core';
import { Home } from '../../interfaces/home';
import mockData from '../../mock-data';
import { CardComponent } from '../../components/card/card.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-listings',
  imports: [
    CardComponent,
    FooterComponent
  ],
  templateUrl: './listings.component.html',
})
export class ListingsComponent {
  homes: Home[] = mockData as Home[];

}
