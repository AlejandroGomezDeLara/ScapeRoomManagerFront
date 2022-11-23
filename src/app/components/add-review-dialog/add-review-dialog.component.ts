import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { GameReview } from 'src/app/models/GameReview';

@Component({
  selector: 'app-add-review-dialog',
  templateUrl: './add-review-dialog.component.html',
  styleUrls: ['./add-review-dialog.component.scss']
})
export class AddReviewDialogComponent implements OnInit {

  public game!: Game;
  public gameReview: GameReview = { text: "", stars: 0 };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddReviewDialogComponent>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.game = this.data.game;
  }

  public changeRating(changedRating: number): void {
    this.gameReview.stars = changedRating;
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public addReview(): void {
    this.dialogRef.close(this.gameReview);
  }

}
