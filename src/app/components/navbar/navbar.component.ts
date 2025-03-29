import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { Button } from 'primeng/button';
import { ButtonGroup } from 'primeng/buttongroup';
import { Router, RouterLink } from '@angular/router';
import { selectUser } from '../../store/user/user.selectors';
import { Menu } from 'primeng/menu';
import { UserActions } from '../../store/user/user.actions';

@Component({
  selector: 'app-navbar',
  imports: [Menubar, BadgeModule, AvatarModule, InputTextModule, CommonModule, LogoComponent, Button, ButtonGroup, RouterLink, Menu],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  store = inject(Store);
  router = inject(Router);

  items!: MenuItem[];
  userMenuItems!: MenuItem[];
  isLoggedIn = false;

  ngOnInit() {
    this.store.select(selectUser).subscribe(user => {
      if (user) {
        this.isLoggedIn = true;
      }
    })

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

    this.userMenuItems = [
      {
        label: 'Add Listing',
        icon: 'pi pi-plus',
        command: () => this.router.navigate(['/user-dashboard/add-listing']),
      },
      {
        separator: true,
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => this.logout(),
      },
    ];
  }

  async logout() {
    this.store.dispatch(UserActions.logout())
    await this.router.navigate(['/login']);
    this.isLoggedIn = false;
  }
}
