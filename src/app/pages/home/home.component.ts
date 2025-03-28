import { Component } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Home } from '../../interfaces/home';

import mockData from '../../mock-data';
import { SectionInputs } from '../../interfaces/inputs';

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
    class: "bg-primary-500",
    title: "Looking for best agents?",
    description: "With Reena, you can find best real estate agents in the universe!",
    btnLabel: "Contact us",
    image: "./assets/images/pexels-kindelmedia-7578901.jpg",
    imageAlt: "Agent image"
  }
}
