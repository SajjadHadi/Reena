import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { Home } from '../../interfaces/home';
import { Image } from 'primeng/image';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [
    Button,
    Tag,
    Image,
    RouterLink
  ],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() item! : Home;
}
