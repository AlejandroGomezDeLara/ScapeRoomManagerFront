import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { GameCategory } from 'src/app/models/GameCategory';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent implements OnInit {


  public categories:GameCategory[]=[];
  public selected_address:string="";
  public search:string="";


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SearchDialogComponent>,
    private router:Router,
    private loading:LoadingService
 ) { }


ngOnInit() {
  // will log the entire data object
  this.categories=this.data.categories;
  this.selected_address=this.data.selected_address;
}

public deleteSearch():void{
  this.search="";
}

public makeSearch():void{
  this.dialogRef.close(this.search);
}

public searchByGameCategory(category:GameCategory):void{
  console.log("CATEGORIA",category);
  this.loading.startLoading();
  this.router.navigate(['/search'], { queryParams: { c: category.id,a:this.selected_address } });
  this.dialogRef.close(this.search);
}


}
