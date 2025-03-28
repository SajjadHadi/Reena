import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-sign-up',
  imports: [
    FormComponent
  ],
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent {
  signUpConfig = {
    title: 'Sign up',
    description: "Enter your credentials to create a new account. If you've already created and account please go to the login page.",
    fields: [
      {
        name: 'fullName',
        label: 'Full Name',
        type: 'text',
        icon: 'pi-user',
        validators: [Validators.required, Validators.maxLength(255)]
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        icon: 'pi-envelope',
        validators: [Validators.required, Validators.email, Validators.maxLength(255)]
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        icon: 'pi-key',
        validators: [Validators.required, Validators.minLength(8), Validators.maxLength(255)]
      },
      {
        name: 'terms',
        label: 'Agree with terms and conditions',
        type: 'checkbox',
        validators: [Validators.requiredTrue]
      },
    ],
    submitLabel: 'Sign up'
  }

  onSignUp(data: any) {
    console.log(data);
  }
}
