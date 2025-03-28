import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import { Image } from 'primeng/image';
import { SectionInputs } from '../../interfaces/inputs';



@Component({
  selector: 'app-section',
  imports: [
    Button,
    Image
  ],
  templateUrl: './section.component.html',
})
export class SectionComponent {
  @Input() sectionInputs!: SectionInputs;
}
