import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ListingsComponent } from './pages/listings/listings.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ListingComponent } from './pages/listing/listing.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { UserAddListingComponent } from './pages/user-dashboard/user-add-listing/user-add-listing.component';
import { authGuard } from './gaurds/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutComponent
  },
  {
    path: 'contact-us',
    component: ContactComponent
  },
  {
    path: 'listings',
    children: [
      {
        path: '',
        component: ListingsComponent,
      },
      {
        path: ':id',
        component: ListingComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [authGuard],
    data: { authMode: 'guest' },
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [authGuard],
    data: { authMode: 'guest' },
  },
  {
    path: 'user-dashboard',
    children: [
      {
        path: '',
        component: UserDashboardComponent,
        canActivate: [authGuard],
        data: { authMode: 'authenticated' },
      },
      {
        path: 'add-listing',
        component: UserAddListingComponent,
        canActivate: [authGuard],
        data: { authMode: 'authenticated' },
      },
    ],
  },
];
