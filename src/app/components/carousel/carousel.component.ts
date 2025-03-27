import { Component, input } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CardComponent } from '../card/card.component';
import { Home } from '../../interfaces/home';


@Component({
  selector: 'app-carousel',
  imports: [
    Carousel,
    TagModule,
    CardComponent
  ],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {

  items= input<Home[]>([]);


  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 2,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
