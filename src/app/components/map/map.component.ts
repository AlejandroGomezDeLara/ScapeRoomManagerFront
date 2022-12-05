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
    disableDefaultUI:true,
    zoomControl:true,
    fullscreenControl:true,
    mapTypeId: google.maps.MapTypeId['ROADMAP'],
    styles: [
      {
          "featureType": "landscape",
          "stylers": [
              {
                  "saturation": -100
              },
              {
                  "lightness": 60
              }
          ]
      },
      {
          "featureType": "road.local",
          "stylers": [
              {
                  "saturation": -100
              },
              {
                  "lightness": 40
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "transit",
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
          "featureType": "administrative.province",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "lightness": 30
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ef8c25"
              },
              {
                  "lightness": 40
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#b6c54c"
              },
              {
                  "lightness": 40
              },
              {
                  "saturation": -40
              }
          ]
      },
  ]
  

  };
  markers = [] as any;

  constructor(private geocoderService: GeocodingService,
    private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.markers = [];
    this.setMarkersByAddress();
  }

  ngOnInit(): void {

  }

  dropMarker(location: google.maps.LatLng, icon: any, address?: GameAddress,) {
    this.center = location;



    this.markers.push({
      position: location,
      clickable: true,
      game_id: address?.id,
      animation: google.maps.Animation.DROP,

      options: {
        icon: icon,
        scaledSize: new google.maps.Size(50, 50), // scaled size
      }

    });



  }

  public setMarkersByAddress(): void {
    if (this.addresses.length > 0) {
      for (let address of this.addresses) {
        this.geocoderService.getLocation(address.address).subscribe((res) => {
          if (res.results.length > 0) {
            let location = res.results[0].geometry.location;
            const icon = {
              url: "assets/imgs/location-dot-funly.png", // url
              scaledSize: new google.maps.Size(30, 30), // scaled size

            };
            this.dropMarker(location,icon, address );
          }
        });
      }
    } else {
      this.geocoderService.getLocation(this.address!).subscribe((res) => {
        if (res.results.length > 0) {
          let location = res.results[0].geometry.location;
          const icon = {
            url: "assets/imgs/location-dot-funly.png", // url
            scaledSize: new google.maps.Size(60, 60), // scaled size

          };
          this.dropMarker(location, icon);
        }

      });
    }
  }

  public redirectGame(game_id: number): void {
    if (!this.address)
      this.router.navigate(['search/' + game_id + '/interior']);
  }
}
