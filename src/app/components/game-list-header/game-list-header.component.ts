import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-game-list-header',
  templateUrl: './game-list-header.component.html',
  styleUrls: ['./game-list-header.component.scss']
})
export class GameListHeaderComponent implements OnInit {
  
  title:string='Se acabó la rutina.';
  subtitle:string='Encuentra tu diversión con la plataforma Nº1 de ocio en España!';

  @Output() places = new EventEmitter<google.maps.places.PlaceResult>();

  constructor() { }

  ngOnInit(): void {
  }

  public getPlaces(places:google.maps.places.PlaceResult):void{
    this.places.emit(places);
  }
}
