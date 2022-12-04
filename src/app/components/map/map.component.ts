import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { GameAddress } from 'src/app/models/GameAddress';
import { GeocoderResponse } from 'src/app/models/GeocoderResponse';
import { GeocodingService } from 'src/app/services/geocoding.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {

  @Input() addresses: GameAddress[] = [];
  @Input() address?: string;
  @Input() zoom!: number;

  @ViewChild('myGoogleMap', { static: false })
  map!: GoogleMap;
  @Input() center?: google.maps.LatLng | google.maps.LatLngLiteral = { lat: 40.130067, lng: -8.2042286 };
  options: google.maps.MapOptions = {
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId['ROADMAP'],
    styles: [
      {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
          {
            "saturation": "-100"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 65
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": "50"
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.attraction",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": "-100"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
          {
            "lightness": "30"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
          {
            "lightness": "40"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "hue": "#ffff00"
          },
          {
            "lightness": -25
          },
          {
            "saturation": -97
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
          {
            "lightness": -25
          },
          {
            "saturation": -100
          }
        ]
      }
    ]

  };
  markers = [] as any;

  constructor(private geocoderService: GeocodingService,
    private router:Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.markers = [];
    this.setMarkersByAddress();
  }

  ngOnInit(): void {

  }

  dropMarker(location:google.maps.LatLng,address?: GameAddress) {
    this.center = location;

    
    this.markers.push({
      position: location,
      clickable:true,
      game_id:address?.id,
      animation: google.maps.Animation.DROP,
    });
    
   
    
  }

  public setMarkersByAddress(): void {
    if (this.addresses.length > 0) {
      for (let address of this.addresses) {
        this.geocoderService.getLocation(address.address).subscribe((res) => {
          if(res.results.length>0){
            let location = res.results[0].geometry.location;
            this.dropMarker(location,address);
          }
        });
      }
    } else {
      this.geocoderService.getLocation(this.address!).subscribe((res) => {
        if(res.results.length>0){
          let location = res.results[0].geometry.location;
          this.dropMarker(location);
        }
       
      });
    }
  }

  public redirectGame(game_id:number):void{
    if(!this.address)
      this.router.navigate(['search/'+game_id+'/interior']);
  }
}
