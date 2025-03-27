import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Reena';
}
