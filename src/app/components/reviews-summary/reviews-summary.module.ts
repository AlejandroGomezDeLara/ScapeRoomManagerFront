import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsSummaryComponent } from './reviews-summary.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressBarColorDirective } from 'src/app/directives/progress-bar-color.directive';



@NgModule({
  declarations: [ReviewsSummaryComponent,
    ProgressBarColorDirective],
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [ReviewsSummaryComponent]
})
export class ReviewsSummaryModule { }
