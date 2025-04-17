// src/app/listing/listing.component.ts
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { GalleriaModule } from 'primeng/galleria';
import { Image } from 'primeng/image';
import { Message } from 'primeng/message';
import { ProgressSpinner } from 'primeng/progressspinner';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ListingService } from '../../../services/listing.service';

export interface Home {
  $id?: string;
  userId: string;
  title: string;
  description: string;
  price: number;
  status: 'For-Sale' | 'Sold';
  bedrooms: number;
  bathrooms: number;
  squareMeters: number;
  features?: string[];
  coverImage: string;
  image?: string[];
  city: string;
  country: string;
  zipcode?: string;
}

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule, CardModule, GalleriaModule, ChipModule, ButtonModule, Message, ProgressSpinner, Image, FooterComponent],
  templateUrl: './listing.component.html'
})
export class ListingComponent implements OnInit {
  homeId: string = '';
  home: any | null = null;
  loading: boolean = true;
  error: string | null = null;

  private route = inject(ActivatedRoute);
  private listingService = inject(ListingService);

  async ngOnInit() {
    try {
      this.route.paramMap.subscribe(params => {
        this.homeId = params.get('id') || '';
      });

      if (this.homeId) {
        this.home = await this.listingService.getListing(this.homeId);
        this.loading = false;
      } else {
        this.error = 'No listing ID provided';
        this.loading = false;
      }
    } catch (err) {
      this.error = 'Failed to load listing';
      this.loading = false;
      console.error(err);
    }
  }
}
