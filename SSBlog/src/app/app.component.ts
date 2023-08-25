import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  toLogout:any;

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
    this.toLogout = sessionStorage.getItem('auth');
    
    if(this.toLogout=='true'){
      this.toLogout = true;
    }
    else{
      this.toLogout = false
    }
  }
  // time to commit
 

}
