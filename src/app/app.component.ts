import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/User';
import { AuthenticationService } from './services/authentication.service';
import { UtilitiesService } from './services/utilities.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  
  constructor(private auth:AuthenticationService,
    private utilities:UtilitiesService,
    private router:Router){

  }
  ngOnInit(): void {
    this.auth.authenticationState.subscribe(token => {
      if (token != 'logout' && token != '') {
        let user:User=this.auth.getStorageUser();
        if(user.role_id)
          this.redirectFromRoleId(user.role_id);
      } else if (token == 'logout') {
      
        this.router.navigateByUrl('/login');

      } else {
        console.log("primera vez");
      }
    });  
  }

  public redirectFromRoleId(role_id:number):void{
    if(role_id == 1 || role_id == 3)
      this.router.navigateByUrl('/');
    if(role_id == 3)
      this.router.navigateByUrl('/intranet');

  }
 
}
