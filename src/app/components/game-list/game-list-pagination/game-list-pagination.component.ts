import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-list-pagination',
  templateUrl: './game-list-pagination.component.html',
  styleUrls: ['./game-list-pagination.component.scss']
})
export class GameListPaginationComponent implements OnInit {

  public pages:number[]=[];
  @Input() actualPage:number=0;
  @Input() totalPages:number=0;
  @Output() changePage = new EventEmitter<number>();

  constructor() { }

  ngOnInit():void{
    
    for(let i=0;i<this.totalPages;i++){
      this.pages.push(i+1);
    }
  }


  public changeActualPage(page:number):void{
    this.actualPage=page;
    window.scrollTo(0, 0);
    this.changePage.emit(this.actualPage);
  }

}
