import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchDialogComponent } from './components/search-dialog/search-dialog.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from './components/header/header.module';
import { AddReviewDialogComponent } from './components/add-review-dialog/add-review-dialog.component';
import { ReservationConfirmDialogComponent } from './reservation-confirm-dialog/reservation-confirm-dialog.component';
import { RatingModule } from './components/game-list/rating/rating.module';
import { ReservationConfirmedDialogComponent } from './reservation-confirmed-dialog/reservation-confirmed-dialog.component';
import { ReservationFailedDialogComponent } from './reservation-failed-dialog/reservation-failed-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchDialogComponent,
    AddReviewDialogComponent,
    ReservationConfirmDialogComponent,
    ReservationConfirmedDialogComponent,
    ReservationFailedDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HeaderModule,
    RatingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
