import { Component, Input, NgZone, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
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

  @ViewChild('myGoogleMap', { static: false }) map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow

  @Input() games: Game[] = [];
  @Input() zoom!: number;
  @Input() markerIconSize: number = 40;
  @Input() center?: google.maps.LatLng | google.maps.LatLngLiteral = { lat: 39.6575069, lng: -4.1400885 };
  @Input() selected_address?: string;

  infoContent = {
    game_name: '',
    game_image: '',
    game_address: '',
  };

  options: google.maps.MapOptions = {
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true,
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
    private router: Router,
    private zone: NgZone) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.zone.run(() => {
      console.log(changes);
      if (this.games.length >0){
        this.games = changes["games"].currentValue;
        this.markers = [];
        this.setMarkersByAddress();
      }
        
    })

  }

  ngOnInit(): void {

  }

  dropMarker(location: google.maps.LatLng, game: Game) {

    if (this.selected_address || this.games.length == 1) {
      this.center = location
      this.zoom = 13;
    } else {
      this.center = { lat: 39.6575069, lng: -4.1400885 };
      this.zoom = 6;
    }

    let icon = {
      url: "assets/imgs/location-dot-funly.png", // url
      scaledSize: new google.maps.Size(this.markerIconSize, this.markerIconSize), // scaled size

    };
    if (game.category_id == 1) {
      //Scape-room icon
      icon.url = "assets/imgs/location-dot-funly.png";
    } else if (game.category_id == 2) {
      //Laser-tag icon
      icon.url = "assets/imgs/location-dot-funly-laser-tag.png";
    } else if (game.category_id == 3) {
      //Karts icon
      icon.url = "assets/imgs/location-dot-funly-karts.png";
    } else if (game.category_id == 4) {
      //Experiencia icon
      icon.url = "assets/imgs/location-dot-funly-experience.png";
    } else if (game.category_id == 5) {
      //Hall-game icon
      icon.url = "assets/imgs/location-dot-funly-hall-game.png";
    } else if (game.category_id == 6) {
      //Al aire libre icon
      icon.url = "assets/imgs/location-dot-funly-outdoor.png";
    } else if (game.category_id == 7) {
      //VR icon
      icon.url = "assets/imgs/location-dot-funly-vr.png";
    }

    this.markers.push({
      position: location,
      clickable: true,
      game_address: game?.address,
      game_id: game?.id,
      game_image: game?.image,
      game_name: game?.name,
      animation: google.maps.Animation.DROP,

      options: {
        icon: icon,
        scaledSize: new google.maps.Size(this.markerIconSize, this.markerIconSize), // scaled size
      }

    });



  }

  public setMarkersByAddress(): void {
    for (let game of this.games) {
      this.geocoderService.getLocation(game.address!).subscribe((res) => {
        if (res.results.length > 0) {
          let location = res.results[0].geometry.location;
          this.dropMarker(location, game);
        }
      });
    }
  }

  public redirectGame(game_id: number): void {
    if (this.games.length > 1)
      this.router.navigate(['search/' + game_id + '/interior']);
  }

  openInfo(marker: any, info: any) {
    console.log(info);
    this.infoContent.game_image = info.game_image;
    this.infoContent.game_name = info.game_name;
    this.infoContent.game_address = info.game_address;
    this.infoWindow.open(marker);


  }

  closeInfo() {
    this.infoWindow.close();
  }
}
