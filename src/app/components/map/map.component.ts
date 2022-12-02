import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Game } from 'src/app/models/Game';
import { GeocoderResponse } from 'src/app/models/GeocoderResponse';
import { GeocodingService } from 'src/app/services/geocoding.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() game!: Game;
  @ViewChild('myGoogleMap', { static: false })
  map!: GoogleMap;

  zoom = 12;
  center?: google.maps.LatLng;
  options: google.maps.MapOptions = {
    disableDoubleClickZoom: true,
    mapTypeControl:false,
    mapTypeId:google.maps.MapTypeId['ROADMAP']
  };
  markers = [] as any;

  constructor(private geocoderService:GeocodingService) { }

  ngOnInit(): void {
    this.getLatLngByAddress();
  }

  dropMarker(location:google.maps.LatLng) {
    this.center=location;
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

  getLatLngByAddress(): void {
    
    this.geocoderService.getLocation(this.game.address!).subscribe((res)=>{
      let location=res.results[0].geometry.location;
      this.dropMarker(location);
      
    });
    
    
    
  }
}
