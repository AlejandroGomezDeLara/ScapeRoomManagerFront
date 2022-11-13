import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { GameCategory } from 'src/app/models/GameCategory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent implements OnInit {


  public categories:GameCategory[]=[];
  public search:string="";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SearchDialogComponent>,
    private router:Router
 ) { }


ngOnInit() {
  // will log the entire data object
  this.categories=this.data.categories;
}

public deleteSearch():void{
  this.search="";
}

public makeSearch():void{
  this.dialogRef.close();
}

public searchByGameCategory(category:GameCategory):void{
  console.log("CATEGORIA",category);
  this.router.navigate(['search/'+category.id]);
  this.dialogRef.close();
}


}
