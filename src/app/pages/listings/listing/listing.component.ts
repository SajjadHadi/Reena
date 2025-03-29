import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../../../services/listing.service';

@Component({
  selector: 'app-listing',
  imports: [],
  templateUrl: './listing.component.html'
})
export class ListingComponent {
  homeId!: string;
  // TODO: Handle home type
  home: any | null = null;
  route = inject(ActivatedRoute);
  listingService = inject(ListingService);

  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.homeId = params.get('id') || '';
    });
    this.home = await this.listingService.getListing(this.homeId);
    console.log(this.home);
  }
}
