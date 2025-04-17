import { Component, inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormComponent } from '../../components/form/form.component';
import { Login } from '../../interfaces/form';
import { UserActions } from '../../store/user/user.actions';

@Component({
  selector: 'app-login',
  imports: [
    FormComponent
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  router = inject(Router);
  store = inject(Store);

  loginConfig = {
    title: 'Login',
    description: "Enter your credentials to login to your account. If you're a new user please create a new account in the sign up page",
    fields: [
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        icon: 'pi-envelope',
        validators: [Validators.required, Validators.email]
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        icon: 'pi-key',
        validators: [Validators.required]
      },
    ],
    submitLabel: 'Login'
  }

  onLogin(data: Login) {
    this.store.dispatch(UserActions.createSession({ data }));
  }
}
