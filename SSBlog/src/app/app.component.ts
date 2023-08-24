import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: any;

  constructor(private router: Router) { 
    const userJson = sessionStorage.getItem('user');
  //   if (userJson !== null) {
  //     this.user = JSON.parse(userJson);
  //   }
  //   console.log('this.user', this.user)
  // }

  // logout() {
  //   localStorage.clear();
  //   this.router.navigateByUrl('login');
  //   location.reload()
  // }

  // ngOnInit() {
  //   const userJson = localStorage.getItem('user');
  //   if (userJson !== null) {
  //     this.user = JSON.parse(userJson);
  //   }
  //   console.log('this.user', this.user)
  //   if(!this.user) {
  //     this.router.navigateByUrl('login');
  //   }
  }
}
