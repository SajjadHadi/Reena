import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-logo',
  imports: [
    RouterLink
  ],
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  @Input() class?: string;
}
