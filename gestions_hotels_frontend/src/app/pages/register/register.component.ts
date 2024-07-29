import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.userService.createUser(this.registerForm.value).subscribe(
        response => {
          console.log('User created successfully', response);
          this.router.navigate(['/login'], { queryParams: { message: 'Registration successful. Please log in.' } });
        },
        error => {
          console.error('Error creating user', error);
          this.errorMessage = error.error.message || 'An error occurred during registration.';
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
