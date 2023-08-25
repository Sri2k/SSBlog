import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  user: any;
  constructor(private router: Router) { 
  }
  ngOnInit(): void {
    this.user = sessionStorage.getItem('user');
  }
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
    location.reload()
  }
}
