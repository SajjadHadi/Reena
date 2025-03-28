import { Component, inject } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { Validators } from '@angular/forms';
import { Contact } from '../../interfaces/contact';
import { databases, ID } from '../../../lib/appwrite';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [
    FormComponent
  ],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  router = inject(Router);

  contactConfig = {
    title: 'Contact Us',
    description: "Please send us your ideas, questions and notes using this form.",
    fields: [
      {
        name: 'name',
        label: 'Name',
        icon: 'pi-user',
        type: 'text',
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
        name: 'message',
        label: 'Your message',
        type: 'textarea',
        validators: [Validators.required, Validators.maxLength(2047)]
      },
    ],
    submitLabel: 'Send'
  }

  async onContact(newContact: Contact) {
    try {
      // TODO: Show Toast
      await databases.createDocument('Reena', 'contacts', ID.unique(), newContact);
      await this.router.navigate(['/']);
    } catch (e) {
      // TODO: Show Toast
      console.log(e);
    }
  }
}
