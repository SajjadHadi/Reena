import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { Button } from 'primeng/button';
import { ButtonGroup } from 'primeng/buttongroup';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [Menubar, BadgeModule, AvatarModule, InputTextModule, CommonModule, LogoComponent, Button, ButtonGroup, RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  items: MenuItem[] | undefined;
  isLoggedIn = false;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        link: '/',
      },
      {
        label: 'Latest Listings',
        icon: 'pi pi-th-large',
        link: '/listings'
      },
      {
        label: 'About us',
        icon: 'pi pi-question-circle',
        link: '/about-us',
      },
      {
        label: 'Contact us',
        icon: 'pi pi-envelope',
        link: '/contact-us',
      },
    ];
  }
}
