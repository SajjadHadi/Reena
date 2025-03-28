import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { Home } from '../../interfaces/home';
import { Image } from 'primeng/image';

@Component({
  selector: 'app-card',
  imports: [
    Button,
    Tag,
    Image
  ],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() item! : Home;
}
