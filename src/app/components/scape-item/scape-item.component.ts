import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-scape-item',
  templateUrl: './scape-item.component.html',
  styleUrls: ['./scape-item.component.scss']
})
export class ScapeItemComponent implements OnInit {

  @Input() scape!:Game;

  constructor() { }

  ngOnInit(): void {
  }

}
