import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IftaLabel } from 'primeng/iftalabel';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { Select } from 'primeng/select';
import { Checkbox } from 'primeng/checkbox';
import { Textarea } from 'primeng/textarea';
import { Card } from 'primeng/card';

interface FormField {
  name: string;
  label: string;
  type: string;
  validators?: any[];
  icon?: string;
  options?: Array<{ key: string; value: string }>;
  placeholder?: string;
}

interface FormConfig {
  title?: string;
  description?: string;
  fields: FormField[];
  submitLabel: string;
}

@Component({
  selector: 'app-form',
  imports: [
    Button,
    InputText,
    ReactiveFormsModule,
    IftaLabel,
    IconField,
    InputIcon,
    Select,
    Checkbox,
    Textarea,
    Card
  ],
  templateUrl: './form.component.html'
})
export class FormComponent {
  @Input() class?: string;
  @Input() config!: FormConfig;
  @Output() formSubmit = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnInit() {
    const formControls: { [key: string]: any } = {};
    this.config.fields.forEach(field => {
      formControls[field.name] = [null, field.validators || []];
    });
    this.form = this.fb.group(formControls);
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  getErrorMessage(fieldName: string): string {
    const control = this.form.get(fieldName);
    if (!control || !control.errors || !control.touched) return '';

    if (control.errors['required']) return `${this.getFieldLabel(fieldName)} is required`;
    if (control.errors['email']) return 'Please enter a valid email';
    if (control.errors['minlength']) {
      return `${this.getFieldLabel(fieldName)} must be at least ${control.errors['minlength'].requiredLength} characters`;
    }
    return 'Invalid input';
  }

  getFieldLabel(fieldName: string): string {
    const field = this.config.fields.find(f => f.name === fieldName);
    return field ? field.label : fieldName;
  }

  protected readonly String = String;
}
