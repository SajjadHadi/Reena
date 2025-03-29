import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ListingService } from '../../services/listing.service';

@Component({
  selector: 'app-listings',
  imports: [
    CardComponent,
    FooterComponent
  ],
  templateUrl: './listings.component.html',
})
export class ListingsComponent {
  homes: any[] = [];
  homeService = inject(ListingService);

  async ngOnInit() {
    this.homes = await this.homeService.getAllListings();
  }

}
