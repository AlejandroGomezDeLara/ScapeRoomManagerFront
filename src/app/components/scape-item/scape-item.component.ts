import { Component, Input, OnInit } from '@angular/core';
import { ScapeRoom } from 'src/app/models/ScapeRoom';

@Component({
  selector: 'app-scape-item',
  templateUrl: './scape-item.component.html',
  styleUrls: ['./scape-item.component.scss']
})
export class ScapeItemComponent implements OnInit {

  @Input() scape!:ScapeRoom;

  constructor() { }

  ngOnInit(): void {
  }

}
