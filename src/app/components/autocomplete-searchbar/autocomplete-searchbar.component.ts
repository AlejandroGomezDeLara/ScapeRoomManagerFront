import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-autocomplete-searchbar',
  templateUrl: './autocomplete-searchbar.component.html',
  styleUrls: ['./autocomplete-searchbar.component.scss']
})
export class AutocompleteSearchbarComponent implements OnInit,AfterViewInit {

  @ViewChild('addresstext') addresstext: any;
  @Output() places = new EventEmitter<google.maps.places.PlaceResult>();
  adressType:string ="address"
  autocompleteInput!: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
        {
            componentRestrictions: { country: 'ES' },
            types: [this.adressType]  // 'establishment' / 'address' / 'geocode'
        });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        this.places.emit(place);
    });
  }

}
