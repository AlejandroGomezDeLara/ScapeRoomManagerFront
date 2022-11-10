import { AfterViewInit, Component, EventEmitter, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { filter } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-game-list-header',
  templateUrl: './game-list-header.component.html',
  styleUrls: ['./game-list-header.component.scss']
})
export class GameListHeaderComponent implements OnInit {
  
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

}
