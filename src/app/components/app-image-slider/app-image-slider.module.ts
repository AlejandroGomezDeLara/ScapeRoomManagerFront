import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppImageSliderComponent } from './app-image-slider.component';



@NgModule({
  declarations: [AppImageSliderComponent],
  imports: [
    CommonModule,
    
  ],
  exports:[AppImageSliderComponent]
})
export class AppImageSliderModule { }
