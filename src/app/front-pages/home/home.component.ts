import { Component, NgZone, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public selected_address?:string;

  constructor(public loading:LoadingService) {
    
  }
  ngOnInit(): void {
    this.loading.startLoading();
  }

  
  
}
