import { AfterViewInit, Component, EventEmitter, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-game-list-header',
  templateUrl: './game-list-header.component.html',
  styleUrls: ['./game-list-header.component.scss']
})
export class GameListHeaderComponent implements OnInit {
  
  address_selected:string=''
  title:string='Se acabó la rutina.';
  subtitle:string='Encuentra tu diversión con la plataforma Nº1 de ocio en España!';

  @Output() places = new EventEmitter<google.maps.places.PlaceResult>();
  @Output() removeAddress = new EventEmitter<void>();

  constructor(private ngZone:NgZone) { }

  ngOnInit(): void {
  }

  public getPlaces(places:google.maps.places.PlaceResult):void{
    this.ngZone.run(()=>{
      this.places.emit(places);
      this.address_selected=places.formatted_address!;
    });
    
  }

  public removeAddressSelected():void{
    this.removeAddress.emit();
    this.address_selected='';
  }
}
