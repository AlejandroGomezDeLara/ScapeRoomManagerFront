import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-autocomplete-searchbar',
  templateUrl: './autocomplete-searchbar.component.html',
  styleUrls: ['./autocomplete-searchbar.component.scss']
})
export class AutocompleteSearchbarComponent implements OnInit,AfterViewInit {

  @ViewChild('addresstext') addresstext: any;
  @Output() searchFilter = new EventEmitter<[string,string]>();

  selected_name:string ="";
  selected_address:string ="";
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
            types: ['(regions)'],
          });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        this.selected_address=place.address_components![0].long_name;
    });
  }

  public search():void{    
    this.searchFilter.emit([this.selected_address,this.selected_name]);
  }

  public checkNameEmpty():void{
    if(this.selected_name == "")this.search();
  }

  public checkAddressEmpty():void{    
    if(this.selected_address == "")this.search();
  }
}
