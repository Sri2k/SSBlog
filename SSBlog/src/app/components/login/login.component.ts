import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  apiUrl:string = 'http://localhost:3000/';

  loginForm!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private _http: HttpClient,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: [''],
    });
  }

  logIn() {
    this._http.get<any>(this.apiUrl+'signup').subscribe({
      next: (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          alert(user.name + ' logged in successfully');
          this._router.navigate(['/restaurent']);
          this.loginForm.reset();
        } else {
          alert('Invalid credentials');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
