import { Component, EventEmitter, Input, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  
  title:string='Se acabó la rutina.';
  subtitle:string='Encuentra tu diversión con la plataforma Nº1 de ocio en España!';

  @Input() selected_address?:string;
  
  @Output() searchFilter = new EventEmitter<[string,string]>();
  constructor(private ngZone:NgZone,
    public loading:LoadingService) { }

  ngOnInit(): void {
    this.loading.startLoading();
  }

  public getFilter(filters:[string,string]):void{
    this.ngZone.run(()=>{
      this.searchFilter.emit(filters);
    });
  }

  public search():void{
    
  }

  public stopLoading(event:any):void{
    this.loading.stopLoading();
  }

}
