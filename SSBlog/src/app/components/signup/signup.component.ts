import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  apiUrl:string = 'http://localhost:3000/';

  signupForm!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private _http: HttpClient,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      password: [''],
    });
  }

  signUp() {
    this._http
      .post<any>(this.apiUrl+'signup', this.signupForm.value)
      .subscribe({
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
