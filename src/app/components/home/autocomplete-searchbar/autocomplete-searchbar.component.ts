import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatMenuTrigger} from '@angular/material/menu';
import { Router } from '@angular/router';
import { GameCategory } from 'src/app/models/GameCategory';
import { ApiService } from 'src/app/services/api.service';
import { SearchDialogComponent } from '../../search-dialog/search-dialog.component';

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

  @Input() categories:GameCategory[]=[];

  constructor(public dialog: MatDialog,
    private apiService:ApiService,
    private router:Router) { }

  ngOnInit(): void {
    this.getCategories();
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
        console.log(place);
        
        this.selected_address=place.address_components![0].long_name;
    });
  }

  public checkAddressEmpty():void{    
    if(this.selected_address == "")this.search();
  }

  public search():void{    
    this.router.navigate(['/search'], { queryParams: { a: this.selected_address, q:this.selected_name } });
  }

  public checkNameEmpty():void{
    if(this.selected_name == "")this.search();
  }

  

  public getCategories():void{
    this.apiService.getEntity('categories').subscribe((categories:GameCategory[])=>{
      this.categories=categories;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SearchDialogComponent, {
      width: '700px',
      data: {categories: this.categories,selected_address:this.selected_address},
      backdropClass: 'backdropBackground'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.selected_name=result;
    });
  }

  public deleteAddress():void{
    this.selected_address="";
    this.search();
  }

}
