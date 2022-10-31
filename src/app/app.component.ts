import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private auth:AuthenticationService,
    private router:Router){

  }
  ngOnInit(): void {
    this.auth.authenticationState.subscribe(token => {
      if (token != 'logout' && token != '') {
        this.router.navigateByUrl('/intranet');
      } else if (token == 'logout') {
      
        this.router.navigateByUrl('/login');

      } else {
        console.log("primera vez");
      }
    });  
  }
 
}
