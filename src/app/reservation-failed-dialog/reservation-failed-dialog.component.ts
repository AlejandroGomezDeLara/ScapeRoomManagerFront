import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reservation-failed-dialog',
  templateUrl: './reservation-failed-dialog.component.html',
  styleUrls: ['./reservation-failed-dialog.component.scss']
})
export class ReservationFailedDialogComponent implements OnInit {

  public error;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    this.error=data.error;
  }

  ngOnInit(): void {
  }

}
