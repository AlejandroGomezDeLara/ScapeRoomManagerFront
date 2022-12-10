import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-especifications-sidebar',
  templateUrl: './especifications-sidebar.component.html',
  styleUrls: ['./especifications-sidebar.component.scss']
})
export class EspecificationsSidebarComponent implements OnInit {

  @Input() game!:Game; 
  
  constructor(private apiService:ApiService,
    private router:Router) { }

  ngOnInit(): void {
  }

 

 

 
}
