import { AfterViewInit, Component, Input, NgZone, OnInit } from '@angular/core';
import { GameCategory } from 'src/app/models/GameCategory';

@Component({
  selector: 'app-image-slider',
  templateUrl: './app-image-slider.component.html',
  styleUrls: ['./app-image-slider.component.scss']
})
export class AppImageSliderComponent implements AfterViewInit {

  public title: string = "¡Encuentra lo que quieras hacer hoy!";
  public subtitle: string = "¡Busca el evento que desees y encuentra personas con quien hacerlos!";

  @Input() images: string[] = [
    "assets/imgs/carts.jpeg",
    "assets/imgs/scape.jpeg",
    "assets/imgs/laser-tag.jpeg",
    "assets/imgs/carts.jpeg",
    "assets/imgs/scape.jpeg",
    "assets/imgs/laser-tag.jpeg",
    "assets/imgs/carts.jpeg",
    "assets/imgs/scape.jpeg",
    "assets/imgs/laser-tag.jpeg",
    "assets/imgs/carts.jpeg",
    "assets/imgs/scape.jpeg",
    "assets/imgs/laser-tag.jpeg",
    "assets/imgs/carts.jpeg",
    "assets/imgs/scape.jpeg",
    "assets/imgs/laser-tag.jpeg"
  ];

  public changeImageSeconds: number = 2; //Tiempo en segundos

  public index: number = 0;

  constructor(private ngZone: NgZone) { }

  ngAfterViewInit(): void {
    //this.carousel();
    this.setImages();
  }

  public setImages(){
    if(this.images.length<10){
      this.images.push(...this.images);
      this.setImages();
    }else{
      this.showImage();
    }
  }

  public showImage() {
    let x = document.getElementsByClassName("category-images") as HTMLCollectionOf<HTMLElement>;
    let y = document.getElementsByClassName("carousel-image") as HTMLCollectionOf<HTMLElement>;

    if (this.index >= x.length || this.index < 0) this.index = 0;
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = (i == this.index) ? "block" : "none";
      y[i].style.filter = (i == this.index) ? "" : "contrast(0.2) brightness(1.8)";
    }
  }

  public carousel(): void {
    setTimeout(() => {
      this.showImage(); this.index++;
    }, this.changeImageSeconds * 1000);
  }

  public setImage():void{

  }


  public nextImage(): void {
    this.index++;
    this.showImage();
  }

  public previousImage(): void {
    this.index -= 1;
    this.showImage();
  }
}
