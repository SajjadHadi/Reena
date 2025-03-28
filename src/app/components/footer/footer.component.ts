import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { TableModule } from 'primeng/table';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    LogoComponent,
    TableModule,
    NgForOf,
    RouterLink
  ],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  items = [
    ['News',
      'Investor Relations',
      'Careers',
    ], [
      'Get Started',
      'Learn',
      'FAQ',
    ], [
      'Discord',
      'Events',
      'Blog',]
  ]
}
