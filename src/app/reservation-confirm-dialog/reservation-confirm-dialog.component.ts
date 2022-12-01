import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddReviewDialogComponent } from '../components/add-review-dialog/add-review-dialog.component';
import { Game } from '../models/Game';
import { OpenReservation } from '../models/OpenReservation';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-reservation-confirm-dialog',
  templateUrl: './reservation-confirm-dialog.component.html',
  styleUrls: ['./reservation-confirm-dialog.component.scss']
})
export class ReservationConfirmDialogComponent implements OnInit {

  public game!: Game;
  public openReservation!:OpenReservation;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddReviewDialogComponent>,
    private router: Router,
    private apiService:ApiService
  ) {
    this.game = data.game;
    this.openReservation=data.openReservation;
  }

  ngOnInit(): void {
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public makeOpenReservation():void{
    console.log("reservando");
    this.apiService.addEntity('open-reservations',this.openReservation).subscribe((openReservation:OpenReservation)=>{
      console.log(openReservation);
      this.dialogRef.close({reservation:openReservation});
    },(error:Error)=>{
      this.dialogRef.close({error:error});
      console.log(error);
    });
  }

}
