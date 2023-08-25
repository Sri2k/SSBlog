import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

function passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (!password || !confirmPassword) {
    return null;
  }

  return password.value === confirmPassword.value ? null : { passwordMismatch: true };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  apiUrl: string = 'https://sri2kbackendserver.onrender.com/';

  signupForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private _http: HttpClient,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validators: passwordMatchValidator
    });
  }

  signUp() {
    if (this.signupForm.invalid) {
      return;
    }

    const formData = {
      username: this.signupForm.value.username,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
    };

    this._http.post<any>(this.apiUrl + 'signup', formData).subscribe({
      next: (res) => {
        console.log(res);
        alert('Signup Successfully');
        this.signupForm.reset();
        this._router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
        alert('Signup Error');
      },
    });
  }
}
