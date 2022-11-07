import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scape-list-header',
  templateUrl: './scape-list-header.component.html',
  styleUrls: ['./scape-list-header.component.scss']
})
export class ScapeListHeaderComponent implements OnInit {
  
  @Output() places = new EventEmitter<google.maps.places.PlaceResult>();

  constructor() { }

  ngOnInit(): void {
  }

  public getPlaces(places:google.maps.places.PlaceResult):void{
    this.places.emit(places);
  }
}
