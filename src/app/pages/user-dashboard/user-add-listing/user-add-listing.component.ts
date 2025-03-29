import { Component, inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormComponent } from '../../../components/form/form.component';
import { Home } from '../../../interfaces/home';
import { ListingService } from '../../../services/listing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add-listing',
  imports: [
    FormComponent
  ],
  templateUrl: './user-add-listing.component.html'
})
export class UserAddListingComponent {
  router = inject(Router);
  listingService = inject(ListingService);


  addListingConfig = {
    title: 'Add a Listing',
    description: "Using this form you can add a listing item.",
    fields: [
      {
        name: 'title',
        label: 'Title',
        type: 'text',
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(255)]
      },
      {
        name: 'description',
        label: 'Description',
        type: 'text',
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(255)]
      },
      {
        name: 'price',
        label: 'Price',
        type: 'number',
        validators: [Validators.required, Validators.min(1), Validators.max(999999999)]
      },
      {
        name: 'status',
        label: 'Status',
        type: 'select',
        placeholder: 'Select home status',
        options: [{ label: 'For Sale', value: 'For-Sale' }, { label: 'Sold', value: 'Sold' },],
        validators: [Validators.required,]
      },
      {
        name: 'bedrooms',
        label: 'Bedrooms',
        type: 'number',
        validators: [Validators.required, Validators.min(1), Validators.max(99)]
      },
      {
        name: 'bathrooms',
        label: 'Bathrooms',
        type: 'number',
        validators: [Validators.required, Validators.min(1), Validators.max(99)]
      },
      {
        name: 'squareMeters',
        label: 'Square Meters',
        type: 'number',
        validators: [Validators.required, Validators.min(1), Validators.max(99999)]
      },
      {
        name: 'coverImage',
        label: 'Cover Image',
        type: 'url',
        validators: [
          Validators.required,
          Validators.pattern('https?://.+'),
          Validators.minLength(1),
          Validators.maxLength(1023)]
      },
      {
        name: 'city',
        label: 'City',
        type: 'text',
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(255)]
      },
      {
        name: 'country',
        label: 'Country',
        type: 'text',
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(255)]
      },
    ],
    submitLabel: 'Add Listing'
  }

  async addListing(data: Home) {
    try {
      const listing = await this.listingService.createListing(data);
      if (listing) {
        await this.router.navigate([`/listings/${listing.$id}`]);
      }
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  }
}
