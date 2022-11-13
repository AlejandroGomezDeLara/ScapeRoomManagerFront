import { Component, EventEmitter, NgZone, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  
  title:string='Se acabó la rutina.';
  subtitle:string='Encuentra tu diversión con la plataforma Nº1 de ocio en España!';

  @Output() searchFilter = new EventEmitter<[string,string]>();
  constructor(private ngZone:NgZone) { }

  ngOnInit(): void {
  }

  public getFilter(filters:[string,string]):void{
    this.ngZone.run(()=>{
      this.searchFilter.emit(filters);
    });
  }

  public search():void{
    
  }

}
