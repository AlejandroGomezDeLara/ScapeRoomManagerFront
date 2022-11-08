import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game-list-header',
  templateUrl: './game-list-header.component.html',
  styleUrls: ['./game-list-header.component.scss']
})
export class GameListHeaderComponent implements OnInit {
  
  @Output() places = new EventEmitter<google.maps.places.PlaceResult>();

  constructor() { }

  ngOnInit(): void {
  }

  public getPlaces(places:google.maps.places.PlaceResult):void{
    this.places.emit(places);
  }
}
