import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Game } from 'src/app/models/Game';
import { GameAddress } from 'src/app/models/GameAddress';
import { GeocoderResponse } from 'src/app/models/GeocoderResponse';
import { GeocodingService } from 'src/app/services/geocoding.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() addresses: GameAddress[]=[];
  @Input() address?:string;
  @Input() zoom!: number;

  @ViewChild('myGoogleMap', { static: false })
  map!: GoogleMap;
  @Input() center?: google.maps.LatLng | google.maps.LatLngLiteral = { lat: 40.130067, lng: -8.2042286 };
  options: google.maps.MapOptions = {
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId['ROADMAP']
  };
  markers = [] as any;

  constructor(private geocoderService: GeocodingService) { }

  ngOnInit(): void {
    
    this.setMarkersByAddress();
  }

  dropMarker(location: google.maps.LatLng) {
    this.center = location;
    this.markers.push({
      position: location,
      options: {
        icon: {
          url: 'assets/imgs/box-transparent.svg', scaledSize: {
            height: 40,
            width: 40
          }
        },
        animation: google.maps.Animation.DROP,
      },
    })
  }

  public setMarkersByAddress(): void {
    if(this.addresses.length>0){
      for (let address of this.addresses) {
        this.geocoderService.getLocation(address.address).subscribe((res) => {
          let location = res.results[0].geometry.location;
          this.dropMarker(location);
        });
      }
    }else{
      this.geocoderService.getLocation(this.address!).subscribe((res) => {
        let location = res.results[0].geometry.location;
        this.dropMarker(location);
      });
    }
    
  }
}
