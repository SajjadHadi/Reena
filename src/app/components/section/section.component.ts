import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import { Image } from 'primeng/image';
import { SectionInputs } from '../../interfaces/inputs';

type ButtonSeverity = Button['severity'];

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

  getBtnSeverity(severity: ButtonSeverity) {
    return severity || 'primary';
  }
}
