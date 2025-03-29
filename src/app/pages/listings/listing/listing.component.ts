import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing',
  imports: [],
  templateUrl: './listing.component.html'
})
export class ListingComponent {
  route = inject(ActivatedRoute);
  homeId: string | null = null;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.homeId = params.get('id');
    });
  }
}
