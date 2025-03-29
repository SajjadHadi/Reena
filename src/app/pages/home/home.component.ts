import { Component, inject } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SectionInputs } from '../../interfaces/input';
import { ListingService } from '../../services/listing.service';

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
  homeService = inject(ListingService);
  // TODO: Handle correct type for homes
  homes: any[] = [];

  async ngOnInit() {
    this.homes = await this.homeService.getAllListings();
  }

  homeConfig: SectionInputs = {
    class: "px-20 py-10",
    title: "Find the home",
    subTitle: "that you've ever wanted",
    description: "With Reena, you can explore trillions of homes, whether they’re nestled on Earth or scattered across other planets!",
    btnLabel: "Explore latest listings",
    image: "./assets/images/pexels-frans-van-heerden-201846-1438834.jpg",
    imageAlt: "Hero image of some homes"
  }

  agentConfig: SectionInputs = {
    class: "bg-primary-500 px-20 py-10",
    boxClass: "bg-transparent",
    btnSeverity: "secondary",
    title: "Looking for the best agents?",
    description: "Discover the finest real estate agents in the universe, only with Reena!",
    btnLabel: "Contact us",
    image: "./assets/images/pexels-kindelmedia-7578901.jpg",
    imageAlt: "Agent image"
  }
}
