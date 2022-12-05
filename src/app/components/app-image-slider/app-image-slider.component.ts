import { AfterViewInit, Component, Input, NgZone, OnInit } from '@angular/core';
import { GameCategory } from 'src/app/models/GameCategory';
import { GameImage } from 'src/app/models/GameImage';

@Component({
  selector: 'app-image-slider',
  templateUrl: './app-image-slider.component.html',
  styleUrls: ['./app-image-slider.component.scss']
})
export class AppImageSliderComponent implements AfterViewInit {

  @Input() images: GameImage[] = [];

  public changeImageSeconds: number = 2; //Tiempo en segundos

  public index: number = 0;

  public imagesHTML!: HTMLCollectionOf<HTMLImageElement>;
  public carouselImagesHTML!: HTMLCollectionOf<HTMLImageElement>;;
  public carouselContainerHTML!:HTMLElement;

  public interval:any;

  constructor() { }

  ngAfterViewInit(): void {
    this.showImages();
    this.carousel();
  }

  public showImages() {
    this.imagesHTML=document.getElementsByClassName("category-images") as HTMLCollectionOf<HTMLImageElement>;
    this.carouselImagesHTML=document.getElementsByClassName("carousel-image") as HTMLCollectionOf<HTMLImageElement>;

    if (this.index >= this.imagesHTML.length || this.index < 0){
      this.carouselContainerHTML!.scrollLeft=0;
      this.index = 0;
    } 
    for (let i = 0; i < this.imagesHTML.length; i++) {
      this.imagesHTML[i].style.display = (i == this.index) ? "block" : "none";
      this.carouselImagesHTML[i].style.filter = (i == this.index) ? "" : "contrast(0.2) brightness(1.8)";
    }
   
    this.carouselContainerHTML=document.getElementById('carousel-images') as HTMLElement;
  }

  public carousel(): void {
    this.interval=setInterval(() => {
      this.showImages();
      this.index++;
    }, this.changeImageSeconds * 1000);
  }

  public nextImage(): void {
    clearInterval(this.interval);
    this.index++;
    this.showImages();
    this.carouselContainerHTML!.scrollLeft += 25 
  }

  public previousImage(): void {
    clearInterval(this.interval);
    this.index -= 1;
    this.showImages();
    this.carouselContainerHTML!.scrollLeft -= 25;
  }

  public setImage(image:string,i:number):void{
    clearInterval(this.interval);
    this.imagesHTML![i].src=image;
    this.index=i;
    this.showImages();   
  }
}
