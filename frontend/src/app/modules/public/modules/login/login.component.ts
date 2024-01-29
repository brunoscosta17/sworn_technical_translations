import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FieldErrorComponent } from 'src/app/shared/components/field-error/field-error.component';
import { ErrorMessagesService } from 'src/app/shared/services/error-messages-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FieldErrorComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  loginFormValues: any = {
    username: ''
  };

  constructor(private fb: FormBuilder, private errorMessagesService: ErrorMessagesService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  handleErrors(formControlName?: string): string[] {
    if(formControlName) {
      const control = this.loginForm.get(formControlName);
      let errorMessages: string[] = [];
      if (control && (control.touched || control.dirty)) {
        Object.keys(control.errors ?? {}).forEach(errorKey => {
          const errorMessage = this.errorMessagesService.getErrorMessage(errorKey, control.errors![errorKey]);
          errorMessages.push(errorMessage);
        });
      }
      return errorMessages;
    }
    return [];
  }

  login() {}

}
