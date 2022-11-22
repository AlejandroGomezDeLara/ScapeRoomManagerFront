import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-especifications-sidebar',
  templateUrl: './especifications-sidebar.component.html',
  styleUrls: ['./especifications-sidebar.component.scss']
})
export class EspecificationsSidebarComponent implements OnInit {

  @Input() game!:Game; 

  constructor() { }

  ngOnInit(): void {
  }

}
