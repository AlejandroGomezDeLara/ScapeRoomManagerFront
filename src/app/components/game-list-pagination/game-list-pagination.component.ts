import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-list-pagination',
  templateUrl: './game-list-pagination.component.html',
  styleUrls: ['./game-list-pagination.component.scss']
})
export class GameListPaginationComponent implements AfterViewInit {

  public pages:number[]=[];
  public actual_page:number=1;
  @Input() totalPages!:number;
  @Output() changePage = new EventEmitter<number>();

  constructor() { }

  ngAfterViewInit(): void {
      console.log(this.totalPages);
      for(let i=0;i<this.totalPages;i++){
        this.pages.push(i+1);
      }
  }


  public changeActualPage(page:number):void{
    this.actual_page=page;
    this.changePage.emit(this.actual_page);
  }

}
