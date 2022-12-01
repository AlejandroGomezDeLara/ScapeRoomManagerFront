import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  zoom = 12;
  center?: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
