import { Component, input } from '@angular/core';
import { Button } from 'primeng/button';
import { Image } from 'primeng/image';

@Component({
  selector: 'app-section',
  imports: [
    Button,
    Image
  ],
  templateUrl: './section.component.html',
})
export class SectionComponent {
  title = input<string>();
  subTitle = input<string>();
  description = input<string>();
  image = input<string>();
  class = input<string | undefined>();
  btnLabel = input<string | undefined>();
  imageAlt = input<string | undefined>();
}
